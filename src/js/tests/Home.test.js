import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../pages/Home';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
  const title = 'Home page title';
  it('Title should be for home page', () => {
    expect(document.title).toBe(title);
  });
});
