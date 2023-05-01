import { useContext, useEffect } from 'react';
import Header from '../components/Header';
import ListFavs from '../components/ListFavs';
import Context from '../context/Context';
import MainFavorites from '../styles/pages/Favorites';

function Favorites() {
  const { favSongs, getFavs, loading, user } = useContext(Context);

  useEffect(() => {
    const { email } = user;
    getFavs(email);
  }, []);

  return (
    <div>
      <Header />
      <MainFavorites>
        <h1>Favorites</h1>
        {!loading &&
          favSongs.map((fav) => <ListFavs song={fav} key={fav.id} />)}
      </MainFavorites>
    </div>
  );
}

export default Favorites;
