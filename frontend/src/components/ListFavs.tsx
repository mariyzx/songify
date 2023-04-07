import { IFavoriteProps } from '../interfaces/IFavorites';
import { DivSongs } from '../styles/components/SongsCard';

function ListFavs(props: IFavoriteProps) {
  const { song } = props;
  return (
    <DivSongs>
      <h3>{song.title}</h3>
      <h4>{song.artist} </h4>
    </DivSongs>
  );
}

export default ListFavs;
