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

export interface ILoginUpdate {
  email: string;
  description: string;
  name: string;
}

export interface ILoginUpdateResponse extends Omit<ILoginResponse, 'token'> {
  description: string | null;
}