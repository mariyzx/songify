import { useState } from 'react';
import { IValue } from '../interfaces/IForm';
import { useNavigate } from 'react-router-dom';


function Form() {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const validateEmail = (em: string) => {
    setEmail(em);
    const regex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    const isEmailValid = regex.test(em);

    if (isEmailValid && em.length > 8 && name.length > 2) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const validateName = (name: string) => {
    setName(name);
    if (name.length > 2) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleChange = (target: IValue) => {
    if (target.name === 'email') {
      validateEmail(target.value);
    } else {
      validateName(target.value);
    }
  };

  return (
    <form>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={({ target }) => handleChange(target)}
        />
      </label>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={({ target }) => handleChange(target)}
        />
      </label>
      <button type="submit" disabled={disabled} onClick={() => navigate('/search')}>
        Login
      </button>
    </form>
  );
}

export default Form;
