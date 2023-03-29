import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Context from '../context/Context';
import { ITarget } from '../interfaces/IHandleTarget';
import { Button, Label } from '../styles/components/Form';
import Edit from '../styles/pages/ProfileEdit';

function ProfileEdit() {
  const { user } = useContext(Context);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [image, setImg] = useState(user.image);
  const [description, setDescription] = useState(user.description);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const enableButton = () => {
    if (name !== '' && email !== '' && image !== '' && description !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleChange = ({ target }: ITarget) => {
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'email') {
      setEmail(target.value);
    } else if (target.name === 'img') {
      setImg(target.value);
    } else {
      setDescription(target.value);
    }

    enableButton();
  };

  const updateInfo = () => {
    const objUser = { name, email, image, description };
    localStorage.setItem('user', JSON.stringify(objUser));
    navigate('/profile');
  };

  return (
    <div>
      <Header />
      <Edit>
        <h1>Edit your profile:</h1>
        <form>
          <Label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              value={name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </Label>
          <Label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              onChange={(e) => handleChange(e)}
            />
          </Label>
          <Label htmlFor="info">
            Description:
            <input
              type="text"
              id="info"
              value={description}
              name="info"
              onChange={(e) => handleChange(e)}
            />
          </Label>
          <Label htmlFor="img">
            Img url:
            <input
              type="text"
              id="img"
              value={image}
              name="img"
              onChange={(e) => handleChange(e)}
            />
          </Label>
          <Button
            type="submit"
            disabled={disabled}
            onClick={() => updateInfo()}
          >
            Update
          </Button>
        </form>
      </Edit>
    </div>
  );
}

export default ProfileEdit;
