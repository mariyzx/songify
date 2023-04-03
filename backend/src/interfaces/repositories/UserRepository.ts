import { IFavoriteSongsParam, IFavoriteSongsResponse } from '../IFavoriteSongs';
import { IRegisterCredentials, IRegisterUser } from '../IRegister';

export interface IUserRepository {
  register(data: IRegisterCredentials): Promise<IRegisterUser | null>
  findUser(email: string): Promise<IRegisterUser | null>
  addToFav(data: IFavoriteSongsParam): Promise<IFavoriteSongsResponse>
}