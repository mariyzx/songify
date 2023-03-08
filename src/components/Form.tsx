import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Context from '../context/Context';
import HomeForm from '../styles/components/Form';

const schema = z.object({
  email: z.string().email().min(3),
  name: z.string().min(3),
});

type SchemaType = z.infer<typeof schema>;

function Form() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { createUser } = useContext(Context);
  const {
    register,
    formState: { isDirty, isValid },
    getValues,
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    createUser(getValues());
    setLoading(false);
    navigate('/search');
  };

  return (
    <HomeForm>
      <label htmlFor="email">
        <h4>Email</h4>
        <input
          type="email"
          id="email"
          placeholder="adalovelace@email.com"
          {...register('email')}
        />
      </label>
      <label htmlFor="name">
        <h4>Name</h4>
        <input
          type="text"
          id="name"
          placeholder="Ada Lovelace"
          {...register('name')}
        />
      </label>
      <button
        type="submit"
        disabled={!isDirty || !isValid}
        onClick={(e) => handleLogin(e)}
      >
        Sign In
      </button>
      {loading && <p>Carregando...</p>}
    </HomeForm>
  );
}

export default Form;
