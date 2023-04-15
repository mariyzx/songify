export interface IFavorite {
  id: number;
  title: string;
  artist: string;
  previewUrl: string;
  album: string;
}

export interface IFavoriteProps {
  song: IFavorite;
}
