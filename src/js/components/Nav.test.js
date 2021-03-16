import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Nav from './Nav';

Enzyme.configure({ adapter: new Adapter() });

test('Nav includes nav tag', () => {
  const wrapper = shallow(<Nav />);
  expect(wrapper.find('nav').length).toBe(1);
});
