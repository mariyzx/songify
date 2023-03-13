import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../context/Context';
import SongsCard from '../components/SongsCard';
import Header from '../components/Header';
import Loader from '../styles/components/Loader';
import { MainAlbum, DivAlbum } from '../styles/pages/Album';
import { Songs } from '../styles/components/SongsCard';

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
      <MainAlbum>
        {songs.length > 0 && (
          <DivAlbum>
            <img src={info.artworkUrl100} alt={info.collectionName} />
            <span>
              <h2>{info.collectionName}</h2>
              <h3>{artistName}</h3>
            </span>
          </DivAlbum>
        )}
        {loading ? (
          <Loader>
            <div />
          </Loader>
        ) : (
          <Songs>
            {tracks.map((song) => (
              <SongsCard song={song} key={song.trackId} />
            ))}
          </Songs>
        )}
      </MainAlbum>
    </div>
  );
}

export default Album;
