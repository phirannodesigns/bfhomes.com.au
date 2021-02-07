import 'keen-slider/keen-slider.min.css';

import SanityBlockContent from '@sanity/block-content-to-react';
import Image, { FluidObject } from 'gatsby-image';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useKeenSlider } from 'keen-slider/react';
import * as React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { getTailwindConfig } from '../utils/get-tailwind-config';
import { BGImageRight } from './bg-image-right';

const tailwindConfig = getTailwindConfig();

interface ServiceProps {
  service: {
    // @ts-expect-error not sure how to type this object
    _rawBody?: Record<string | unknown>;
    copy?: string;
    heroImage?: {
      asset: {
        fluid: FluidObject;
      };
    };
    id: string;
    images?: Array<{
      _key: string;
      asset: {
        fluid: FluidObject;
      };
    }>;
    slug:
      | string
      | {
          current: string;
        };
    title: string;
  };
  reverse: boolean;
  // eslint-disable-next-line react/require-default-props
  imageData?: IGatsbyImageData;
}

// eslint-disable-next-line sonarjs/cognitive-complexity
function Service({ service, reverse, imageData }: ServiceProps) {
  function MainImage() {
    return (
      <div className="relative lg:row-span-2">
        <div className="absolute inset-0 flex">
          {service.heroImage ? (
            <Image
              fluid={service.heroImage.asset.fluid}
              alt=""
              className="flex-1"
            />
          ) : (
            <GatsbyImage image={imageData} alt="" className="flex-1" />
          )}
        </div>
      </div>
    );
  }

  function InnerContent() {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const md = `(min-width: ${tailwindConfig.theme.screens.md})`;
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const lg = `(min-width: ${tailwindConfig.theme.screens.lg})`;

    const [currentSlide, setCurrentSlide] = React.useState(0);

    const [sliderRef, slider] = useKeenSlider<HTMLUListElement>({
      spacing: 16,
      slidesPerView: 1,
      centered: true,
      initial: 0,
      loop: true,
      breakpoints: {
        [md]: {
          slidesPerView: 2,
        },
        [lg]: {
          slidesPerView: 3,
        },
      },
      slideChanged(s) {
        setCurrentSlide(s.details().relativeSlide);
      },
    });

    const images = Array.from({ length: 9 }).fill({ imageData });

    return (
      <div
        // @ts-expect-error not sure ow to type this slug can be a strong or an object
        id={service.slug?.current || service.slug}
        className="relative z-10 grid w-full max-w-screen-xl gap-4 px-4 py-20 mx-auto sm:px-6 lg:px-8 lg:grid-cols-4"
      >
        {reverse && <MainImage />}
        <div className="lg:col-span-3">
          <h2
            className={`
          ${reverse ? 'border-white' : 'border-brand-blue'}
          heading-2`}
          >
            {service.title}
          </h2>
          {service.copy ? (
            <div
              dangerouslySetInnerHTML={{ __html: service.copy }}
              className={`
              ${reverse ? 'text-white' : 'text-brand-blue'}
              mt-5 prose-lg font-medium`}
            />
          ) : (
            <SanityBlockContent
              blocks={service._rawBody}
              renderContainerOnSingleChild
              className={`
            ${reverse ? 'text-white' : 'text-brand-blue'}
            mt-5 prose-lg font-medium`}
            />
          )}
        </div>
        {!reverse && <MainImage />}
        <div className="relative lg:col-span-3">
          <div>
            <ul ref={sliderRef} className="keen-slider">
              {service.images
                ? service.images.map(({ _key, asset }) => (
                    <li key={_key} className="keen-slider__slide">
                      <div className="relative h-0 aspect-w-4 aspect-h-3">
                        <div className="absolute inset-0 flex">
                          <Image
                            fluid={asset.fluid}
                            alt=""
                            className="flex-1"
                          />
                        </div>
                      </div>
                    </li>
                  ))
                : images.map((image) => (
                    <li className="keen-slider__slide">
                      <div className="relative h-0 aspect-w-4 aspect-h-3">
                        <div className="absolute inset-0 flex">
                          <GatsbyImage
                            // @ts-expect-error need to add type for Gatsby Image data
                            image={image.imageData}
                            alt=""
                            className="flex-1"
                          />
                        </div>
                      </div>
                    </li>
                  ))}
            </ul>
            {slider && (
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center py-2 space-x-2 transform translate-y-full">
                <button type="button" onClick={() => slider.prev()}>
                  <HiChevronLeft className="text-2xl" />
                </button>
                {[...new Array(slider.details().size).keys()].map((index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Move to slide ${index + 1}`}
                    onClick={() => {
                      slider.moveToSlideRelative(index);
                    }}
                    className={`rounded-full h-3 w-3 transition duration-150 ease-in-out hover:bg-opacity-100 ${
                      reverse ? 'bg-white' : 'bg-brand-blue'
                    } ${
                      currentSlide === index
                        ? 'bg-opacity-100'
                        : 'bg-opacity-50'
                    }
                      `}
                  />
                ))}
                <button type="button" onClick={() => slider.next()}>
                  <HiChevronRight className="text-2xl" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <article
      id={service.id}
      className={`
    ${reverse ? 'text-white bg-brand-blue' : 'text-brand-blue bg-gray-100'}
    relative`}
    >
      {reverse ? (
        <BGImageRight>
          <InnerContent />
        </BGImageRight>
      ) : (
        <InnerContent />
      )}
    </article>
  );
}

export { Service };
