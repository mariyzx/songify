import { useContext, useState } from 'react';
import Context from '../context/Context';
import { Label, SearchButton } from '../styles/components/Form';
import Loader from '../styles/components/Loader';
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
        <Loader>
          <div />
        </Loader>
      ) : (
        <form>
          <Label htmlFor="search">
            <input
              type="text"
              name="search"
              id="search"
              value={searchInput}
              placeholder="Artist or album.."
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </Label>
          <SearchButton type="button" onClick={handleSearch}>
            Search
          </SearchButton>
        </form>
      )}
    </SearchForm>
  );
}

export default Search;
