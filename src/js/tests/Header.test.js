import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Headers', () => {
  beforeEach(() => {
    render(
      <Router>
        <Header />
      </Router>
    );
  });

  it('should load a header tag and a link (plus 4 nav links)', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
  it('the header should have a class of header and not of short', () => {
    expect(screen.getByTestId('header')).toHaveClass('header');
    expect(screen.getByTestId('header')).not.toHaveClass('short');
  });
  it('should load the skip-link with correct text and link', () => {
    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '#main');
    expect(screen.getByText('Skip to main content')).toBeInTheDocument();
  });
  it('should also render the Nav and Title elements', () => {
    //Nav
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    //Title
    expect(screen.getByTestId('title')).toBeInTheDocument();
  });
});
