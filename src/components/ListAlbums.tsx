import { useContext } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import { DivAlbum, CardAlbum, ListAlb } from '../styles/components/ListAlbums';

function ListAlbums() {
  const { albums, artistName, empty } = useContext(Context);
  return (
    <DivAlbum>
      {!empty ? (
        <>
          <h3>Result of albums of: {artistName}</h3>
          <ListAlb>
            {albums.map((album) => (
              <div key={album.artworkUrl100}>
                <CardAlbum>
                  <div>
                    <Link to={`/album/${album.collectionId}`}>
                      <img
                        src={album.artworkUrl100}
                        alt={album.collectionName}
                      />
                      <h3>{album.collectionName}</h3>
                      <div>
                        <p>{album.releaseDate.substring(0, 4)}</p>
                        <span>•</span>
                        <p>{artistName}</p>
                      </div>
                    </Link>
                  </div>
                  <span>
                    <AiFillPlayCircle />
                  </span>
                </CardAlbum>
              </div>
            ))}
          </ListAlb>
        </>
      ) : (
        <h3>Sorry, not found! :(</h3>
      )}
    </DivAlbum>
  );
}

export default ListAlbums;
