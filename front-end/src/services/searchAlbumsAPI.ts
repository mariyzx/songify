const searchAlbumsAPI = async (artist: string) => {
  const artistName = encodeURI(artist).replaceAll('%20', '+');

  const api = `https://itunes.apple.com/search?entity=album&term=${artistName}&attribute=allArtistTerm`;

  const response = await fetch(api);
  const { results } = await response.json();

  return results;
};

export default searchAlbumsAPI;
