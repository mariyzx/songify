import { IFavoriteSongs } from './IFavoriteSongs';

export interface IRegisterUser {
  name: string,
  email: string,
  password: string
  favoriteSongs?: IFavoriteSongs[]
}

export interface IRegisterCredentials {
  name: string,
  email: string,
  password: string
}
