import { useContext } from 'react';
import Context from '../context/Context';
import { ITarget } from '../interfaces/IHandleTarget';
import { IProps } from '../interfaces/ISongs';

function SongsCard(props: IProps) {
  const { song } = props;
  const { addToFav, removeToFav } = useContext(Context);

  const addFav = ({ target }: ITarget) => {
    const { trackName, previewUrl, artistName, artworkUrl100 } = song;
    if (target.checked) {
      addToFav({ trackName, previewUrl, artistName, artworkUrl100 });
    } else {
      removeToFav({ trackName, previewUrl, artistName, artworkUrl100 });
    }
  };

  return (
    <div>
      <h4>{song.trackName}</h4>
      <audio src={song.previewUrl} controls>
        <track kind="caption" />
        Your browser doesn&apos;t support the element! <code>audio</code>
      </audio>
      <label htmlFor="favorite">
        <input type="checkbox" name="favorite" onChange={(e) => addFav(e)} />
      </label>
    </div>
  );
}

export default SongsCard;
