import { IFavoriteSongs } from './FavoriteSongs';

export interface IRegisterUser {
  name: string,
  email: string,
  password: string
  token: string,
  favoriteSongs?: IFavoriteSongs[]
}

export type IRegisterResponse = Omit<IRegisterUser, 'password'>