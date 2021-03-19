import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';

import LightDark from './LightDark';

Enzyme.configure({ adapter: new Adapter() });

describe('Light dark icon switches when button pressed', () => {
  const wrapper = shallow(<LightDark />);
  const button = wrapper.find('button');
  let sun = wrapper.find('.la-sun');
  let moon = wrapper.find('.la-moon');
  it('should all exist', () => {
    expect(sun.length).toBe(1);
    expect(wrapper.find('.none').length).toBe(1);
  });
  it('should start off with moon icon', () => {
    expect(sun.hasClass('none')).toEqual(true);
    expect(moon.hasClass('none')).toEqual(false);
  });
  it('should show sun icon when clicked', () => {
    button.simulate('click');
    //Have to re-find these things after a click in order for it to work
    sun = wrapper.find('.la-sun');
    moon = wrapper.find('.la-moon');
    expect(sun.hasClass('none')).toEqual(false);
    expect(moon.hasClass('none')).toEqual(true);
    button.simulate('click'); //adding this so it's back to light mode for next test
  });
  it('should update class on body when clicked', () => {
    expect(document.body.classList.contains('dark')).toBe(false);
    button.simulate('click');
    expect(document.body.classList.contains('dark')).toBe(true);
  });
});
