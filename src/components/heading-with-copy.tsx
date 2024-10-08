/* eslint-disable react/no-array-index-key */
import SanityBlockContent from '@sanity/block-content-to-react';
import * as React from 'react';

interface IHeadingWithCopy {
  id?: string;
  heading: string;
  copy?: string;
  copyArray?: string[];
  rawBody?: [];
}

function HeadingWithCopy({
  id,
  heading,
  copy,
  copyArray,
  rawBody,
}: IHeadingWithCopy) {
  return (
    <article id={id} className="text-brand-blue">
      <div className="w-full max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="inline-block text-2xl font-bold text-center uppercase border-b-2 border-brand-blue">
            {heading}
          </h2>
          {copy ||
            (copyArray && (
              <div className="mt-5 prose">
                {copy ? (
                  <p>{copy}</p>
                ) : (
                  copyArray && copyArray.map((c, i) => <p key={i}>{c}</p>)
                )}
              </div>
            ))}
          {rawBody && (
            <SanityBlockContent
              blocks={rawBody}
              renderContainerOnSingleChild
              className="mt-5 prose"
            />
          )}
        </div>
      </div>
    </article>
  );
}

export { HeadingWithCopy };
