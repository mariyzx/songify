import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Context from '../context/Context';
import { Button, HomeForm, Label, SignUp } from '../styles/components/Form';
import Loader from '../styles/components/Loader';

const schema = z.object({
  email: z.string().email().min(3),
  password: z.string().min(6),
});

type SchemaType = z.infer<typeof schema>;

function Form() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, statusCode } = useContext(Context);
  const {
    register,
    formState: { isDirty, isValid },
    getValues,
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (loading) {
      return; // Evita que o botão seja pressionado várias vezes seguidas
    }
    setLoading(true);
    const response = await login(getValues());
    if (response.status === 'OK') {
      navigate('/search');
    } else {
      console.log('error:', response.status);
    }
    // setStatusCode(null);
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
        type="button"
        disabled={!isDirty || !isValid || loading}
        onClick={(e) => handleLogin(e)}
      >
        Sign In
      </Button>
      <p>
        Don&apos;t have an account? <SignUp to="/signup">Sign Up</SignUp>
      </p>

      {loading ? (
        <Loader>
          <div />
        </Loader>
      ) : (
        <p>{statusCode}</p>
      )}
    </HomeForm>
  );
}

export default Form;
