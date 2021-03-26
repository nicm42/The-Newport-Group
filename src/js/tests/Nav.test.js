import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Nav from '../components/Nav';

describe('Nav menu works', () => {
  beforeEach(() => {
    render(
      <Router>
        <Nav />
      </Router>
    );
  });

  it('finds the nav element', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
  it('finds the lightdark component', () => {
    expect(screen.getByTestId('lightdark')).toBeInTheDocument();
  });
  it('Clicking hamburger should toggle cross class on button and show class on list', () => {
    const menuButton = screen.getByRole('button', { name: /menu/i });
    const menuToggle = screen.getByTestId('menuToggle');
    const menuList = screen.getByRole('list');
    expect(menuToggle).not.toHaveClass('cross');
    expect(menuList).not.toHaveClass('show');
    userEvent.click(menuButton);
    expect(menuToggle).toHaveClass('cross');
    expect(menuList).toHaveClass('show');
    userEvent.click(menuButton);
    expect(menuToggle).not.toHaveClass('cross');
    expect(menuList).not.toHaveClass('show');
  });
  it('Clicking on a link should hide the menu', () => {
    const menuButton = screen.getByRole('button', { name: /menu/i });
    const menuList = screen.getByRole('list');
    userEvent.click(menuButton);
    expect(menuList).toHaveClass('show');
    fireEvent.click(screen.queryAllByRole('link')[0]);
    expect(menuList).not.toHaveClass('show');
  });
  it('Menu should show when focused and hide on blur', () => {
    const menuList = screen.getByRole('list');
    fireEvent.focus(screen.queryAllByRole('link')[0]);
    expect(menuList).toHaveClass('show');
    fireEvent.blur(screen.queryAllByRole('link')[0]);
    expect(menuList).not.toHaveClass('show');
  });
  it('Should close when pressing escape and only escape', () => {
    const menuButton = screen.getByRole('button', { name: /menu/i });
    const menuList = screen.getByRole('list');
    userEvent.click(menuButton);
    expect(menuList).toHaveClass('show');
    userEvent.keyboard('f');
    expect(menuList).toHaveClass('show');
    userEvent.keyboard('{Escape}');
    expect(menuList).not.toHaveClass('show');
  });
  it('Checks the nav links have the right text', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Buy or sell a house')).toBeInTheDocument();
    expect(screen.getByText('Build a house')).toBeInTheDocument();
    expect(screen.getByText('Rent an office')).toBeInTheDocument();
  });
  it('Checks the nav links go to the right place', () => {
    expect(screen.queryAllByRole('link')[0]).toHaveAttribute('href', '/');
    expect(screen.queryAllByRole('link')[1]).toHaveAttribute('href', '/houses');
    expect(screen.queryAllByRole('link')[2]).toHaveAttribute(
      'href',
      '/buildings'
    );
    expect(screen.queryAllByRole('link')[3]).toHaveAttribute(
      'href',
      '/offices'
    );
  });
  it('should tab through elements in order', () => {
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(screen.getByRole('button', { name: /menu/i })).toHaveFocus();
    userEvent.tab();
    expect(screen.queryAllByRole('link')[0]).toHaveFocus();
    userEvent.tab();
    expect(screen.queryAllByRole('link')[1]).toHaveFocus();
    userEvent.tab();
    expect(screen.queryAllByRole('link')[2]).toHaveFocus();
    userEvent.tab();
    expect(screen.queryAllByRole('link')[3]).toHaveFocus();
    userEvent.tab();
    expect(screen.getByTestId('lightdark')).toHaveFocus();
  });
});
