import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Headers', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('should load the footer', () => {
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
