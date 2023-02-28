import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <h3>Songify!</h3>
        <nav>
          <Link to="/search">Search</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
