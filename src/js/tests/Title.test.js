import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'intersection-observer';
import Title from '../components/Title';

describe('Titles', () => {
  beforeEach(() => {
    render(<Title />);
  });

  it('should load the content', () => {
    expect(screen.getByTestId('title')).toBeInTheDocument();
  });
  it('the div should have a class of header__title', () => {
    expect(screen.getByTestId('title')).toHaveClass('header__title');
  });
});
