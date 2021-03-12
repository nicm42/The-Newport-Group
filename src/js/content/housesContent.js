import housekeys from '/imgs/housekeys.jpg';

import fireplace from '/imgs/fireplace.jpg';
import kitchen from '/imgs/kitchen.jpg';
import lounge from '/imgs/lounge.jpg';

import lakeHouse from '/videos/lake-house.mp4';
import villa from '/videos/villa.mp4';
import lakeHousePoster from '/imgs/lake-house.jpg';
import villaPoster from '/imgs/villa.jpg';

export const housesContent = {
  title: 'Buy or sell a house',
  image: housekeys,
  intro:
    '<h3>Buying a house?</h3><p>We have the best properties on our books. From beach properties on Balboa Island, to a commuter-friendly property in Costa Mesa or a nature-side property in Santa Ana Heights. All properties start at 4 bedrooms.</p><p>Houses go quickly, so call us with your requirements and we’ll find something that fits your lifestyle.</p><h3>Selling a house?</h3><p>House not for you any more? With premium listings and a minimum of 50 photos and one video, we guarantee to sell your house within 30 days.</p>',
};

export const houseReviews = [
  {
    image: fireplace,
    alt: 'An open-plan living room and kitchen with a brick-fireplace',
    text:
      'The Newport Group helped me find the perfect house for our family. I’m in love with the living room, where we can relax in the evenings after the children have gone to bed.',
  },
  {
    image: kitchen,
    alt: 'View from the kitchen island, looking into the dining area',
    text:
      'We were looking to downgrade now the children are grown up. The Newport Group found us the perfect house, where we can feel at home.',
  },
  {
    image: lounge,
    alt: 'A living area with bijou kitchen',
    text:
      'Our house was on sale with another realtor for three months with no sale, even after reducing the asking price. Then we found The Newport Group and our house was sold within a week, and at $50,000 more than we’d hoped to sell it for.',
  },
];

export const houseVideos = [
  {
    video: lakeHouse,
    poster: lakeHousePoster,
    label: 'Arial view from a lake going towards a house',
  },
  { video: villa, poster: villaPoster, label: 'Coming up close on a house' },
];
