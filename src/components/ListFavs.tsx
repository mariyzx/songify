import { IFavoriteProps } from '../interfaces/IFavorites';

function ListFavs(props: IFavoriteProps) {
  const { song } = props;
  return (
    <div>
      <img src={song.artworkUrl100} alt={song.trackName} />
      <h3>{song.trackName}</h3>
      <h4>{song.artistName} </h4>
      <audio src={song.previewUrl} controls>
        <track kind="caption" />
        Your browser doesn&apos;t support the element! <code>audio</code>
      </audio>
    </div>
  );
}

export default ListFavs;
