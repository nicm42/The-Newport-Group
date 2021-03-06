import architectSmall from '/imgs/architect-small.jpg';
import architectMedium from '/imgs/architect-medium.jpg';
import architectBig from '/imgs/architect-big.jpg';

import housepoolSmall from '/imgs/house-pool-small.jpg';
import housepoolMedium from '/imgs/house-pool-medium.jpg';
import housepoolBig from '/imgs/house-pool-big.jpg';
import poolSmall from '/imgs/pool-small.jpg';
import poolMedium from '/imgs/pool-medium.jpg';
import poolBig from '/imgs/pool-big.jpg';
import poolhouseSmall from '/imgs/poolhouse-small.jpg';
import poolhouseMedium from '/imgs/poolhouse-medium.jpg';
import poolhouseBig from '/imgs/poolhouse-big.jpg';

import emptyRoom from '/videos/empty-room.mp4';
import lakeHouseTop from '/videos/lake-house-top.mp4';
import emptyRoomPoster from '/imgs/empty-room.jpg';
import lakeHouseTopPoster from '/imgs/lake-house-top.jpg';

export const buildingIntro = {
  title: 'House building',
  imageSmall: architectSmall,
  imageMedium: architectMedium,
  imageBig: architectBig,
  intro:
    '<h3>None of our houses right for you? We can build you one.</h3><p>We have our own team of architects and builders, so you can be sure your house will be built to the highest specifications. Meetings between you and the designers will ensure you end up with your perfect house.</p><p>Call us to set up an appointment to discuss options.</p>',
};

export const buildingReviews = [
  {
    imageSmall: housepoolSmall,
    imageMedium: housepoolMedium,
    imageBig: housepoolBig,
    alt: 'A beautiful single story house with a big pool',
    text:
      '“I love our new house. After viewing a house that was close to what we wanted, The Newport Group built us a house that was exactly what we needed.”',
  },
  {
    imageSmall: poolSmall,
    imageMedium: poolMedium,
    imageBig: poolBig,
    alt: 'The poolside, with an integrated hot tub',
    text:
      '“I’ve always wanted to have a house built exactly to my specifications and The Newport Group have done that. Nothing I wanted was too big or too small for them. When I saw the house it matched my dreams exactly.”',
  },
  {
    imageSmall: poolhouseSmall,
    imageMedium: poolhouseMedium,
    imageBig: poolhouseBig,
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
