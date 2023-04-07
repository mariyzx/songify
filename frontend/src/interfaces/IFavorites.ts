export interface IFavorite {
  id: number;
  title: string;
  artist: string;
  album: string;
}

export interface IFavoriteProps {
  song: IFavorite;
}
