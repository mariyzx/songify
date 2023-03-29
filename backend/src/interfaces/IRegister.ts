import { IFavoriteSongs } from './FavoriteSongs';

export interface IRegisterUser {
  name: string,
  email: string,
  password: string
}

export interface IRegisterResponse {
  id: number,
  name: string,
  email: string,
  token: string,
  favoriteSongs?: IFavoriteSongs[]
}