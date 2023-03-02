import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

function ListAlbums() {
  const { albums, artistName, empty } = useContext(Context);
  return (
    <div>
      {!empty ? (
        <div>
          <h3>Result of albums of: {artistName}</h3>
          {albums.map((album) => (
            <div key={album.collectionName}>
              <img src={album.artworkUrl100} alt={album.collectionName} />
              <h3>{album.collectionName}</h3>
              <p>{album.releaseDate.substring(0, 4)}</p>
              <Link to={`/album/${album.collectionId}`}>Details</Link>
            </div>
          ))}
        </div>
      ) : (
        <h3>Sorry, not found! :(</h3>
      )}
    </div>
  );
}

export default ListAlbums;
