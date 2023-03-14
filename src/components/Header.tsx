import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import ReactSwitch from 'react-switch';
import { BsMoon, BsSun } from 'react-icons/bs';
import Context from '../context/Context';
import { DivSwitch } from '../styles/components/Switch';
import MainHeader from '../styles/components/Header';

function Header() {
  const { toggleTheme } = useContext(Context);
  const { colors, title } = useContext(ThemeContext);

  return (
    <MainHeader>
      <Link to="/search">
        <h2>Songify</h2>
      </Link>
      <DivSwitch>
        <BsSun />
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
        <BsMoon />
      </DivSwitch>
    </MainHeader>
  );
}

export default Header;
