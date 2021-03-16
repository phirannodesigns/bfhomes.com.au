import Image from 'gatsby-image';
import * as React from 'react';

function HeroVideo({ YTVideoID, imageData }) {
  return (
    <article>
      <div className="relative hidden md:block aspect-w-16 aspect-h-9">
        <iframe
          // eslint-disable-next-line no-secrets/no-secrets
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder={0}
          title="YouTube video player"
          src={`https://www.youtube.com/embed/${YTVideoID}?autoplay=1&controls=0&disablekb=1&iv_load_policy=3&loop=1&modestbranding=1&playlist=${YTVideoID}&playsinline=1&rel=0`}
          className="absolute inset-0 pointer-events-none"
        />
      </div>
      <div className="relative block md:hidden">
        <Image fluid={imageData} className="flex-1 -mb-12 h-96" alt="" />
      </div>
    </article>
  );
}

export { HeroVideo };
