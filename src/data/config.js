const { FaFacebookF, FaInstagram } = require('react-icons/fa');

module.exports = {
  title: 'Bruen Family Homes',
  description: '',
  author: '',
  phone: '0428 148 486',
  email: 'admin@bfhomes.com.au',
  address: 'Port Macquarie, NSW 2444',
  officeHours: 'Monday to Friday 9am–5pm',
  siteUrl: 'https://www.bfhomes.com.au',
  ogImage: '../../static/og-image.jpg',
  youtubeVideId: '77Cfxg0XCBc',
  socialLinks: [
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/brucorpbuildingptyltd',
      icon: FaFacebookF,
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/bruenfamilyhomes/',
      icon: FaInstagram,
    },
  ],
  siteNavigation: [
    {
      label: 'Homes',
      slug: '/homes/',
      submenu: [
        {
          label: 'All Homes',
          slug: '/homes#homes',
        },

        {
          label: 'McIntyre Close',
          slug: '/homes#mcintyre',
        },
        {
          label: 'Multi Dwellings',
          slug: '/homes#multi-dwellings',
        },
        {
          label: 'Marchment',
          slug: '/homes#marchment',
        },

        {
          label: 'Black Caviar Parade',
          slug: '/homes#black-caviar-parade',
        },
      ],
    },
    {
      label: 'Renovations',
      slug: '/renovations/',
      submenu: [
        {
          label: 'All Renovations',
          slug: '/renovations/',
        },
        // {
        //   label: 'House Extensions',
        //   slug: '/renovations/house-extensions',
        // },
        {
          label: 'Bathrooms',
          slug: '/renovations/house-extensions#bathrooms',
        },
        {
          label: 'Kitchens',
          slug: '/renovations/house-extensions#kitchens',
        },
        {
          label: 'Outdoor Living Areas',
          slug: '/renovations/outdoor-living-areas/',
        },
        {
          label: 'Decks',
          slug: '/renovations/outdoor-living-areas#decks',
        },
        {
          label: 'Flyover Roofs',
          slug: '/renovations/outdoor-living-areas#flyover-roofs',
        },
      ],
    },
    // {
    //   label: 'Blog',
    //   slug: '/blog/',
    // },
    {
      label: 'About Us',
      slug: '/about-us/',
    },
    {
      label: 'Contact Us',
      slug: '/contact-us/',
    },
  ],
};
