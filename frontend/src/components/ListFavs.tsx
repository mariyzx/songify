import { IFavoriteProps } from '../interfaces/IFavorites';
import Audio from '../styles/components/Audio';
import { DivSongs } from '../styles/components/SongsCard';

function ListFavs(props: IFavoriteProps) {
  const { song } = props;
  return (
    <DivSongs>
      <h3>{song.title}</h3>
      <h4>{song.artist} </h4>
      <Audio src={song.previewUrl} controls>
        <track kind="caption" />
        Your browser doesn&apos;t support the element! <code>Audio</code>
      </Audio>
    </DivSongs>
  );
}

export default ListFavs;
