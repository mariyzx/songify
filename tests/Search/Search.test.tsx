import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Search from '../../src/pages/Search';
import light from '../../src/styles/themes/light';
import Context from '../../src/context/Context';
import { providerInfo } from '../mocks/context';

describe('Search >', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Context.Provider value={providerInfo}>
          <ThemeProvider theme={light}>
            <Search />
          </ThemeProvider>
        </Context.Provider>
      </BrowserRouter>
    );
  });

  it('Render Search component', () => {
    const title = screen.getByRole('heading', { name: /songify!/i });
    expect(title).toBeInTheDocument();
  });
});
