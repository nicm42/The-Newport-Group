import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import 'intersection-observer';
import Info from '../components/Info';

Enzyme.configure({ adapter: new Adapter() });

describe('Info section', () => {
  let wrapper = shallow(<Info />);
  const list = wrapper.find('ul');
  const items = wrapper.find('li');
  const paragraphs = wrapper.find('p');

  let observe = jest.fn();
  window.IntersectionObserver = jest.fn(() => ({
    observe,
  }));

  it('renders correctly', () => {
    shallow(<Info />);
  });
  it('should load everything', () => {
    expect(list.length).toBe(1);
    expect(items.length).toBe(3);
    expect(paragraphs.length).toBe(3);
  });
});
