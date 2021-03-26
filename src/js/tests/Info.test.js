import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'intersection-observer';
import Info from '../components/Info';

describe('Info section', () => {
  beforeEach(() => {
    render(
      <Router>
        <Info />
      </Router>
    );
  });

  let observe = jest.fn();
  let disconnect = jest.fn();
  window.IntersectionObserver = jest.fn(() => ({
    observe,
    disconnect,
  }));

  it('should load everything', () => {
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByTestId('paragraphs')).toBeInTheDocument();
  });
  it('Checks the nav links have the right text', () => {
    expect(screen.getByText('Real Estate')).toBeInTheDocument();
    expect(screen.getByText('Buildings')).toBeInTheDocument();
    expect(screen.getByText('Homes and Offices')).toBeInTheDocument();
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
    expect(screen.queryAllByRole('link')[3]).toHaveAttribute('href', '/houses');
    expect(screen.queryAllByRole('link')[4]).toHaveAttribute(
      'href',
      '/offices'
    );
    expect(screen.queryAllByRole('link')[5]).toHaveAttribute(
      'href',
      '/buildings'
    );
  });
});
