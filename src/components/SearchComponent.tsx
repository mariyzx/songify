import { useContext, useState } from 'react';
import Context from '../context/Context';

function Search() {
  const [searchInput, setSearchInput] = useState('');
  const { loading, getAlbums } = useContext(Context);

  const handleSearch = () => {
    getAlbums(searchInput);
    setSearchInput('');
  };

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <form>
          <label htmlFor="search">
            <input
              type="text"
              name="search"
              id="search"
              value={searchInput}
              placeholder="Artist or album.."
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </form>
      )}
    </div>
  );
}

export default Search;
