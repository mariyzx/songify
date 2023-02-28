import { IAlbum } from './IAlbum';
import { IFavorite } from './IFavorites';
import { ITrack } from './ISongs';
import { IUser, ICreatedUser } from './IUser';

export interface IContext {
  createUser(data: IUser): ICreatedUser;
  user: ICreatedUser;
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
  getFavs(): void;
}
