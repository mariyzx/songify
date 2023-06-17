import { DefaultTheme } from 'styled-components';
import { IAlbum } from '../../src/interfaces/IAlbum';
import { IFavorite } from '../../src/interfaces/IFavorites';
import { ITrack } from '../../src/interfaces/ISongs';
import {
  IUser,
  ICreatedUser,
  ILogin,
  IUpdatedUser,
} from '../../src/interfaces/IUser';
import light from '../../src/styles/themes/light';
import albumMock from './albums';
import favoriteMock from './favorite';
import { tracksMock } from './songs';
import mockUser from './user';

export interface IContext {
  toggleTheme(): void;
  theme: DefaultTheme;
  createUser(): void;
  login(): Promise<ILogin>;
  user: ICreatedUser;
  statusCode: string;
  loading: boolean;
  albums: Array<IAlbum>;
  empty: boolean;
  getAlbums(): void;
  artistName: string;
  getSongs(): void;
  songs: Array<ITrack>;
  addToFav(): void;
  removeToFav(): void;
  favSongs: Array<IFavorite>;
  getFavs(): void;
  updateUser(): void;
  getRandomArtist(): void;
}

const toggleTheme = () => {
  ':)';
};

const createUser = () => {
  return mockUser;
};

const login = async () => {
  return { status: 'OK' };
};

const getAlbums = () => {
  ':)';
};

const getSongs = () => {
  ':)';
};

const addToFav = () => {
  ':)';
};

const removeToFav = () => {
  ':)';
};

const getFavs = () => {
  ':)';
};

const updateUser = () => {
  ':)';
};

const getRandomArtist = () => {
  ':)';
};

export const providerInfo: IContext = {
  toggleTheme,
  theme: light,
  createUser,
  login,
  user: mockUser,
  statusCode: 'OK',
  loading: false,
  albums: albumMock,
  empty: false,
  getAlbums,
  artistName: albumMock[0].artistName,
  getSongs,
  songs: tracksMock,
  addToFav,
  removeToFav,
  favSongs: favoriteMock,
  getFavs,
  updateUser,
  getRandomArtist,
};
