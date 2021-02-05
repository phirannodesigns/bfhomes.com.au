import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface ICarousel {
  children: React.ReactNode;
}

function Carousel({ children }: ICarousel): React.ReactElement {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isMounted, setIsMounted] = React.useState(false);
  const sliderContainerRef = React.useRef<HTMLDivElement>(null);

  const [ref, slider] = useKeenSlider<HTMLUListElement>({
    loop: true,
    slidesPerView: 1,
    mounted: () => setIsMounted(true),
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  // Stop the history navigation gesture on touch devices
  React.useEffect(() => {
    const preventNavigation = (event: TouchEvent) => {
      // Center point of the touch area
      const touchXPosition = event.touches[0].pageX;
      // Size of the touch area
      const touchXRadius = event.touches[0].radiusX || 0;

      // We set a threshold (10px) on both sizes of the screen,
      // if the touch area overlaps with the screen edges
      // it's likely to trigger the navigation. We prevent the
      // touchstart event in that case.
      if (
        touchXPosition - touchXRadius < 10 ||
        touchXPosition + touchXRadius > window.innerWidth - 10
      )
        event.preventDefault();
    };

    sliderContainerRef.current?.addEventListener(
      'touchstart',
      preventNavigation
    );

    return () => {
      sliderContainerRef.current?.removeEventListener(
        'touchstart',
        preventNavigation
      );
    };
  }, []);

  function handleKeyDown(e) {
    if (e.key === 'ArrowLeft') slider.prev();
    if (e.key === 'ArrowRight') slider.next();
  }

  return (
    <div ref={sliderContainerRef} className="relative">
      <ul
        ref={ref}
        role="region"
        tabIndex={0}
        onKeyDown={(e) => handleKeyDown(e)}
        className="h-full transition-opacity duration-150 keen-slider focus:z-10"
        style={{ opacity: isMounted ? 1 : 0 }}
      >
        {React.Children.map(children, (child) => {
          // Add the keen-slider__slide className to children
          if (React.isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className} ` : ''
                }keen-slider__slide`,
              },
            };
          }
          return child;
        })}
      </ul>
      {slider && (
        <div className="absolute inset-x-0 bottom-0 z-10 pt-6 pb-2 transform bg-gradient-to-b from-transparent via-white to-white">
          <ul className="relative flex items-center justify-center space-x-2">
            {[...Array(slider.details().size).keys()].map((index) => (
              <li key={index}>
                <button
                  type="button"
                  aria-label={`Move to slide ${index + 1}`}
                  onClick={() => {
                    slider.moveToSlideRelative(index);
                  }}
                  className={`${
                    currentSlide !== index ? 'bg-opacity-0' : 'bg-opacity-100'
                  } bg-brand-blue h-2.5 w-2.5 rounded-full border border-brand-blue transition duration-150 ease-in-out pointer-events-auto`}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export { Carousel };
