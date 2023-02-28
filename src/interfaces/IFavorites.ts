export interface IFavorite {
  artistName: string;
  artworkUrl100: string;
  previewUrl: string;
  trackName: string;
}

export interface IFavoriteProps {
  song: IFavorite;
}
