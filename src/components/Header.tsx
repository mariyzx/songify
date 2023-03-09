import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import ReactSwitch from 'react-switch';
import Context from '../context/Context';
import Switch from '../styles/components/Switch';

function Header() {
  const { toggleTheme } = useContext(Context);
  const { colors, title } = useContext(ThemeContext);

  return (
    <div>
      <Link to="/search">
        <Switch>
          <h2>Songify</h2>
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
      </Link>
    </div>
  );
}

export default Header;
