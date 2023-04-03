import { Button, Label } from '../styles/components/Form';
import Header from '../components/Header';
import MainSignUp from '../styles/pages/SignUp';

function SignUp() {
  return (
    <div>
      <Header />
      <MainSignUp>
        <h2>Create your account!</h2>
        <form>
          <Label htmlFor="email">
            <h4>Name</h4>
            <input type="name" id="name" placeholder="Ada Lovelace" />
          </Label>
          <Label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              id="email"
              placeholder="adalovelace@email.com"
            />
          </Label>
          <Label htmlFor="password">
            <h4>Password</h4>
            <input type="text" id="password" placeholder="******" />
          </Label>
          <Button type="submit">Sign Up</Button>
        </form>
      </MainSignUp>
    </div>
  );
}

export default SignUp;
