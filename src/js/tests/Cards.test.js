import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'intersection-observer';
import Cards from '../components/Cards';

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

describe('Card section', () => {
  beforeEach(() => {
    render(
      <Router>
        <Cards />
      </Router>
    );
  });

  let observe = jest.fn();
  let disconnect = jest.fn();
  window.IntersectionObserver = jest.fn(() => ({
    observe,
    disconnect,
  }));

  it('should load the images', () => {
    expect(screen.getAllByRole('img')).toHaveLength(3);
  });
  it('Checks the links have the right text', () => {
    expect(screen.getByText('Buy or sell a house')).toBeInTheDocument();
    expect(screen.getByText('Build a house')).toBeInTheDocument();
    expect(screen.getByText('Rent offices')).toBeInTheDocument();
  });
  it('checks the links go the right place', () => {
    expect(screen.queryAllByRole('link')[0]).toHaveAttribute('href', '/houses');
    expect(screen.queryAllByRole('link')[1]).toHaveAttribute(
      'href',
      '/buildings'
    );
    expect(screen.queryAllByRole('link')[2]).toHaveAttribute(
      'href',
      '/offices'
    );
  });
  it('Checks the images have the right src and alt text', () => {
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('src', 'test1.jpg');
    expect(screen.getAllByRole('img')[1]).toHaveAttribute('src', 'test2.jpg');
    expect(screen.getAllByRole('img')[2]).toHaveAttribute('src', 'test3.jpg');
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('alt', '');
    expect(screen.getAllByRole('img')[1]).toHaveAttribute('alt', '');
    expect(screen.getAllByRole('img')[2]).toHaveAttribute('alt', '');
  });
  it('should tab through elements in order', () => {
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(screen.queryAllByRole('link')[0]).toHaveFocus();
    userEvent.tab();
    expect(screen.queryAllByRole('link')[1]).toHaveFocus();
    userEvent.tab();
    expect(screen.queryAllByRole('link')[2]).toHaveFocus();
    userEvent.tab();
    expect(document.body).toHaveFocus();
  });
  it('check the cards have a class of cards__card', () => {
    expect(screen.getAllByTestId('thisCard')[0]).toHaveClass('cards__card');
  });
});
