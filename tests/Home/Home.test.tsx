import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

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

  it('Renders email and password input', () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT
    const email = screen.getByLabelText('Email:');
    const pass = screen.getByLabelText('Password:');
    // EXPECT
    expect(email).toBeInTheDocument();
    expect(pass).toBeInTheDocument();
  });

  it('Renders a login button', () => {
    render(<WrappedApp />);

    const button = screen.getByRole('button', { name: 'Login' });
    expect(button).toBeInTheDocument();
  });
});
