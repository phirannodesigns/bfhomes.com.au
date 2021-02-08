import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';

interface IHero {
  children?: React.ReactNode;
  imageData?: IGatsbyImageData;
}

function Hero({ children, imageData }: IHero) {
  return (
    <div className="relative aspect-w-16 aspect-h-9">
      <div className="absolute inset-0 flex">
        {children || (
          <GatsbyImage image={imageData} alt="" className="flex-1" />
        )}
      </div>
    </div>
  );
}

export { Hero };
