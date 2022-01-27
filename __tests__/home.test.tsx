import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders a link to start the questionnaire', () => {
    render(<Home />);

    const startButton = screen.getByRole('link', { name: 'Start' });

    expect(startButton).toBeInTheDocument();
  });

  it('start link directs to form', () => {
    render(<Home />);

    const startButton = screen.getByRole('link', { name: 'Start' });

    expect(startButton.getAttribute('href')).toBe('/form');
  });
});
