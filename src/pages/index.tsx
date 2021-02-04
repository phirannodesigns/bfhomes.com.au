import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { HiArrowRight } from 'react-icons/hi';
import { IoStar, IoStarOutline } from 'react-icons/io5';

import {
  Layout,
  SEO,
  BGImageRight,
  BGImageLeft,
  ContactSection,
  Post,
  Carousel,
} from '../components';

function IndexPage({ data }) {
  const newHomes = getImage(data.newHomes);
  const renovations = getImage(data.renovations);
  const outdoors = getImage(data.outdoors);
  const howCanWeHelp = getImage(data.howCanWeHelp);
  const whoAreWe = getImage(data.whoAreWe);
  return (
    <Layout>
      <SEO title="Port Macquarie Home Builders - Renovations - Outdoor Living" />
      <Hero imageData={newHomes} />
      <Services
        newHomes={newHomes}
        renovations={renovations}
        outdoors={outdoors}
      />
      <BGImageRight>
        <HowCanWeHelp imageData={howCanWeHelp} />
        <WhoAreWe imageData={whoAreWe} />
      </BGImageRight>
      <Feedback />
      <LatestNews posts={data.allSanityPost.nodes} />
      <ContactSection />
    </Layout>
  );
}

// TODO Replace hero image with video
function Hero({ imageData }) {
  return <GatsbyImage image={imageData} alt="" />;
}

