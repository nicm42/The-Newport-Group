import architect from '/imgs/architect.jpg';

import housepool from '/imgs/house-pool.jpg';
import pool from '/imgs/pool.jpg';
import poolhouse from '/imgs/poolhouse.jpg';

import emptyRoom from '/videos/empty-room.mp4';
import lakeHouseTop from '/videos/lake-house-top.mp4';
import emptyRoomPoster from '/imgs/empty-room.jpg';
import lakeHouseTopPoster from '/imgs/lake-house-top.jpg';

export const buildingIntro = {
  title: 'House building',
  image: architect,
  intro:
    '<h3>None of our houses right for you? We can build you one.</h3><p>We have our own team of architects and builders, so you can be sure your house will be built to the highest specifications. Meetings between you and the designers will ensure you end up with your perfect house.</p><p>Call us to set up an appointment to discuss options.</p>',
};

export const buildingReviews = [
  {
    image: housepool,
    alt: 'A beautiful single story house with a big pool',
    text:
      '“I love our new house. After viewing a house that was close to what we wanted, The Newport Group built us a house that was exactly what we needed.”',
  },
  {
    image: pool,
    alt: 'The poolside, with an integrated hot tub',
    text:
      '“I’ve always wanted to have a house built exactly to my specifications and The Newport Group have done that. Nothing I wanted was too big or too small for them. When I saw the house it matched my dreams exactly.”',
  },
  {
    image: poolhouse,
    alt:
      'A pool with pool house, set on the side of a hill with glorious views',
    text:
      '“All our house needed was a pool and a pool house. After speaking to The Newport Group, we now have just what we need for entertaining.”',
  },
];

export const buildingVideos = [
  {
    video: emptyRoom,
    poster: emptyRoomPoster,
    label: 'Moving out from the corner of an empty room',
  },
  {
    video: lakeHouseTop,
    poster: lakeHouseTopPoster,
    label: 'Moving up from the roof of a house by a lake',
  },
];
