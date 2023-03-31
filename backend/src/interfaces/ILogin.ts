import { IFavoriteSongs } from './IFavoriteSongs';

export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface ILoginResponse {
  name: string;
  email: string;
  token: string;
  favoriteSongs?: IFavoriteSongs[] 
}