import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <Link to="/search">
          <h3>Songify!</h3>
        </Link>
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
