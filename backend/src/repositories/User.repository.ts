import { IFavoriteSongs, IFavoriteSongsParam, IFavoriteSongsResponse } from '../interfaces/IFavoriteSongs';
import { IRegisterCredentials, IRegisterUser } from '../interfaces/IRegister';
import { IUserRepository } from '../interfaces/repositories/UserRepository';
import Prisma from '../model';

export class UserRepository implements IUserRepository {
	async register(data: IRegisterCredentials): Promise<IRegisterUser | null> {
		return (await Prisma.user.create({
			data: {
				email: data.email,
				password: data.password,
				name: data.name,
			}
		}));
	}

	async findUser(email: string): Promise<IRegisterUser | null> {
		return (await Prisma.user.findUnique({
			where: {
				email
			}
		}));
	}

	async createSongs(songs: IFavoriteSongs[]): Promise<IFavoriteSongs[]> {
		const createdSongs = await Promise.all(songs.map(song =>
			Prisma.songs.create({
				data: {
					title: song.title,
					artist: song.artist,
					album: song.album
				}
			})
		));
	
		return createdSongs;
	}

	async addToFav(data: IFavoriteSongsParam): Promise<IFavoriteSongsResponse> {
		const { user: { email }, songs } = data;
		const songIds = songs.map(song => song.id);

		const existingSongs = await Prisma.songs.findMany({
			where: {
				id: {
					in: songIds
				}
			}
		});

		// Verifica se todos os registros foram encontrados
		if (existingSongs.length !== songIds.length) {
			// Cria os registros que não existem
			const missingSongIds = songIds.filter(id => !existingSongs.find(song => song.id === id));
			const newSongs = await this.createSongs(songs.filter(song => missingSongIds.includes(song.id)));
		
			// Adiciona os novos registros à lista de registros existentes
			existingSongs.push(...newSongs);
		}


		const updatedUser = await Prisma.user.update({
			where: {
				email
			},
			data: {
				favoriteSongs: {
					connect: existingSongs.map(song => ({ id: song.id })),
				}
			},
			include: {
				'favoriteSongs': true
			}
		});

		return updatedUser;
	}
}