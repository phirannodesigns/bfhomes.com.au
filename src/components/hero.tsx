import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';

function Hero({ imageData }) {
  return (
    <div className="relative aspect-w-16 aspect-h-9">
      <div className="absolute inset-0 flex">
        <GatsbyImage image={imageData} alt="" className="flex-1" />
      </div>
    </div>
  );
}

export { Hero };
