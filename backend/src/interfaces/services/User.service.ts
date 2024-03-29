import { IFavoriteSongs, IFavoriteSongsParam, IFavoriteSongsResponseWithoutPass } from '../IFavoriteSongs';
import { ILoginCredentials, ILoginResponse, ILoginUpdate, ILoginUpdateResponse } from '../ILogin';
import { IRegisterCredentials, IRegisterUser } from '../IRegister';

export interface IUserService {
  register(user: IRegisterCredentials): Promise<IRegisterUser | null> 
  login(user: ILoginCredentials): Promise<ILoginResponse | null>
  addToFav(data: IFavoriteSongsParam): Promise<IFavoriteSongsResponseWithoutPass | null>
  getSongs(email: string): Promise<IFavoriteSongs[] | null>
  removeToFav(data: IFavoriteSongsParam): Promise<IFavoriteSongsResponseWithoutPass | null>
  updateUser(data: ILoginUpdate): Promise<ILoginUpdateResponse | null>
}