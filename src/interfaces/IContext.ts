import { IAlbum } from './IAlbum';
import { IUser, ICreatedUser } from './IUser';

export interface IContext {
  createUser(data: IUser): ICreatedUser;
  user: ICreatedUser;
  loading: boolean;
  albums: Array<IAlbum>;
  getAlbums(artist: string): void;
  artistName: string;
}
