import { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import Form from '../components/Form';
import MainHome from '../styles/pages/Home';
import songify from '../assets/songify.svg';
import Context from '../context/Context';
import Switch from '../styles/components/Switch';

function Home() {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(Context);

  return (
    <MainHome>
      <Switch>
        <ReactSwitch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.1, colors.primary)}
          onColor={colors.secondary}
        />
      </Switch>
      <img src={songify} alt="songify" />
      <h1>Songify!</h1>
      <Form />
    </MainHome>
  );
}

export default Home;
