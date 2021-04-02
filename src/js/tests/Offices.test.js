import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'intersection-observer';
import Offices from '../pages/Offices';

const introContent = {
  title: 'House building',
  imageSmall: 'testsmall.jpg',
  imageMedium: 'testmedium.jpg',
  imageBig: 'testbig.jpg',
  intro: 'Intro text',
};

const reviewContent = [
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

const videoContent = [
  {
    video: 'test1.mp4',
    poster: 'test1.jpg',
    label: 'Test label 1',
  },
  {
    video: 'test2.mp4',
    poster: 'test2.jpg',
    label: 'Test label 2',
  },
];

jest.mock('../content/officesContent', () => ({
  officeIntro: introContent,
  officeReviews: reviewContent,
  officeVideos: videoContent,
}));

//Stop error occuring from muted videos: https://github.com/testing-library/react-testing-library/issues/470
Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
  set: () => {},
});

describe('Offices page', () => {
  beforeEach(() => {
    render(
      <Router>
        <Offices />
      </Router>
    );
  });

  let observe = jest.fn();
  let disconnect = jest.fn();
  window.IntersectionObserver = jest.fn(() => ({
    observe,
    disconnect,
  }));

  it('loads everything', () => {
    //Header component
    expect(screen.getByTestId('header')).toBeInTheDocument();
    //main section
    expect(screen.getByRole('main')).toBeInTheDocument();
    //Intro component
    expect(screen.getByTestId('intro')).toBeInTheDocument();
    //Review component
    expect(screen.getAllByTestId('quote')).toHaveLength(3);
    //Videos component
    expect(screen.getAllByTestId('video')).toHaveLength(2);
  });
  it('Title should be for buildings page', () => {
    //screen.debug();
    expect(document.title).toBe('The Newport Group - Office Space');
  });
});
