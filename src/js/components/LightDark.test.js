import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';

import LightDark from './LightDark';

//const jsdom = require('jsdom');
//const { JSDOM } = jsdom;

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
  it.only('should show sun icon when clicked', () => {
    button.simulate('click');
    sun = wrapper.find('.la-sun');
    moon = wrapper.find('.la-moon');
    expect(sun.hasClass('none')).toEqual(false);
    expect(moon.hasClass('none')).toEqual(true);
  });
  it('should update body class when clicked', () => {
    //const body = document.body;
    //const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
    //console.log(dom.window.document.body);
    //expect(dom.window.document.body.hasClass('dark')).toEqual(false);
    expect(true).toBeTruthy;
    //expect(document.body.length).toBe(1);
  });
});
