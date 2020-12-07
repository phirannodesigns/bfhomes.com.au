import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useForm } from "react-hook-form";

import { Layout, SEO, BGImageRight, ContactSection } from "../components";
import { Input, NetlifyForm, Textarea } from "../components/form-elements";
import { HiArrowRight } from "react-icons/hi";

function AboutPage({ data }) {
  const newHomes = getImage(data.newHomes);
  const whoAreWe = getImage(data.whoAreWe);
  return (
    <Layout>
      <SEO title="About Us" />
      <Hero imageData={newHomes} />
      <BGImageRight>
        <AboutUs imageData={whoAreWe} />
        <WhyChooseUs imageData={whoAreWe} />
      </BGImageRight>
      <ContactSection />
    </Layout>
  );
}

// TODO replace hero image
function Hero({ imageData }) {
  return <GatsbyImage image={imageData} alt="" />;
}

function AboutUs({ imageData }) {
  return (
    <article className="text-white bg-brand-blue">
      <BGImageRight>
        <div className="relative z-10 w-full max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h1 className="border-white heading-2">About Us</h1>
              <div className="mt-5 prose text-white">
                <p>
                  Lorem psum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt t labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="relative w-full max-w-xs mx-auto">
              <div className="relative h-0 aspect-w-3 aspect-h-4">
                <div className="absolute inset-0 flex">
                  {/* // TODO fix object-position for image */}
                  <GatsbyImage image={imageData} alt="" className="flex-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BGImageRight>
    </article>
  );
}

function ContactForm() {
  const { handleSubmit, register, errors } = useForm({ mode: "onBlur" });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  return (
    <article>
      <div className="flex flex-col w-full max-w-2xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
        <h2 className="inline-block mx-auto text-3xl font-bold uppercase border-b-2 border-brand-teal text-brand-teal">
          Leave Us A Message
        </h2>
        <NetlifyForm
          handleSubmit={handleSubmit}
          setIsSubmitting={setIsSubmitting}
          className="grid gap-4 mt-10"
        >
          <Input
            name="full-name"
            label="Full Name"
            register={register}
            errors={errors}
            className="w-full"
          />
          <Input
            name="email-address"
            label="Email Address"
            type="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <Input
            name="contact-number"
            label="Contact Number"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
          />
          <Textarea
            name="message"
            label="Message"
            register={register}
            errors={errors}
            className="block w-full"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
          ${isSubmitting ? "opacity-50 cursor-wait" : ""}
          inline-flex space-x-2 items-center py-5 text-lg font-medium leading-none tracking-wider text-white uppercase border border-white px-14 bg-brand-blue
          `}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="w-5 h-5 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="3"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Submitting</span>
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </NetlifyForm>
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
        <div className="mt-5 prose text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor Sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </article>
  );
}

export const query = graphql`
  query {
    newHomes: file(relativePath: { eq: "new-homes.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 1920, maxHeight: 1080)
      }
    }
    whoAreWe: file(relativePath: { eq: "who-are-we.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FLUID, maxWidth: 1920, maxHeight: 820)
      }
    }
  }
`;

export default AboutPage;
