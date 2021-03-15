import workingSmall from '/imgs/working-small.jpg';
import workingMedium from '/imgs/working-medium.jpg';
import workingBig from '/imgs/working-big.jpg';

import coworking from '/imgs/coworking.jpg';
import office from '/imgs/office.jpg';
import officegrey from '/imgs/office-grey.jpg';

import openWorking from '/videos/open-working.mp4';
import lightsOut from '/videos/lights-out.mp4';
import openWorkingPoster from '/imgs/open-working.jpg';
import lightsOutPoster from '/imgs/lights-out.jpg';

export const officeIntro = {
  title: 'Office space',
  imageSmall: workingSmall,
  imageMedium: workingMedium,
  imageBig: workingBig,
  intro:
    '<h3>Looking for an office?</h3><p>Newport Beach has plenty of office space. Are you looking for something with a view across the ocean or space with facilities? We’ve got you covered. From buildings to encompass your whole company to co-working space and everything in between.</p><p>Call us to discuss your requirements.</p>',
};

export const officeReviews = [
  {
    image: coworking,
    alt: 'An open-plan area sofas and a table and chairs to eat or meet at',
    text:
      '“I recently went freelance and needed somewhere to work that wasn’t also home. The Newport Group found me the perfect place that’s light and airy, with other freelancers who I can meet for a drink in the office’s kitchen It’s just like the friendliness of the office, but where I’m my own boss.”',
  },
  {
    image: office,
    alt: 'A meeting room with panoramic views',
    text:
      '“The Newport Group found us the perfect office for our small company, with beautiful views. Only trouble is the view can be a distraction in company meetings!”',
  },
  {
    image: officegrey,
    alt: 'An airy office with plenty of space',
    text:
      '“Our new office is just the right size for us to grow. Thank you, Newport Group.”',
  },
];

export const officeVideos = [
  {
    video: openWorking,
    poster: openWorkingPoster,
    label: 'Out of focus people in the background of an office',
  },
  {
    video: lightsOut,
    poster: lightsOutPoster,
    label: 'Lights out at the office',
  },
];
