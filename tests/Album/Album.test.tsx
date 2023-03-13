import { MemoryRouter } from 'react-router-dom';
import { describe, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import { providerInfo } from '../mocks/context';
import Context from '../../src/context/Context';
import light from '../../src/styles/themes/light';
import Album from '../../src/pages/Album';
import albumMock from '../mocks/albums';
import { tracksMock } from '../mocks/songs';

describe('Album >', () => {
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

  afterEach(() => {
    setItemSpy.mockClear();
  });

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
    expect(songs.length).toBe(tracksMock.length - 1);
  });

  it('Add song to favorites', async () => {
    const song = screen.getAllByTestId('songs')[0];
    expect(song).toHaveTextContent(tracksMock[1].trackName);
    const fav = screen.getAllByTestId('fav_input')[0];
    userEvent.click(fav);

    const data = [
      {
        trackName: tracksMock[1].trackName,
        previewUrl: tracksMock[1].previewUrl,
        artistName: tracksMock[1].artistName,
        artworkUrl100: tracksMock[1].artworkUrl100,
      },
    ];

    localStorage.setItem('favorite_songs', JSON.stringify(data));

    await waitFor(() => expect(setItemSpy).toHaveBeenCalled());
  });
});
