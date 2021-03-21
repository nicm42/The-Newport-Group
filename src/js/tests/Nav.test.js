import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
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
