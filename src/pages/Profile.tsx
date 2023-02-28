import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Context from '../context/Context';

function Profile() {
  const { user } = useContext(Context);
  return (
    <div>
      <Header />
      <h1>Profile</h1>
      <img src={user.image} alt={user.name} />
      <h2>Name: {user.name}</h2>
      <h3>Email: {user.email}</h3>
      <h4>Description: {user.description}</h4>
      <Link to="/profile/edit">Edit</Link>
    </div>
  );
}

export default Profile;
