import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../context/Context';
import SongsCard from './SongsCard';

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
      {songs.length > 0 && (
        <div>
          <h2>{info.collectionName}</h2>
          <img src={info.artworkUrl100} alt={info.collectionName} />
          <h3>{artistName}</h3>
        </div>
      )}
      {loading ? (
        <p>Carregando...</p>
      ) : (
        tracks.map((song) => <SongsCard song={song} key={song.trackId} />)
      )}
    </div>
  );
}

export default Album;
