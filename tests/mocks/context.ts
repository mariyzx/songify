import { DefaultTheme } from 'styled-components';
import { IAlbum } from '../../src/interfaces/IAlbum';
import { IFavorite } from '../../src/interfaces/IFavorites';
import { ITrack } from '../../src/interfaces/ISongs';
import { IUser, ICreatedUser } from '../../src/interfaces/IUser';
import light from '../../src/styles/themes/light';
import albumMock from './albums';
import favoriteMock from './favorite';
import songsMock from './songs';
import mockUser from './user';

export interface IContext {
  toggleTheme(): void;
  theme: DefaultTheme;
  createUser(data: IUser): ICreatedUser;
  user: ICreatedUser;
  loading: boolean;
  albums: Array<IAlbum>;
  empty: boolean;
  getAlbums(artist: string): void;
  artistName: string;
  getSongs(album: string): void;
  songs: Array<ITrack>;
  addToFav(song: object): void;
  removeToFav(song: object): void;
  favSongs: Array<IFavorite>;
  getFavs(): void;
}

const toggleTheme = () => {
  ':)';
};

const createUser = () => {
  return mockUser;
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

export const providerInfo: IContext = {
  toggleTheme,
  theme: light,
  createUser,
  user: mockUser,
  loading: false,
  albums: albumMock,
  empty: false,
  getAlbums,
  artistName: albumMock[0].artistName,
  getSongs,
  songs: songsMock,
  addToFav,
  removeToFav,
  favSongs: favoriteMock,
  getFavs,
};
