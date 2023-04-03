import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Context from '../context/Context';
import { Button, HomeForm, Label } from '../styles/components/Form';
import Loader from '../styles/components/Loader';

const schema = z.object({
  email: z.string().email().min(3),
  password: z.string().min(6),
});

type SchemaType = z.infer<typeof schema>;

function Form() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, statusCode, user } = useContext(Context);
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
    login(getValues());
    // aqui precisa de correção, está 1 click atrasado
    statusCode === 'OK' ? navigate('/search') : null; 
    setLoading(false);
  };

  return (
    <HomeForm>
      <Label htmlFor="email">
        <h4>Email</h4>
        <input
          type="email"
          id="email"
          placeholder="adalovelace@email.com"
          {...register('email')}
        />
      </Label>
      <Label htmlFor="password">
        <h4>Password</h4>
        <input
          type="password"
          id="password"
          placeholder="******"
          {...register('password')}
        />
      </Label>
      <Button
        type="submit"
        disabled={!isDirty || !isValid}
        onClick={(e) => handleLogin(e)}
      >
        Sign In
      </Button>
      <p>
        Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
      </p>
      {statusCode}
      {loading && (
        <Loader>
          <div />
        </Loader>
      )}
    </HomeForm>
  );
}

export default Form;
