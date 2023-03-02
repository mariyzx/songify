import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import Search from '../../src/pages/Search';
import light from '../../src/styles/themes/light';
import Context from '../../src/context/Context';
import { providerInfo } from '../mocks/context';
import albumMock from '../mocks/albums';

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

  it('Render header navigation', () => {
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('Render search input', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('Render search button', () => {
    const button = screen.getByRole('button', { name: /search/i });
    expect(button).toBeInTheDocument();
  });

  it('Return the albums succesfully', () => {
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Taylor Swift');
    const title = screen.getByRole('heading', {
      name: /result of albums of: taylor swift/i,
    });

    albumMock.forEach((album) => {
      const alb = screen.getByRole('heading', { name: album.collectionName });
      expect(alb).toBeInTheDocument();
    });

    expect(title).toBeInTheDocument();
  });
});
