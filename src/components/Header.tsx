import { useContext } from "react";
import { Link } from "react-router-dom"
import Context from "../context/Context";

const Header = () => {
  const { user } = useContext(Context);

  return (
    <div>
      <header>
        <h3>{user.name}</h3>
        <nav>
          <Link to="/search">Search</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>
    </div>
  )
}

export default Header;