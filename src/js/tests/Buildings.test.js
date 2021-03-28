import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'intersection-observer';
import Buildings from '../pages/Buildings';
/* import PagesHeader from '../components/PagesHeader';
import PagesIntro from '../components/PagesIntro';
import PagesReview from '../components/PagesReview';
import PagesVideos from '../components/PagesVideos'; */

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

jest.mock('../content/buildingsContent', () => ({
  buildingIntro: introContent,
  buildingReviews: reviewContent,
  buildingVideos: videoContent,
}));

/* jest.mock('../components/PagesIntro', () => ({
  PagesIntro: (props) => <div data-testid="PagesIntro">{props.type}</div>,
})); */

/* jest.mock('../components/PagesIntro', () => ({
  PagesIntro: jest.fn(() => <div data-testid="PagesIntro" type="Buildings" />),
})); */

/* jest.mock('../components/PagesReview', () => ({
  PagesReview: jest.fn(() => (
    <div data-testid="PagesReview" type="Buildings" />
  )),
}));

jest.mock('../components/PagesVideos', () => ({
  PagesVideos: jest.fn(() => (
    <div data-testid="PagesVideos" type="Buildings" />
  )),
})); */

describe('Buildings page', () => {
  beforeEach(() => {
    render(
      <Router>
        <Buildings />
      </Router>
    );
  });

  let observe = jest.fn();
  let disconnect = jest.fn();
  window.IntersectionObserver = jest.fn(() => ({
    observe,
    disconnect,
  }));

  //const title = 'Home page title';
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
  it.only('Title should be for buildings page', () => {
    //screen.debug();
    expect(document.title).toBe('The Newport Group - Buy or Sell a House');
  });
});
