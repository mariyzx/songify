import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../context/Context';
import SongsCard from '../components/SongsCard';
import Header from '../components/Header';
import Loader from '../styles/components/Loader';

function Album() {
  const { songs, getSongs, artistName, loading } = useContext(Context);
  const { id } = useParams();
  const info = songs[0];
  const tracks = songs.filter((song) => song !== info);

  useEffect(() => {
    getSongs(id!);
  }, []);

  return (
    <div>
      <Header />
      {songs.length > 0 && (
        <div>
          <h2>{info.collectionName}</h2>
          <img src={info.artworkUrl100} alt={info.collectionName} />
          <h3>{artistName}</h3>
        </div>
      )}
      {loading ? (
        <Loader>
          <div />
        </Loader>
      ) : (
        tracks.map((song) => <SongsCard song={song} key={song.trackId} />)
      )}
    </div>
  );
}

export default Album;
