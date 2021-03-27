import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'intersection-observer';
import PagesIntro from '../components/PagesIntro';

describe('Intro section', () => {
  beforeEach(() => {
    render(<PagesIntro type="" />);
  });

  it('should not load everything', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByTestId('intro')).toBeInTheDocument();
  });
  it('Checks the image has the no src or alt text', () => {
    expect(screen.getByRole('img')).toHaveAttribute('src', '');
    expect(screen.getByRole('img')).toHaveAttribute('alt', '');
  });
});
