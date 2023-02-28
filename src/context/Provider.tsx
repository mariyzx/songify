import { useState } from 'react';
import Context from './Context';
import { ICreatedUser, IUser } from '../interfaces/IUser';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import getMusics from '../services/searchSongsAPI';
import addToLocal from '../services/favoriteSongsAPI';
import { ITrack } from '../interfaces/ISongs';
import { IFavorite } from '../interfaces/IFavorites';

function Provider({ children }: never) {
  const emptyUser = {
    name: '',
    email: '',
    image: '',
    description: '',
  };
  const favs = JSON.parse(localStorage.getItem('favorite_songs')!);

  const [user, setUser] = useState<ICreatedUser>(emptyUser);
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [artistName, setArtistName] = useState('');
  const [songs, setSongs] = useState([]);
  const [favSongs, setFavSongs] = useState<IFavorite[]>([]);

  const createUser = (data: IUser): ICreatedUser => {
    const info = { ...emptyUser, ...data };
    localStorage.setItem('user', JSON.stringify(info));
    localStorage.setItem('favorite_songs', JSON.stringify([]));
    setUser(info);
    return info;
  };

  const getAlbums = async (artist: string) => {
    try {
      setLoading(true);
      setArtistName(artist);
      const response = await searchAlbumsAPI(artist);
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
    createUser,
    user,
    getAlbums,
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
