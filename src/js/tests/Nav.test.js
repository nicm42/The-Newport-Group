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
});
