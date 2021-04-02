import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'intersection-observer';
import PagesReview from '../components/PagesReview';

const content = [
  {
    imageSmall: 'test1.jpg',
    srcset: 'test1.jpg 500w',
    alt: 'Test alt text 1',
    text: 'Test text 1',
  },
  {
    imageSmall: 'test2.jpg',
    srcset: 'test2.jpg 500w',
    alt: 'Test alt text 2',
    text: 'Test text 2',
  },
  {
    imageSmall: 'test3.jpg',
    srcset: 'test3.jpg 500w',
    alt: 'Test alt text 3',
    text: 'Test text 3',
  },
];

jest.mock('../content/buildingsContent', () => ({
  buildingReviews: content,
}));

describe('Review section', () => {
  beforeEach(() => {
    render(<PagesReview type="Buildings" />);
  });

  it('should load everything', () => {
    expect(screen.getAllByRole('img')).toHaveLength(3);
    expect(screen.getAllByTestId('quote')).toHaveLength(3);
  });
  it('Checks the images have the right src and alt text', () => {
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('src', 'test1.jpg');
    expect(screen.getAllByRole('img')[1]).toHaveAttribute('src', 'test2.jpg');
    expect(screen.getAllByRole('img')[2]).toHaveAttribute('src', 'test3.jpg');
    expect(screen.getAllByRole('img')[0]).toHaveAttribute(
      'alt',
      'Test alt text 1'
    );
    expect(screen.getAllByRole('img')[1]).toHaveAttribute(
      'alt',
      'Test alt text 2'
    );
    expect(screen.getAllByRole('img')[2]).toHaveAttribute(
      'alt',
      'Test alt text 3'
    );
  });
  it('Checks the quotes have the right content', () => {
    expect(screen.getByText('Test text 1')).toBeInTheDocument();
    expect(screen.getByText('Test text 2')).toBeInTheDocument();
    expect(screen.getByText('Test text 3')).toBeInTheDocument();
  });
});
