import { useContext, useEffect } from 'react';
import ListFavs from '../components/ListFavs';
import Context from '../context/Context';

function Favorites() {
  const { favSongs, getFavs, loading } = useContext(Context);

  useEffect(() => {
    getFavs();
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
      {!loading &&
        favSongs.map((fav) => <ListFavs song={fav} key={fav.previewUrl} />)}
    </div>
  );
}

export default Favorites;
