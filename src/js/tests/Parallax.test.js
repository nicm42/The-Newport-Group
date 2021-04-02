import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'intersection-observer';
import Parallax from '../components/Parallax';

describe('Parallax section', () => {
  beforeEach(() => {
    render(<Parallax />);
  });

  it('should load the content', () => {
    expect(screen.getByTestId('div')).toBeInTheDocument();
  });
  it('the div should have a class of parallax', () => {
    expect(screen.getByTestId('div')).toHaveClass('parallax');
  });
});
