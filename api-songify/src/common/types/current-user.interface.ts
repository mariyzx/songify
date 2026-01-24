export interface CurrentUser {
  id: number;
  email: string;
  name: string;
  description: string | null;
  favoriteSongs?: { id: number; title: string; artist: string; album: string; previewUrl: string }[];
}
