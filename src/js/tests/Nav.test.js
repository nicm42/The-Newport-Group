import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Nav from '../components/Nav';

Enzyme.configure({ adapter: new Adapter() });

describe('Menu works', () => {
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
});
describe('Menu works with React Testing Library', () => {
  render(
    <Router>
      <Nav />
    </Router>
  );
  it('finds the nav element', () => {
    expect(screen.getByTestId('nav')).toBeInTheDocument();
  });
  it('Clicking hamburger should toggle cross class on button', () => {
    expect(screen.getByTestId('menuToggle')).not.toHaveClass('cross');
    fireEvent.click(screen.getByTestId('menuButton'));
    expect(screen.getByTestId('menuToggle')).toHaveClass('cross');
    fireEvent.click(screen.getByTestId('menuButton'));
    expect(screen.getByTestId('menuToggle')).not.toHaveClass('cross');
  });
  it('Clicking hamburger should toggle show class on list', () => {
    expect(screen.getByTestId('menuList')).not.toHaveClass('show');
    fireEvent.click(screen.getByTestId('menuButton'));
    expect(screen.getByTestId('menuList')).toHaveClass('show');
    fireEvent.click(screen.getByTestId('menuButton'));
    expect(screen.getByTestId('menuList')).not.toHaveClass('show');
  });
  it('Clicking on a link should hide the menu', () => {
    fireEvent.click(screen.getByTestId('menuButton'));
    expect(screen.getByTestId('menuList')).toHaveClass('show');
    fireEvent.click(screen.queryAllByTestId('menuLink')[0]);
    expect(screen.getByTestId('menuList')).not.toHaveClass('show');
  });
  it.only('Menu should hide on blur and show when focused', () => {
    //fireEvent.click(screen.getByTestId('menuButton'));
    //expect(screen.getByTestId('menuList')).toHaveClass('show');
    //fireEvent.blur(screen.getByTestId('menuList'));
    //expect(screen.getByTestId('menuList')).not.toHaveClass('show');
    screen.getByTestId('menuList').focus();
    expect(screen.getByTestId('menuList')).toHaveClass('show');
  });
});
