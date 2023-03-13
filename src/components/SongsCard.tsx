import { useContext, useEffect, useState } from 'react';
import { HeartSwitch } from '@anatoliygatt/heart-switch';
import { lighten } from 'polished';
import Context from '../context/Context';
import { ITarget } from '../interfaces/IHandleTarget';
import { IProps } from '../interfaces/ISongs';
import { IFavorite } from '../interfaces/IFavorites';
import { DivSongs } from '../styles/components/SongsCard';

function SongsCard(props: IProps) {
  const { song } = props;
  const { addToFav, removeToFav, theme } = useContext(Context);
  const [fav, setFav] = useState(false);

  const addFav = ({ target }: ITarget) => {
    const { trackName, previewUrl, artistName, artworkUrl100 } = song;
    if (target.checked) {
      addToFav({ trackName, previewUrl, artistName, artworkUrl100 });
    } else {
      removeToFav({ trackName, previewUrl, artistName, artworkUrl100 });
    }
  };

  useEffect(() => {
    const locals = localStorage.getItem('favorite_songs');
    if (locals) {
      const favSong = JSON.parse(locals).find(
        (local: IFavorite) => local.trackName === song.trackName
      );
      setFav(favSong);
    }
  }, [fav]);

  return (
    <DivSongs data-testid="songs">
      <h4>{song.trackName}</h4>
      <audio src={song.previewUrl} controls>
        <track kind="caption" />
        Your browser doesn&apos;t support the element! <code>audio</code>
      </audio>
      <label htmlFor="favorite" data-testid="fav_input">
        <HeartSwitch
          size="sm"
          inactiveTrackFillColor={lighten(0.2, theme.colors.secondary)}
          inactiveTrackStrokeColor={theme.colors.secondary}
          activeTrackFillColor={theme.colors.secondary}
          activeTrackStrokeColor={theme.colors.secondary}
          inactiveThumbColor="#ecfeff"
          activeThumbColor="#ecfeff"
          name="favorite"
          onChange={(e) => addFav(e)}
          checked={fav}
        />
        {/* {fav ? <MdFavorite /> : <MdFavoriteBorder />} */}
      </label>
    </DivSongs>
  );
}

export default SongsCard;
