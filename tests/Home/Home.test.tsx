import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { WrappedApp } from '../../src/App';

describe('Home >', () => {
  it('Renders title', () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT
    const title = screen.getByRole('heading', { level: 1 });
    // EXPECT
    expect(title).toHaveTextContent('Songify!');
  });

  it('Renders email and name input', () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT
    const email = screen.getByLabelText('Email:');
    const name = screen.getByLabelText('Name:');
    // EXPECT
    expect(email).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it('Renders a login button', () => {
    render(<WrappedApp />);

    const button = screen.getByRole('button', { name: 'Login' });
    expect(button).toBeInTheDocument();
  });

  it('Cant login with invalid email', () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT
    const email = screen.getByLabelText('Email:');
    const name = screen.getByLabelText('Name:');
    const button = screen.getByRole('button', { name: 'Login' });
    userEvent.type(email, 'invalid@email');
    userEvent.type(name, 'password12');
    // EXPECT
    expect(email).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('Cant login with invalid name', () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT
    const email = screen.getByLabelText('Email:');
    const name = screen.getByLabelText('Name:');
    const button = screen.getByRole('button', { name: 'Login' });
    userEvent.type(email, 'adalovelace@email.com');
    userEvent.type(name, 'inval');
    // EXPECT
    expect(name).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
