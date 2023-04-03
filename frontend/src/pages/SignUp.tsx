import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { Button, Label } from '../styles/components/Form';
import Header from '../components/Header';
import MainSignUp from '../styles/pages/SignUp';
import Context from '../context/Context';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(3),
  password: z.string().min(6),
});

type SchemaType = z.infer<typeof schema>;

function SignUp() {
  const {
    register,
    formState: { isDirty, isValid },
    getValues,
    reset,
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
  const { createUser, statusCode } = useContext(Context);

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    createUser(getValues());
    reset({ name: '', email: '', password: '' });
  };

  return (
    <div>
      <Header />
      <MainSignUp>
        <h2>Create your account!</h2>
        <form>
          <Label htmlFor="name">
            <h4>Name</h4>
            <input
              type="name"
              id="name"
              placeholder="Ada Lovelace"
              {...register('name')}
            />
          </Label>
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
            onClick={(e) => handleRegister(e)}
            disabled={!isDirty || !isValid}
          >
            Sign Up
          </Button>
        </form>
        {statusCode}
      </MainSignUp>
    </div>
  );
}

export default SignUp;
