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
  socialLinks: [
    {
      label: 'Facebook',
      url: 'https://www.facebook.com',
      icon: FaFacebookF,
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com',
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
          slug: '/homes/#homes',
        },
        {
          label: 'Marchment',
          slug: '/homes/#marchment',
        },
        {
          label: 'Black Caviar',
          slug: '/homes/#black-caviar',
        },
        {
          label: 'Duplex',
          slug: '/homes/#duplex',
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
        {
          label: 'House Extensions',
          slug: '/renovations/#house-extension',
        },
        {
          label: 'Bathrooms',
          slug: '/renovations/#bathrooms',
        },
        {
          label: 'Kitchens',
          slug: '/renovations/#kitchens',
        },
        {
          label: 'Outdoor Living Areas',
          slug: '/renovations/#outdoor-living-areas',
        },
        {
          label: 'Decks',
          slug: '/renovations/#decks',
        },
        {
          label: 'Flyover Roofs',
          slug: '/renovations/#flyover-roofs',
        },
      ],
    },
    {
      label: 'Blog',
      slug: '/blog/',
    },
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
