import { MdFavoriteBorder } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ListAlbums from '../components/ListAlbums';
import SearchComponent from '../components/SearchComponent';
import { MainList } from '../styles/components/ListAlbums';
import Nav from '../styles/components/Nav';
import { MainSearch } from '../styles/pages/Search';

function Search() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('theme');
  };

  return (
    <div>
      <Header />
      <MainSearch>
        <Nav>
          <Link to="/favorites">
            <MdFavoriteBorder />
            Favorites
          </Link>
          <Link to="/profile">
            <CgProfile />
            Profile
          </Link>
          <Link to="/" onClick={() => handleLogout()}>
            <FiLogOut />
            Logout
          </Link>
        </Nav>
        <MainList>
          <SearchComponent />
          <ListAlbums />
        </MainList>
      </MainSearch>
    </div>
  );
}

export default Search;
