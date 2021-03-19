import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';

import PagesVideos from './PagesVideos';

Enzyme.configure({ adapter: new Adapter() });

describe('Video toggle works', () => {
  const wrapper = shallow(<PagesVideos type="Buildings" />);
  const button = wrapper.find('button');
  it('should all exist', () => {
    expect(button.length).toBe(2);
  });
});
