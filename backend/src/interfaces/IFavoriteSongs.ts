export interface IFavoriteSongs {
  id: number,
  title: string,
  artist: string,
  album: string,
}

export interface IFavoriteSongsParam {   
  user: {
    email: string,
  },
  songs: IFavoriteSongs[]
}