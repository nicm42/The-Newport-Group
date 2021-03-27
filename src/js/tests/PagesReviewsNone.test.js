import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'intersection-observer';
import PagesReview from '../components/PagesReview';

describe('Review section', () => {
  beforeEach(() => {
    return null;
  });

  it.only('should not load anything', () => {
    expect(screen.queryByRole('img')).toBeNull();
    expect(screen.queryByTestId('quote')).toBeNull();
  });
});
