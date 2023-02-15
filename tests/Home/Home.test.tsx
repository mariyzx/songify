import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { WrappedApp } from '../../src/App';

describe('Home >', () => {
  it('Renders title', () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT
    // EXPECT
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Songify'
    );
  });

  it('Renders email and password input', () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT
    // EXPECT
    expect(screen.getByRole('input', { name: 'email' })).toBeInTheDocument();
  });
});
