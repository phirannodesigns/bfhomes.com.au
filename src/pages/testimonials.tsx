import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';

import { BGImageRight, ContactSection, Hero, Layout, SEO } from '../components';

function TestimonialsPage({ data }) {
  const aboutHero = getImage(data.aboutHero);
  const aboutUs = getImage(data.aboutUs);
  const whoAreWe = getImage(data.whoAreWe);
  const thrumster = getImage(data.thrumster);
  return (
    <Layout>
      <SEO title="Testimonials" />
      <Hero imageData={aboutHero} />
      <h2 className="mt-24 text-3xl font-bold text-center underline uppercase text-brand-blue">
        Feedback from our clients
      </h2>
      <Thrumster imageData={thrumster} />
      <div className="relative w-full max-w-screen-xl px-4 py-6 mx-auto -mt-0 lg:px-8">
        <div className="border-t-2 border-brand-blue" />
      </div>
      <AboutUs imageData={aboutUs} />
      <div className="relative w-full max-w-screen-xl px-4 py-6 mx-auto -mt-12 lg:px-8">
        <div className="border-t-2 border-brand-blue" />
      </div>
      <SecondSection imageData={aboutUs} />
      <div className="relative w-full max-w-screen-xl px-4 py-6 mx-auto mt-0 lg:px-8">
        <div className="border-t-2 border-brand-blue" />
      </div>
      <ThirdSection imageData={aboutUs} />
      <div className="relative w-full max-w-screen-xl px-4 py-6 mx-auto mt-0 lg:px-8">
        <div className="border-t-2 border-brand-blue" />
      </div>
      <FourthSection imageData={aboutUs} />
      <div className="relative w-full max-w-screen-xl px-4 py-6 mx-auto mt-0 lg:px-8">
        <div className="border-t-2 border-brand-blue" />
      </div>
      {/* <WhyChooseUs imageData={whoAreWe} /> */}
      <ContactSection />
    </Layout>
  );
}
function Thrumster({ imageData }) {
  return (
    <article className="bg-white text-brand-blue">
      <div className="relative z-10 w-full max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {/* <h1 className="border-white heading-2">About Us</h1> */}
            <div className="prose ">
              <h4>Sovereign Drive - Thrumster</h4>
              <br />
              <p>
                Our journey with Darren and Core started a few years ago when we
                were patiently waiting for our land to register to start
                building our dream home.
                <br />
                <br /> The whole time Core and Darren were so flexible and
                understanding. They spent the time getting our design and
                inclusions just right so that we could hit the ground running
                the first chance we got. And wow did they succeed, from the
                minute our build started up until completion we were blown away.
                <br />
                <br />
                The positive communication and level of dedication Bruen Family
                Homes displayed was absolutely outstanding. The process was
                seamless with everything falling into place with ease. The final
                touches that Core ensured were carried out, turned our newly
                built house into our forever home. We strongly recommend Bruen
                Family Homes, you won’t be disappointed.
              </p>
            </div>
          </div>
          <div className="relative w-full mx-auto lg:col-span-2">
            <div className="relative h-0 aspect-w-3 aspect-h-4">
              <div className="absolute inset-0 flex">
                <GatsbyImage
                  image={imageData}
                  alt=""
                  objectFit="contain"
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
function SecondSection({ imageData }) {
  return (
    <article className="bg-white text-brand-blue">
      <div className="relative z-10 w-full max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
        {/* <h1 className="border-white heading-2">About Us</h1> */}
        <div className="w-full prose max-w-none">
          <h4>Eagle Place - Lake Cathie</h4>
          <p>
            <br />
            BruCorp Building Pty Ltd Made Our Dream Come True.
            <br />
            <br />
            We initially sought out BruCorp whilst living in Orange NSW, as we
            had bought a block of land at Lake Cathie. Darren and Corrina were
            very patient with us as we had to sell our home in Orange and
            relocate to the mid North Coast before we could begin to build. The
            thought of committing to, and planning something so big was very
            daunting to us and especially as we did not want to settle for
            anything less perfection for our dream home. Upon meeting with
            Darren and Corrina, I was immediately impressed by their friendly,
            understanding, professional, non-forceful and ‘can-do’ attitude. It
            made us feel absolutely comfortable and confident about what we were
            doing and that we had made the right decision. BruCorp Building Pty
            Ltd made everything easy for us from the initial preparations,
            paperwork, scheduling, and options. Communication was amazing. They
            always answered my calls (and there were hundreds)
            <br />
            <br />
            They were friendly, punctual and informative. Nothing was ever a
            problem. Their attention to detail is second to none. They worked
            with us to make our dream home fit in with our budget and were
            extremely considerate yet honest with advice to ensure only the best
            job was done. When they say the contract price, they really do mean
            it. Everything was included right down to the grass, garden and
            driveways. All we had to do was move our furniture in. The build was
            completed on time and We are now a very proud owners of a well
            designed, functional, and beautiful home. I have heard so many
            horror stories about builders and homes, yet we can say with much
            pride and gratitude that BruCorp Building Pty Ltd made the process
            of building our dream home relaxing, easy and exciting. Darren and
            Corrina took building our home to a personal level and above and
            beyond our expectations. We are glad to have made new friends and we
            wish BruCorp Building Pty Ltd the Very Best Future.
            <br />
          </p>
          <h4>Regards, Suzy Young & Kurt Peterson</h4>
        </div>
      </div>
    </article>
  );
}
function ThirdSection({ imageData }) {
  return (
    <article className="bg-white text-brand-blue">
      <div className="relative z-10 w-full max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
        {/* <h1 className="border-white heading-2">About Us</h1> */}
        <div className="w-full prose max-w-none">
          <h4>Diploma Drive - Sovereign Hills</h4>
          <p>
            <br />
            To Darren and Cor,
            <br />
            <br />
            We would like to sincerely thank you for the recent construction of
            our 4 B/r house and detached granny flat at College Rise. You came
            to us highly recommended as house/flat specialists and your pricing
            was very competitive. We enjoyed the personal touch of dealing
            directly with a builder who we could speak with at any time rather
            than a conglomerate where we have to deal with sales people.
            <br />
            <br />
            You communicated openly with us at all stages of the construction
            and kept us fully informed of the progress. As a result we can
            truthfully state that we did not have one instance where we were
            dissatisfied. You handled the project professionally and the build
            quality was of an exceptional standard.
            <br />
            <br />
            One of the buildings is to be rented and we quoted several RE
            property managers. We were told by all of them that the design and
            finish is up with the better ones in this class. The buildings have
            long been completed and we have not had a single issue under the
            warranty.
            <br />
            <br />
            We wish you well with your future projects and we would not hesitate
            to use your services again. We recommend your company to anyone
            contemplating building a house.
            <br />
          </p>
          <h4>Kind regards, Malcolm Revell</h4>
        </div>
      </div>
    </article>
  );
}
function FourthSection({ imageData }) {
  return (
    <article className="bg-white text-brand-blue">
      <div className="relative z-10 w-full max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
        {/* <h1 className="border-white heading-2">About Us</h1> */}
        <div className="w-full prose max-w-none">
          <h4>Clipstone Close - Port Macquarie</h4>
          <p>
            <br />
            It is with much pleasure I offer this testimonial for Brucorp. I am
            the proud owner of a dual occupancy property expertly constructed by
            Brucorp. 5 bedrooms, 4 bathrooms, 2 kitchens all perfectly finished
            and on schedule.
            <br />
            <br />
            Corina, Darren, Ben and the crew were fastidious in their finishes
            and workmanship. I can't thank them enough for their attention to
            detail and experience. They were always available for any queries
            and always had my best interests at heart.
            <br />
            <br />
            Thanks guys for a fantastic product. I would not hesitate to
            recommend them to build and project manage any construction. I would
            be happy to speak with any prospective clients of Brucorp.
            <br />
          </p>
          <h4>Helen Bicket</h4>
        </div>
      </div>
    </article>
  );
}
function AboutUs({ imageData }) {
  return (
    <article className="bg-white text-brand-blue">
      <div className="relative z-10 w-full max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {/* <h1 className="border-white heading-2">About Us</h1> */}
            <div className="prose ">
              <h4>McIntyre Close - Port Macquarie</h4>
              <p>
                <br />
                Hi Darren and Corrina,
                <br />
                <br />
                Last year we made the momentous decision to build our first
                home. We researched several project home companies and other
                local builders, but we finally settled on Bruen Family Homes, a
                recommendation from our draftsman. Working with Darren and
                Corrina was a wonderful and satisfying experience – from the
                initial meeting to the handing over of the keys.
                <br />
                <br />
                Corrina’s administration skills, with consistent updates and
                suggestions, were greatly appreciated and imbued a sense of
                confidence in us. In addition, she was more than happy to get
                onsite herself, making sure the site was left clean and tidy at
                the end of each day. Darren’s knowledge, creative
                problem-solving skills, craftsmanship and attention to detail –
                never cutting corners – resulted in a master-built home we
                absolutely love.
                <br />
                <br />
                When every supply company spoke so highly of the Bruen Family,
                we knew we were on a winner. We were impressed that it was a
                true family business, with sons Ben and Teejay working on the
                project at times. In addition, it was fantastic to see several
                young apprentices being well-mentored and learning at all stages
                of the build. We could not imagine a better building experience
                and are so grateful that we chose Bruen Family Homes to help us
                build a house for our family to forever call home.
              </p>
              <h4>Cheers, Tony and Justine</h4>
            </div>
          </div>
          <div className="relative w-full mx-auto lg:col-span-2">
            <div className="relative h-0 aspect-w-3 aspect-h-4">
              <div className="absolute inset-0 flex">
                <GatsbyImage
                  image={imageData}
                  alt=""
                  objectFit="contain"
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function WhyChooseUs({ imageData }) {
  return (
    <article className="relative text-white bg-gray-900">
      <div className="absolute inset-0 flex">
        <GatsbyImage image={imageData} alt="" className="flex-1" />
      </div>
      <div className="relative z-10 w-full max-w-screen-xl px-4 py-40 mx-auto sm:px-6 lg:px-8">
        <h2 className="border-white heading-2">Why Choose Us?</h2>
        <div className="mt-12 prose text-white">
          <h3>We&rsquo;re Reliable</h3>
          <p>
            It’s simple — we turn up when we say we will and work to a fixed
            price contract. We keep you in the loop with every development and
            are pro-active when it comes to solving problems.
          </p>
          <h3>We&rsquo;re A Family</h3>
          <p>
            Our team is made up of quality carpenters, tradespeople, designers,
            and project managers all experienced in delivering projects big and
            small to satisfied clients. When you work with us, there will always
            be a Bruen family member on the job site, either as a builder or
            carpenter to oversee and deliver your project.
          </p>
          <h3>We&rsquo;re Focused</h3>
          <p>
            We focus all our attention on making sure your home, renovation, or
            outdoor living area is built to last. That’s the Bruen Family
            promise.
          </p>
        </div>
      </div>
    </article>
  );
}

export const query = graphql`
  query {
    aboutHero: file(relativePath: { eq: "testimonials-hero2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920)
      }
    }
    aboutUs: file(relativePath: { eq: "testimonials-image.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 600, height: 800)
      }
    }
    whoAreWe: file(relativePath: { eq: "who-are-we.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1920)
      }
    }
    thrumster: file(relativePath: { eq: "thrumster.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 600, height: 800)
      }
    }
  }
`;

export default TestimonialsPage;
