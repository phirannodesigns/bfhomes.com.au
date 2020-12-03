const { FaFacebookF, FaInstagram } = require('react-icons/fa');

module.exports = {
  title: 'Bruen Family Homes',
  description: '',
  author: '',
  phone: '0428 148 486',
  email: '',
  address: {
    line1: '',
    line2: '',
  },
  officeHours: '',
  siteUrl: 'https://www.rmaircraft.com.au',
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
      label: 'About Us',
      slug: '/about-us/',
    },
    {
      label: 'How Can We Help',
      slug: '/how-can-we-help/',
    },
    {
      label: 'Blog',
      slug: '/blog/',
    },
    {
      label: 'Contact Us',
      slug: '/contact-us/',
    },
  ],
};
