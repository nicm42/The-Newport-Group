import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import Info from '../components/Info';
import 'intersection-observer';

Enzyme.configure({ adapter: new Adapter() });

describe('Info section', () => {
  let wrapper = shallow(<Info />);
  const list = wrapper.find('ul');
  const items = wrapper.find('li');
  const paragraphs = wrapper.find('p');

  const observe = jest.fn();

  window.IntersectionObserver = jest.fn(function () {
    this.observe = observe;
  });

  /* beforeEach(() => {
    let observe = jest.fn();
    let unobserve = jest.fn();

    window.IntersectionObserver = jest.fn(() => ({
      observe,
      unobserve,
    }));
  }); */

  it('renders correctly', () => {
    shallow(<Info />);
  });
  it('should load everything', () => {
    expect(list.length).toBe(1);
    expect(items.length).toBe(3);
    expect(paragraphs.length).toBe(3);
  });
});
/* describe('IntersectionObserver mock test', () => {
  const mockRef = { mock: true };
  const windowIntersectionObserver = window.IntersectionObserver;
  const observe = jest.fn();

  beforeAll(() => {
    window.IntersectionObserver = jest.fn(function () {
      this.observe = observe;
    });
    wrapper = shallow(<Info />);
    wrapper.getElement().ref(mockRef);
    const observerCallback = window.IntersectionObserver.mock.calls[0][0];
    observerCallback([mockEntry]);

    wrapper.update();
  });
 });*/
