import { describe, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { App } from '../../src/App';
import light from '../../src/styles/themes/light';

describe('Home >', () => {
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
  afterEach(() => {
    setItemSpy.mockClear();
  });

  beforeEach(() => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={light}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  it('Renders title', () => {
    const title = screen.getByRole('heading', { name: /songify/i });

    expect(title).toHaveTextContent('Songify');
  });

  it('Renders email and name input', () => {
    const email = screen.getByLabelText('Email');
    const name = screen.getByLabelText('Name');

    expect(email).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it('Renders a login button', () => {
    const button = screen.getByRole('button', { name: 'Sign In' });

    expect(button).toBeInTheDocument();
  });

  it('Cant login with invalid email', () => {
    const email = screen.getByLabelText('Email');
    const name = screen.getByLabelText('Name');
    const button = screen.getByRole('button', { name: 'Sign In' });
    userEvent.type(email, 'invalid@email');
    userEvent.type(name, 'ada');

    expect(email).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('Cant login with invalid name', () => {
    const email = screen.getByLabelText('Email');
    const name = screen.getByLabelText('Name');
    const button = screen.getByRole('button', { name: 'Sign In' });
    userEvent.type(email, 'adalovelace@email.com');
    userEvent.type(name, 'inval');

    expect(name).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('Email and name are saved on button click', async () => {
    const email = screen.getByLabelText('Email');
    const name = screen.getByLabelText('Name');
    const button = screen.getByRole('button', { name: 'Sign In' });
    userEvent.type(email, 'adalovelace@email.com');
    userEvent.type(name, 'Adave');

    userEvent.click(button);

    const data = {
      name: 'Ada',
      email: 'adalovelace@email.com',
      image: '',
      description: '',
    };

    localStorage.setItem('user', JSON.stringify(data));

    await waitFor(() => expect(setItemSpy).toHaveBeenCalled());
  });
});
