import { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import Context from './Context';
import { ICreatedUser, ILogin, IUser } from '../interfaces/IUser';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import getMusics from '../services/searchSongsAPI';
import addToLocal from '../services/favoriteSongsAPI';
import { ITrack } from '../interfaces/ISongs';
import { IFavorite } from '../interfaces/IFavorites';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import usePersistedState from '../utils/usePersistedState';
import api from '../api/api';

function Provider({ children }: any) {
  const emptyUser = {
    email: '',
    password: '',
    image: '',
    description: '',
  };
  const favs = JSON.parse(localStorage.getItem('favorite_songs')!);

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
        setStatusCode(res.statusText);
        const { password: _, ...userWithoutPass } = info;
        setUser(userWithoutPass);
        return userWithoutPass;
      })
      .catch((err) => setStatusCode(err.response.data.message));
  };

  const login = async (data: IUser): Promise<ILogin> => {
    try {
      const response = await api.post('login', data);
      setStatusCode('');
      setUser(response.data);
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

  const addToFav = (song: ITrack) => {
    try {
      setLoading(true);
      if (favs) {
        const songExistInFav = favs.filter(
          (fav: IFavorite) => fav.trackName === song.trackName
        );
        if (songExistInFav.length === 0) {
          const favorites = addToLocal([...favs, song]);
          setFavSongs(favorites);
        }
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const removeToFav = (song: ITrack) => {
    try {
      setLoading(true);
      const newFavs = favs.filter(
        (fav: IFavorite) => fav.trackName !== song.trackName
      );
      addToLocal(newFavs);
      setFavSongs(newFavs);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getFavs = () => {
    try {
      setLoading(true);
      setFavSongs(favs);
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
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;
