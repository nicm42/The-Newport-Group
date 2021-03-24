import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Nav from '../components/Nav';

Enzyme.configure({ adapter: new Adapter() });

/* describe('Menu works', () => {
  const wrapper = shallow(<Nav />);
  const button = wrapper.find('button');
  let menu = wrapper.find('span');
  let list = wrapper.find('ul');
  let item = wrapper.find('li');
  //Make sure the menu is hidden before each test
  beforeEach(() => {
    item.first().simulate('blur');
  });
  it('renders correctly', () => {
    shallow(<Nav />);
  });
  it('Nav includes nav tag', () => {
    expect(wrapper.find('nav').length).toBe(1);
  });
  it('Should close when pressing escape', () => {
    let event = new KeyboardEvent('keydown', { keyCode: 27 });
    global.dispatchEvent(event);
    expect(list.hasClass('show')).toEqual(false);
  });
  it('Clicking on a link should hide the menu', () => {
    item.first().simulate('click');
    list = wrapper.find('ul');
    expect(list.hasClass('show')).toEqual(false);
  });
  it('Menu should hide when not focused', () => {
    item.first().simulate('blur');
    list = wrapper.find('ul');
    expect(list.hasClass('show')).toEqual(false);
  });
  it('Clicking hamburger should toggle cross class on button', () => {
    expect(menu.hasClass('cross')).toEqual(false);
    button.simulate('click');
    //Have to re-find these things after a click in order for it to work
    menu = wrapper.find('span');
    expect(menu.hasClass('cross')).toEqual(true);
  });
  it('Clicking hamburger should toggle show class on list', () => {
    expect(list.hasClass('show')).toEqual(false);
    button.simulate('click');
    //Have to re-find these things after a click in order for it to work
    list = wrapper.find('ul');
    expect(list.hasClass('show')).toEqual(true);
  });
  it('Menu should show when focused', () => {
    item.first().simulate('focus');
    list = wrapper.find('ul');
    expect(list.hasClass('show')).toEqual(true);
  });
}); */
describe('Menu works with React Testing Library', () => {
  beforeEach(() => {
    render(
      <Router>
        <Nav />
      </Router>
    );
  });

  it('finds the nav element', () => {
    expect(screen.getByTestId('nav')).toBeInTheDocument();
  });
  it('Clicking hamburger should toggle cross class on button and show class on list', () => {
    const menuButton = screen.getByRole('button', { name: /menu/i });
    const menuToggle = screen.getByTestId('menuToggle');
    const menuList = screen.getByTestId('menuList');
    expect(menuToggle).not.toHaveClass('cross');
    expect(menuList).not.toHaveClass('show');
    userEvent.click(menuButton);
    expect(menuToggle).toHaveClass('cross');
    expect(menuList).toHaveClass('show');
    userEvent.click(menuButton);
    expect(menuToggle).not.toHaveClass('cross');
    expect(menuList).not.toHaveClass('show');
  });
  /* it('Clicking hamburger should toggle show class on list', () => {
    const menuButton = screen.getByTestId('menuButton');
    const menuList = screen.getByTestId('menuList');
    expect(menuList).not.toHaveClass('show');
    userEvent.click(menuButton);
    expect(menuList).toHaveClass('show');
    userEvent.click(menuButton);
    expect(menuList).not.toHaveClass('show');
  }); */
  it('Clicking on a link should hide the menu', () => {
    const menuButton = screen.getByTestId('menuButton');
    const menuList = screen.getByTestId('menuList');
    userEvent.click(menuButton);
    expect(menuList).toHaveClass('show');
    userEvent.click(screen.queryAllByTestId('menuLink')[0]);
    expect(menuList).not.toHaveClass('show');
  });
  //TODO this is now the only test not working
  it('Menu should show when focused and hide on blur', () => {
    const menuList = screen.getByTestId('menuList');
    menuList.focus();
    expect(menuList).toHaveClass('menu-links show');
    fireEvent.blur(menuList);
    expect(menuList).not.toHaveClass('show');
  });
  /*it('Menu should hide on blur', () => {
    fireEvent.click(screen.getByTestId('menuButton'));
    expect(screen.getByTestId('menuList')).toHaveClass('show');
    fireEvent.blur(screen.getByTestId('menuList'));
    expect(screen.getByTestId('menuList')).not.toHaveClass('show');
  }); */
  it('Should close when pressing escape and only escape', () => {
    const menuButton = screen.getByTestId('menuButton');
    const menuList = screen.getByTestId('menuList');
    userEvent.click(menuButton);
    expect(menuList).toHaveClass('show');
    userEvent.keyboard('f');
    expect(menuList).toHaveClass('show');
    userEvent.keyboard('{Escape}');
    expect(menuList).not.toHaveClass('show');
  });
});
