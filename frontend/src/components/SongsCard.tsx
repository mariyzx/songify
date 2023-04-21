import { useContext, useEffect } from 'react';
import { HeartSwitch } from '@anatoliygatt/heart-switch';
import { lighten } from 'polished';
import Context from '../context/Context';
import { ITarget } from '../interfaces/IHandleTarget';
import { IProps } from '../interfaces/ISongs';
import { DivSongs } from '../styles/components/SongsCard';
import Audio from '../styles/components/Audio';

function SongsCard(props: IProps) {
  const { song } = props;
  const { addToFav, removeToFav, theme, getFavs, user, favSongs } =
    useContext(Context);
  const { trackName, previewUrl, artistName, collectionName } = song;

  const addFav = ({ target }: ITarget) => {
    if (target.checked) {
      addToFav({
        title: trackName,
        previewUrl,
        artist: artistName,
        album: collectionName,
      });
    } else {
      removeToFav({
        title: trackName,
        previewUrl,
        artist: artistName,
        album: collectionName,
      });
    }
  };

  useEffect(() => {
    getFavs(user.email);
  }, []);

  return (
    <DivSongs data-testid="songs">
      <h4>{song.trackName}</h4>
      <Audio src={song.previewUrl} controls>
        <track kind="caption" />
        Your browser doesn&apos;t support the element! <code>Audio</code>
      </Audio>
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
        checked={favSongs.some((fv) => fv.title === trackName)}
      />
    </DivSongs>
  );
}

export default SongsCard;