function Services({ newHomes, renovations, outdoors }) {
  // TODO Source this data from Sanity
  const services = [
    {
      heading: 'New Homes',
      copy:
        'Bruen Family Homes design and construct quality homes for families throughout Port Macquarie and NSW North Coast. We deliver on time, on budget, and aim for      complete satisfaction in new builds, extensions, and renovations that are practical, stylish, and liveable.',
      slug: '/homes/',
      image: newHomes,
    },
    {
      heading: 'Renovations',
      copy:
        'Bruen Family Homes are Port Macquarie’s specialists in high quality renovations, second storey additions and extensions. Whether you need substantial structural    modifications or interior renovations, your family can rely on Bruen Family Homes to get the job done on time and on budget.',
      slug: '/renovations/',
      image: renovations,
    },
    {
      heading: 'Outdoors',
      copy:
        'Barbecues, al fresco dining, and lazy days in your backyard can be yours with outdoor living and dining areas designed and built by Bruen Family Homes. We can help you achieve your personalised vision for outdoor living and entertaining.',
      slug: '/renovations/#outdoor-living-areas',
      image: outdoors,
    },
  ];
  return (
    <ul className="grid w-full gap-12 px-4 mx-auto transform -translate-y-12 sm:px-6 lg:px-8 lg:grid-cols-3 lg:-translate-y-24">
      {services.map((service) => (
        <li key={service.slug}>
          <Link aria-hidden tabIndex={-1} to={service.slug} className="block">
            <div className="relative h-0 aspect-w-4 aspect-h-3">
              <div className="absolute inset-0 flex">
                <GatsbyImage
                  image={service.image}
                  alt=""
                  className="flex-1 block shadow-lg"
                />
              </div>
            </div>
          </Link>
          <Link to={service.slug} className="inline-block mt-5">
            <h2 className="flex items-center space-x-2 text-2xl font-bold uppercase text-brand-blue">
              <span>{service.heading} </span>
              <HiArrowRight aria-hidden className="text-lg" />
            </h2>
          </Link>
          <div className="mt-1 prose">
            <p className="font-medium">{service.copy}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function HowCanWeHelp({ imageData }) {
  return (
    <article className="text-white bg-brand-blue">
      <div className="relative z-10 grid w-full max-w-screen-xl gap-4 px-4 py-20 mx-auto sm:px-6 lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="border-white heading-2">How Can We Help?</h2>
          <div className="mt-5 prose text-white">
            <p>
              Bruen Family Homes are here to help you build your dream home. We
              sit down with you to design your new home, renovation, or outdoor
              area, giving you options that are practical, look good, are
              comfortable, and stand the test of time. When you work with Bruen
              Family Homes, you become part of our family. We manage the project
              from start to finish. We’re always on hand to answer all your
              questions, liaise with subcontractors, designers, and architects,
              and maintain open communication so you can have a worry-free
              build. We respond promptly to all your requests to ensure on-time
              delivery.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 mt-8 text-xl font-medium max-w-prose">
            {[
              {
                label: 'Project Management',
                colour: 'text-brand-teal',
              },
              {
                label: 'Liasing With Contractors',
                colour: 'text-blue-400',
              },
              {
                label: 'Construction',
                colour: 'text-gray-400',
              },
              {
                label: 'Quality Control',
                colour: 'text-brand-teal',
              },
              {
                label: 'Health & Safety',
                colour: 'text-blue-400',
              },
              {
                label: 'Tailored Contracts',
                colour: 'text-gray-400',
              },
            ].map((service) => (
              <li
                key={`${service.label}${service.colour}`}
                className="flex items-center space-x-3"
              >
                <HiArrowRight className={service.colour} />
                <span>{service.label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link
              to="/contact-us/"
              className="inline-flex items-center px-6 py-4 space-x-3 font-medium leading-none tracking-wider uppercase border text-brand-teal border-brand-teal"
            >
              <span>Learn more</span>
              <HiArrowRight className="text-lg" />
            </Link>
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex">
            <GatsbyImage
              image={imageData}
              alt=""
              className="flex-1 w-full h-full max-w-sm mx-auto"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function WhoAreWe({ imageData }) {
  return (
    <article className="relative text-white bg-gray-900">
      <div className="absolute inset-0 flex">
        <GatsbyImage image={imageData} alt="" className="flex-1" />
      </div>
      <div className="relative z-10 w-full max-w-screen-xl px-4 py-40 mx-auto sm:px-6 lg:px-8">
        <h2 className="inline-block text-2xl font-bold uppercase border-b-2 border-white">
          Who Are We?
        </h2>
        <h3 className="mt-5 text-5xl uppercase">Get To Know More About Us</h3>
        <p className="mt-5">
          <Link
            to="/about-us/"
            className="inline-flex tracking-wider items-center space-x-3 px-4 py-2.5 text-sm font-medium uppercase border text-white border-white"
          >
            <span className="whitespace-nowrap">Find out more</span>
            <HiArrowRight className="text-lg" />
          </Link>
        </p>
      </div>
    </article>
  );
}

const reviews = [
  {
    name: 'Suzy Young & Kurt Peterson',
    text: `<p>BruCorp Building Pty Ltd Made Our Dream Come True.</p>
    <p>
      We initially sought out BruCorp whilst living in Orange NSW, as we had
      bought a block of land at Lake Cathie.
    </p>
    <p>
      Darren and Corrina were very patient with us as we had to sell our home
      in Orange and relocate to the mid North Coast before we could begin to
      build.
    </p>
    <p>
      The thought of committing to, and planning something so big was very
      daunting to us and especially as we did not want to settle for anything
      less perfection for our dream home.
    </p>
    <p>
      Upon meeting with Darren and Corrina, I was immediately impressed by
      their friendly, understanding, professional, non-forceful and ‘can-do’
      attitude.
    </p>
    <p>
      It made us feel absolutely comfortable and confident about what we were
      doing and that we had made the right decision.
    </p>
    <p>
      BruCorp Building Pty Ltd made everything easy for us from the initial
      preparations, paperwork, scheduling, and options. Communication was
      amazing. They always answered my calls (and their were hundreds) They
      were friendly, punctual and informative. Nothing was ever a problem.
      Their attention to detail is second to none.
    </p>
    <p>
      They worked with us to make our dream home fit in with our budget and
      were extremely considerate yet honest with advice to ensure only the
      best job was done.
    </p>
    <p>
      When they say the contract price, they really do mean it. Everything was
      included right down to the grass, garden and driveways. All we had to do
      was move our furniture in.
    </p>
    <p>
      The build was completed on time and We are now a very proud owners of a
      well designed, functional, and beautiful home. I have heard so many
      horror stories about builders and homes, yet we can say with much pride
      and gratitude that BruCorp Building Pty Ltd made the process of building
      our dream home relaxing, easy and exciting. Darren and Corrina took
      building our home to a personal level and above and beyond our
      expectations.
    </p>
    <p>
      We are glad to have made new friends and we wish BruCorp Building Pty
      Ltd the Very Best Future.
    </p>`,
    rating: 5,
  },
  {
    name: 'Helen Bickett',
    text: `<p>
      It is with much pleasure I offer this testimonial for BruCorp. I am the
      proud owner of a dual occupancy property expertly constructed by BruCorp. 5
      bedrooms, 4 bathrooms, 2 kitchens all perfectly finished and on schedule.
      Corina, Darren, Ben and the crew were fastidious in their finishes and
      workmanship.
    </p>
    <p>
      I can't thank them enough for their
      <strong>attention to detail and experience</strong>. They were always
      available for any queries and always had my best interests at heart.
    </p>
    <p>
      Thanks guys for a <strong>fantastic product</strong>. I would not hesitate
      to recommend them to build and project manage any construction. I would be
      happy to speak with any prospective clients of BruCorp.
    </p>`,
    rating: 5,
  },
  {
    name: 'Malcolm Revell',
    text: `<p>
      We would like to sincerely thank you for the recent construction of our
      4 B/R house and detached granny flat at College Rise. You came to us
      highly recommended as house/flat specialists and your pricing was very
      competitive. We enjoyed the personal touch of dealing directly with a
      builder who we could speak with at any time rather than a conglomerate
      where we have to deal with sales people.
    </p>
    <p>
      You communicated openly with us at all stages of the construction and
      kept us fully informed of the progress. As a result we can truthfully
      state that we did not have one instance where we were dissatisfied. You
      handled the project professionally and the build quality was  of an
      exceptional standard.
    </p>
    <p>
      One of the buildings is to be rented and we quoted several RE property
      managers. We were told by all of them that the design and finish is up
      with the better ones in this class.
    </p>
    <p>
      The buildings have long been completed and we have not had a single
      issue under the warranty.
    </p>
    <p>
      We wish you well with your future projects and we would not hesitate to
      use your services again. We recommend your company to anyone
      contemplating building a house.
    </p>`,
    rating: 5,
  },
];

function Feedback() {
  return (
    <article className="text-brand-blue">
      <div className="w-full max-w-screen-xl px-4 py-20 mx-auto space-y-8 sm:px-6 lg:px-8">
        <div className="flex">
          <h2 className="inline-block mx-auto text-2xl font-bold text-center uppercase border-b-2 border-brand-blue">
            Feedback From Our Clients
          </h2>
        </div>
        <Carousel>
          {reviews.map((review) => (
            <li key={review.name}>
              <div className="pb-16 mx-auto overflow-y-auto prose prose-xl max-h-96 user-auto">
                <blockquote>
                  <div
                    dangerouslySetInnerHTML={{ __html: review.text }}
                    className="font-medium"
                  />
                  <footer>
                    <p className="mt-5 font-bold">{review.name}</p>
                    <div className="flex items-center justify-center space-x-1 text-2xl text-brand-teal">
                      {Array(review.rating)
                        .fill('')
                        .map((_, index) => (
                          <IoStar key={index} className="w-6 h-6" />
                        ))}
                      {Array(5 - review.rating)
                        .fill('')
                        .map((_, index) => (
                          <IoStarOutline key={index} className="w-6 h-6" />
                        ))}
                    </div>
                  </footer>
                </blockquote>
              </div>
            </li>
          ))}
        </Carousel>
      </div>
    </article>
  );
}

function LatestNews({ posts }) {
  return (
    <article className="text-white bg-brand-blue">
      <BGImageLeft>
        <div className="relative z-10 w-full max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
          <div>
            <h2 className="border-white heading-2">
              Check Out Our Latest News
            </h2>
            <ul className="grid gap-10 mt-10 lg:grid-cols-3">
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </ul>
          </div>
        </div>
      </BGImageLeft>
    </article>
  );
}

export const query = graphql`
  query {
    allSanityPost(sort: { order: DESC, fields: publishedAt }, limit: 3) {
      nodes {
        _publishedAt: publishedAt
        _rawBody
        categories {
          title
          id
        }
        id
        imageAltText
        mainImage {
          asset {
            fluid(maxWidth: 450) {
              ...GatsbySanityImageFluid
            }
          }
        }
        publishedAt(formatString: "MMMM DD, YYYY")
        slug {
          current
        }
        title
      }
    }
    newHomes: file(relativePath: { eq: "new-homes.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920)
      }
    }
    renovations: file(relativePath: { eq: "renovations.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920)
      }
    }
    outdoors: file(relativePath: { eq: "outdoors.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920)
      }
    }
    howCanWeHelp: file(relativePath: { eq: "how-can-we-help.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    whoAreWe: file(relativePath: { eq: "who-are-we.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920)
      }
    }
  }
`;

export default IndexPage;
