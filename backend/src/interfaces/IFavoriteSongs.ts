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

export interface IFavoriteSongsResponseWithoutPass {
  name: string,
  email: string,
  favoriteSongs?: IFavoriteSongs[]
}

export interface IFavoriteSongsResponse extends IFavoriteSongsResponseWithoutPass {
  password: string
}
