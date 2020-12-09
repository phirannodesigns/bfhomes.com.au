const { FaFacebookF, FaInstagram } = require('react-icons/fa');

module.exports = {
  title: 'Bruen Family Homes',
  description: '',
  author: '',
  phone: '0428 148 486',
  email: 'brucorp@hotmail.com',
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
      submenu: [
        {
          label: 'Marchment',
          slug: '/marchment/',
        },
        {
          label: 'Black Caviar',
          slug: '/black-caviar/',
        },
        {
          label: 'Duplex',
          slug: '/duplex/',
        },
      ],
    },
    {
      label: 'Renovations',
      submenu: [
        {
          label: 'House Extension',
          submenu: [
            {
              label: 'Bathrooms',
              slug: '/bathrooms/',
            },
            {
              label: 'Kitchens',
              slug: '/kitchens/',
            },
          ],
        },
        {
          label: 'Outdoor Living Areas',
          submenu: [
            {
              label: 'Decks',
              slug: '/decks/',
            },
            {
              label: 'Flyover Roofs',
              slug: '/flyover-roofs/',
            },
          ],
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
