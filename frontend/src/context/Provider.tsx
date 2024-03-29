import { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import Context from './Context';
import { ICreatedUser, ILogin, IUpdatedUser, IUser } from '../interfaces/IUser';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import getMusics from '../services/searchSongsAPI';
import { ITrack } from '../interfaces/ISongs';
import { IFavorite } from '../interfaces/IFavorites';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import usePersistedState from '../utils/usePersistedState';
import api from '../api/api';
import getRandomArtistAPI from '../services/getRandomArtistAPI';

function Provider({ children }: any) {
  const emptyUser = {
    name: '',
    email: '',
    password: '',
    image: '',
    description: '',
    token: '',
  };

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const [user, setUser] = useState<ICreatedUser>(emptyUser);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [artistName, setArtistName] = useState('');
  const [songs, setSongs] = useState([]);
  const [favSongs, setFavSongs] = useState<IFavorite[]>([]);
  const [statusCode, setStatusCode] = useState('');

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const createUser = (data: IUser): void => {
    const info = { ...emptyUser, ...data };
    api
      .post('register', data)
      .then((res) => {
        setStatusCode('OK');
        const { password: _, ...userWithoutPass } = info;
        setUser({ ...userWithoutPass, name: '' });
        localStorage.setItem('user', JSON.stringify(userWithoutPass));
        return userWithoutPass;
      })
      .catch((err) => setStatusCode(err.response.data.message));
  };

  const login = async (data: IUser): Promise<ILogin> => {
    try {
      const response = await api.post('login', data);
      setStatusCode('');
      setUser(response.data);
      localStorage.setItem('token', JSON.stringify(response.data.token));
      localStorage.setItem('user', JSON.stringify(response.data));
      return { status: 'OK' };
    } catch (err) {
      setStatusCode('User not found');
      return { status: 'User not found!' };
    }
  };

  const getAlbums = async (artist: string) => {
    try {
      setLoading(true);
      setArtistName(artist);
      const response = await searchAlbumsAPI(artist);
      if (response.length === 0) {
        setEmpty(true);
      } else {
        setEmpty(false);
      }
      setAlbums(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getSongs = async (album: string) => {
    try {
      setLoading(true);
      const response = await getMusics(album);
      setSongs(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const addToFav = async (song: ITrack) => {
    try {
      setLoading(true);
      const param = {
        user: {
          email: user.email,
        },
        songs: [song],
      };
      const token = JSON.parse(localStorage.getItem('token')!);
      await api.patch('favorite', param, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const removeToFav = async (song: ITrack) => {
    try {
      setLoading(true);
      const data = {
        user: {
          email: user.email,
        },
        songs: [song],
      };
      const token = JSON.parse(localStorage.getItem('token')!);
      await api.delete('favorite', {
        headers: {
          Authorization: `${token}`,
        },
        data,
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getFavs = async (email: string) => {
    try {
      const response = await api.get('favorite', {
        params: {
          email,
        },
      });
      setStatusCode('');
      setFavSongs(response.data);
      return { status: 'OK' };
    } catch (err) {
      console.log(err);
      setStatusCode('User not found');
      return { status: 'User not found!' };
    }
  };

  const updateUser = async (data: IUpdatedUser) => {
    try {
      const token = JSON.parse(localStorage.getItem('token')!);
      const response = await api.patch('user', data, {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log(response);
      return { status: 'OK' };
    } catch (err) {
      console.log(err);
      return { status: 'Erro' };
    }
  };

  const getRandomArtist = async (): Promise<void> => {
    try {
      setLoading(true);
      const randomArtist = await getRandomArtistAPI(); // Função para obter um artista aleatório da API
      setAlbums(randomArtist);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const contextValue = {
    toggleTheme,
    theme,
    createUser,
    statusCode,
    login,
    setStatusCode,
    user,
    getAlbums,
    empty,
    albums,
    loading,
    artistName,
    getSongs,
    songs,
    addToFav,
    removeToFav,
    favSongs,
    getFavs,
    updateUser,
    getRandomArtist,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;
