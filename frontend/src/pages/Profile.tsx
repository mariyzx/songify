import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Avvvatars from 'avvvatars-react';
import Header from '../components/Header';
import { ICreatedUser } from '../interfaces/IUser';
import MainProfile from '../styles/pages/Profile';

function Profile() {
  const emptyUser = {
    name: '',
    email: '',
    description: '',
    token: '',
  };

  const [user, setUser] = useState<ICreatedUser>(emptyUser);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('user')!);
    setUser(local);
  }, []);

  return (
    <div>
      <Header />
      <MainProfile>
        <h1>Profile</h1>
        <Avvvatars value={user.email} />
        <h2>Name: {user.name}</h2>
        <h3>Email: {user.email}</h3>
        <h4>Description: {user.description}</h4>
        <Link to="/profile/edit">Edit</Link>
      </MainProfile>
    </div>
  );
}

export default Profile;
