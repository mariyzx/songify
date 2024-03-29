import { IFavoriteSongs, IFavoriteSongsParam, IFavoriteSongsResponse } from '../IFavoriteSongs';
import { ILoginUpdate, ILoginUpdateResponse } from '../ILogin';
import { IRegisterCredentials, IRegisterUser } from '../IRegister';

export interface IUserRepository {
  register(data: IRegisterCredentials): Promise<IRegisterUser | null>
  findUser(email: string): Promise<IRegisterUser | null>
  addToFav(data: IFavoriteSongsParam): Promise<IFavoriteSongsResponse>
  getSongs(email: string): Promise<IFavoriteSongs[] | null>
  removeToFav(data: IFavoriteSongsParam): Promise<IFavoriteSongsResponse>
  updateUser(data: ILoginUpdate): Promise<ILoginUpdateResponse>
}