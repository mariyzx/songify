import { IFavorite } from '../interfaces/IFavorites';

const addToLocal = (songs: IFavorite[]) => {
  localStorage.setItem('favorite_songs', JSON.stringify(songs));
  return songs;
};

export default addToLocal;
