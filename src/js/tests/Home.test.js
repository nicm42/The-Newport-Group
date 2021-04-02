import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'intersection-observer';
import Home from '../pages/Home';

jest.mock('../content/cardsContent', () => [
  {
    imageSmall: 'test1.jpg',
    srcset: 'test1.jpg 500w',
    text: 'Buy or sell a house',
    link: '/houses',
  },
  {
    imageSmall: 'test2.jpg',
    srcset: 'test2.jpg 500w',
    text: 'Build a house',
    link: '/buildings',
  },
  {
    imageSmall: 'test3.jpg',
    srcset: 'test3.jpg 500w',
    text: 'Rent offices',
    link: '/offices',
  },
]);

describe('Home', () => {
  beforeEach(() => {
    render(
      <Router>
        <Home />
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
    expect(screen.getByRole('heading')).toBeInTheDocument();
    //main section
    expect(screen.getByRole('main')).toBeInTheDocument();
    //Info component
    expect(screen.getByTestId('paragraphs')).toBeInTheDocument();
    //Parallax component
    expect(screen.getByTestId('div')).toBeInTheDocument();
    //Cards component (text is also in Nav)
    expect(screen.getAllByText('Buy or sell a house')).toHaveLength(2);
  });
  it('Title should be for home page', () => {
    expect(document.title).toBe('The Newport Group - Home');
  });
});
