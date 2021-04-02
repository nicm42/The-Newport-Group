import caleb from '/imgs/caleb.jpg';
import map from '/imgs/map.jpg';
import mapSmall from '/imgs/map-small.jpg';

const footerContent = {
  ownerText: 'Owner: Caleb Nichol',
  ownerImage: caleb,
  address:
    'The Newport Group<br/>Newport Beach<br/>The O.C.<br/>C.A.<br/>92660',
  email: 'contact@thenewportgroup.com',
  phone: '555-123-4567',
  imageSmall: mapSmall,
  srcset: `${mapSmall} 450w, ${map} 750w`,
  alt: 'Map of Newport Beach',
};

export default footerContent;
