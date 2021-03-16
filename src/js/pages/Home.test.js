import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import Home from './Home';

Enzyme.configure({ adapter: new Adapter() });

test('Just a test', () => {
  expect(true).toBeTruthy();
});

/* describe('Home', () => {
  it('Title should be for home page', () => {
    expect(global.window.document.title).toBe('The Newport Group - Home');
  });
});
 */
