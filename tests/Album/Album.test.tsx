import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { providerInfo } from '../mocks/context';
import Context from '../../src/context/Context';
import light from '../../src/styles/themes/light';
import Album from '../../src/pages/Album';
import albumMock from '../mocks/albums';
import { tracksMock } from '../mocks/songs';

describe('Album >', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={[`${albumMock[0].collectionId}`]}>
        <Context.Provider value={providerInfo}>
          <ThemeProvider theme={light}>
            <Album />
          </ThemeProvider>
        </Context.Provider>
      </MemoryRouter>
    );
  });

  it('Render title of the current album', () => {
    const title = screen.getByRole('heading', {
      name: albumMock[0].collectionName,
      level: 2,
    });
    expect(title).toBeInTheDocument();
  });

  it('Render name of the artist', () => {
    const name = screen.getByRole('heading', {
      name: albumMock[0].artistName,
      level: 3,
    });
    expect(name).toBeInTheDocument();
  });

  it('Render every song of the album', () => {
    const songs = screen.getAllByTestId('songs');
    expect(songs.length).toBe(tracksMock.length);
  });
});
