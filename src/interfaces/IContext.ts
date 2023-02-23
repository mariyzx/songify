import { IUser, ICreatedUser } from './IUser';

export interface IContext {
  createUser(data: IUser): ICreatedUser;
  user: ICreatedUser;
  loading: boolean;
  albums: Array<object>;
  getAlbums(artist: string): void;
}
