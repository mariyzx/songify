import { useContext, useState } from 'react';
import Context from '../context/Context';
import { SearchForm } from '../styles/pages/Search';

function Search() {
  const [searchInput, setSearchInput] = useState('');
  const { loading, getAlbums } = useContext(Context);

  const handleSearch = () => {
    getAlbums(searchInput);
    setSearchInput('');
  };

  return (
    <SearchForm>
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
    </SearchForm>
  );
}

export default Search;
