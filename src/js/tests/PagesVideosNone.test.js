import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import PagesVideos from '../components/PagesVideos';

Enzyme.configure({ adapter: new Adapter() });

describe('Video toggle works', () => {
  const wrapper = shallow(<PagesVideos type="" />);
  const button = wrapper.find('button');
  const video = wrapper.find('video');
  it('does not render correctly', () => {
    shallow(<PagesVideos type="" />);
  });
  it('videos  nd buttons should not exist', () => {
    expect(video.length).toBe(0);
    expect(button.length).toBe(0);
  });
});
