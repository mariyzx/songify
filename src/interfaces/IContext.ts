import { IAlbum } from './IAlbum';
import { ITrack } from './ISongs';
import { IUser, ICreatedUser } from './IUser';

export interface IContext {
  createUser(data: IUser): ICreatedUser;
  user: ICreatedUser;
  loading: boolean;
  albums: Array<IAlbum>;
  getAlbums(artist: string): void;
  artistName: string;
  getSongs(album: string): void;
  songs: Array<ITrack>;
  addToFav(song: object): void;
  removeToFav(song: object): void;
}
