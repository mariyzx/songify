import { IProps } from '../interfaces/ISongs';

function SongsCard(props: IProps) {
  const { song } = props;
  return (
    <div>
      <h4>{song.trackName}</h4>
      <audio src={song.previewUrl} controls>
        <track kind="caption" />
        Your browser doesn&apos;t support the element! <code>audio</code>
      </audio>
    </div>
  );
}

export default SongsCard;
