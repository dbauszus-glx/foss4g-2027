export const LEVELS = {
  PLATINUM: 0,
  GOLD: 1,
  SILVER: 2,
  BRONZE: 3,
  VENUE: 4,
  PARTNER: 5,
  SUPPORTER: 6,
};

export default {
  osgeouk: {
    name: 'OSGeoUK',
    logo: () => import('$images/logos/OSGeoUK.png?enhanced'),
    link: 'https://uk.osgeo.org/',
    level: LEVELS.PARTNER
  },
  osgeo: {
    name: 'OSGeo',
    logo: () => import('$images/logos/osgeo.png?enhanced'),
    link: 'https://www.osgeo.org/',
    level: LEVELS.PARTNER
  }
};
