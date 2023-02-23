import Header from '../components/Header';
import ListAlbums from '../components/ListAlbums';
import SearchComponent from '../components/SearchComponent';

function Search() {
  return (
    <div>
      <Header />
      <SearchComponent />
      <ListAlbums />
    </div>
  );
}

export default Search;
