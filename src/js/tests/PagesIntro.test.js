import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'intersection-observer';
import PagesIntro from '../components/PagesIntro';
import { buildingIntro } from '../content/buildingsContent';

const content = {
  title: 'House building',
  imageSmall: 'testsmall.jpg',
  imageMedium: 'testmedium.jpg',
  imageBig: 'testbig.jpg',
  intro: 'Intro text',
};

jest.mock('../content/buildingsContent', () => ({
  buildingIntro: content,
}));

describe('Review section', () => {
  beforeEach(() => {
    render(<PagesIntro type="Buildings" />);
  });

  it('should load everything', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByTestId('intro')).toBeInTheDocument();
  });
  it('Checks the image has the right src and alt text', () => {
    expect(screen.getByRole('img')).toHaveAttribute('src', 'testsmall.jpg');
    expect(screen.getByRole('img')).toHaveAttribute('alt', '');
  });
  it('Checks the text is there', () => {
    expect(screen.getByText('House building')).toBeInTheDocument();
    expect(screen.getByText('Intro text')).toBeInTheDocument();
  });
});
