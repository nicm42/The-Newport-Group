import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'intersection-observer';
import PagesHeader from '../components/PagesHeader';

describe('Pages headers', () => {
  beforeEach(() => {
    render(
      <Router>
        <PagesHeader />
      </Router>
    );
  });

  it('should load a header tag', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('the header should have classes of header and short', () => {
    //I don't know why it can't find this by role here, but can above
    expect(screen.getByTestId('header')).toHaveClass('header');
    expect(screen.getByTestId('header')).toHaveClass('short');
  });
  it('should also render the Nav and Title elements', () => {
    //Nav
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    //Title
    expect(screen.getByTestId('title')).toBeInTheDocument();
  });
});
