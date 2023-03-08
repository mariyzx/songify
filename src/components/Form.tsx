import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IValue } from '../interfaces/IForm';
import Context from '../context/Context';
import HomeForm from '../styles/components/Form';

function Form() {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { createUser } = useContext(Context);

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

  const validateName = (nameInput: string) => {
    setName(nameInput);
    if (nameInput.length > 2) {
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

  const handleLogin = () => {
    setLoading(true);
    createUser({ name, email });
    setLoading(false);
    navigate('/search');
  };

  return (
    <HomeForm>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={({ target }) => handleChange(target)}
        />
      </label>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={({ target }) => handleChange(target)}
        />
      </label>
      <button type="submit" disabled={disabled} onClick={() => handleLogin()}>
        Sign In
      </button>
      {loading && <p>Carregando...</p>}
    </HomeForm>
  );
}

export default Form;
