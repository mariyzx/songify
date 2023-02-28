import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import { ITarget } from '../interfaces/IHandleTarget';

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
      <h1>Edit your profile:</h1>
      <form>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            value={name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="info">
          Description:
          <input
            type="text"
            id="info"
            value={description}
            name="info"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="img">
          Img url:
          <input
            type="text"
            id="img"
            value={image}
            name="img"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit" disabled={disabled} onClick={() => updateInfo()}>
          Update
        </button>
      </form>
    </div>
  );
}

export default ProfileEdit;
