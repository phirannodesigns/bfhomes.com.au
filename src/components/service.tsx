import * as React from 'react';
import Image, { FluidObject } from 'gatsby-image';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import SanityBlockContent from '@sanity/block-content-to-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { BGImageRight } from './bg-image-right';
import { getTailwindConfig } from '../utils/get-tailwind-config';

const tailwindConfig = getTailwindConfig();

interface ServiceProps {
  service: {
    _rawBody?: Object;
    copy?: string;
    heroImage: {
      asset: {
        fluid: FluidObject;
      };
    };
    id: string;
    images: Array<{
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
  imageData: IGatsbyImageData;
}

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
    const md = `(min-width: ${tailwindConfig.theme.screens.md})`;
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

    const images = Array(9).fill({ imageData });

    return (
      <div
        // @ts-ignore
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
                <button onClick={() => slider.prev()}>
                  <HiChevronLeft className="text-2xl" />
                </button>
                {[...Array(slider.details().size).keys()].map((index) => (
                  <button
                    key={index}
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
                <button onClick={() => slider.next()}>
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
