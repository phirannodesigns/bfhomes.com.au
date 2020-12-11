import * as React from "react";

function HeadingWithCopy({ id, heading, copy }) {
  return (
    <article id={id} className="text-brand-blue">
      <div className="w-full max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="inline-block text-2xl font-bold text-center uppercase border-b-2 border-brand-blue">
            {heading}
          </h2>
          <div className="mt-5 prose">
            <p>{copy}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export { HeadingWithCopy };
