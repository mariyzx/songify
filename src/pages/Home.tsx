import { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { lighten, shade } from 'polished';
import { BsSun, BsMoon } from 'react-icons/bs';
import Form from '../components/Form';
import MainHome from '../styles/pages/Home';
import songify from '../assets/songify.svg';
import Context from '../context/Context';
import { DivSwitch, Switch } from '../styles/components/Switch';
import Title from '../styles/components/Title';
import Footer from '../styles/components/Footer';

function Home() {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(Context);

  return (
    <div>
      <Switch>
        <h2>Songify</h2>
        <DivSwitch>
          <BsSun />
          <ReactSwitch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            boxShadow={`2px 2px 18px ${lighten(0.1, colors.secondary)}`}
            handleDiameter={20}
            offColor={shade(0.1, colors.primary)}
            onColor={colors.secondary}
          />
          <BsMoon />
        </DivSwitch>
      </Switch>
      <MainHome>
        <img src={songify} alt="songify" />
        <hr />
        <div>
          <Title>Login</Title>
          <Form />
        </div>
        <Footer>
          <a href="https://github.com/mariyzx" target="_blank" rel="noreferrer">
            Mariana Werneck
          </a>
        </Footer>
      </MainHome>
    </div>
  );
}

export default Home;
