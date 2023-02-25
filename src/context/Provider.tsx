import { useState } from 'react';
import Context from './Context';
import { ICreatedUser, IUser } from '../interfaces/IUser';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import getMusics from '../services/searchSongsAPI';

function Provider({ children }: never) {
  const emptyUser = {
    name: '',
    email: '',
    image: '',
    description: '',
  };

  const [user, setUser] = useState<ICreatedUser>(emptyUser);
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [artistName, setArtistName] = useState('');
  const [songs, setSongs] = useState([]);

  const createUser = (data: IUser): ICreatedUser => {
    const info = { ...emptyUser, ...data };
    localStorage.setItem('user', JSON.stringify(info));
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

  const contextValue = {
    createUser,
    user,
    getAlbums,
    albums,
    loading,
    artistName,
    getSongs,
    songs,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;
