import { DefaultTheme } from 'styled-components';
import { IAlbum } from './IAlbum';
import { IFavorite } from './IFavorites';
import { ITrack } from './ISongs';
import { IUser, ICreatedUser, ILogin, IUpdatedUser } from './IUser';

export interface IContext {
  toggleTheme(): void;
  theme: DefaultTheme;
  createUser(data: IUser): void;
  login(data: IUser): Promise<ILogin>;
  user: ICreatedUser;
  statusCode: string;
  loading: boolean;
  albums: Array<IAlbum>;
  empty: boolean;
  getAlbums(artist: string): void;
  artistName: string;
  getSongs(album: string): void;
  songs: Array<ITrack>;
  addToFav(song: object): void;
  removeToFav(song: object): void;
  favSongs: Array<IFavorite>;
  getFavs(email: string): void;
  updateUser(data: IUpdatedUser): void;
}
