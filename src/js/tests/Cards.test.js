import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import 'intersection-observer';
import Cards from '../components/Cards';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../content/cardsContent', () => [
  {
    imageSmall: 'test.jpg',
    srcset: 'test.jpg 500w',
    text: 'Buy or sell a house',
    link: '/houses',
  },
  {
    imageSmall: 'test.jpg',
    srcset: 'test.jpg 500w',
    text: 'Build a house',
    link: 'buildings',
  },
  {
    imageSmall: 'test.jpg',
    srcset: 'test.jpg 500w',
    text: 'Rent offices',
    link: 'offices',
  },
]);

describe('Card section', () => {
  const wrapper = shallow(<Cards />);
  const cards = wrapper.find('.cards__card');
  const image = wrapper.find('.cards__image');
  const link = wrapper.find('.cards__text');

  const observe = jest.fn();
  window.IntersectionObserver = jest.fn(() => ({
    observe,
  }));

  it('renders correctly', () => {
    shallow(<Cards />);
  });
  it('should load everything', () => {
    expect(cards.length).toBe(3);
    expect(image.length).toBe(3);
    expect(link.length).toBe(3);
  });
});
