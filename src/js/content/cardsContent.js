import mansionBig from '/imgs/mansion-big.jpg';
import mansionMedium from '/imgs/mansion-medium.jpg';
import mansionSmall from '/imgs/mansion-small.jpg';
import constructionBig from '/imgs/construction-big.jpg';
import constructionMedium from '/imgs/construction-medium.jpg';
import constructionSmall from '/imgs/construction-small.jpg';
import officeBig from '/imgs/office-big.jpg';
import officeMedium from '/imgs/office-medium.jpg';
import officeSmall from '/imgs/office-small.jpg';

export const cards = [
  {
    imageBig: mansionBig,
    imageMedium: mansionMedium,
    imageSmall: mansionSmall,
    srcset: `${mansionSmall} 450w, ${mansionMedium} 750w, ${mansionBig} 1500w`,
    text: 'Buy or sell a house',
    link: '/houses',
  },
  {
    imageBig: constructionBig,
    imageMedium: constructionMedium,
    imageSmall: constructionSmall,
    srcset: `${mansionSmall} 450w, ${mansionMedium} 750w, ${mansionBig} 1500w`,
    text: 'Build a house',
    link: 'buildings',
  },
  {
    imageBig: officeBig,
    imageMedium: officeMedium,
    imageSmall: officeSmall,
    srcset: `${mansionSmall} 450w, ${mansionMedium} 750w, ${mansionBig} 1500w`,
    text: 'Rent offices',
    link: 'offices',
  },
];
