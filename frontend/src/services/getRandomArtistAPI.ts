import searchAlbumsAPI from './searchAlbumsAPI';

const artists = [
  'Michael Jackson',
  'Madonna',
  'Beyoncé',
  'Elvis Presley',
  'The Beatles',
  'Prince',
  'Bob Marley',
  'Whitney Houston',
  'Queen',
  'Stevie Wonder',
];

const randomIndex = Math.floor(Math.random() * artists.length);
const randomArtist = artists[randomIndex];

const getRandomArtistAPI = async () => {
  const albums = await searchAlbumsAPI(randomArtist);
  return albums;
};

export default getRandomArtistAPI;
