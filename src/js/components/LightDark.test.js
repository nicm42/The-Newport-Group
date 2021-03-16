import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import LightDark from './LightDark';

Enzyme.configure({ adapter: new Adapter() });

describe('Light dark icon switches when button pressed', () => {
  const wrapper = shallow(<LightDark />);
  const button = wrapper.find('button');
  const sun = wrapper.find('.la-sun');
  const moon = wrapper.find('.la-moon');
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
    expect(sun.hasClass('none')).toEqual(false);
    expect(moon.hasClass('none')).toEqual(true);
  });
});
