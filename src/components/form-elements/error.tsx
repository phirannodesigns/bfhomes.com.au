import React from "react";

interface ErrorProps {
  message: string;
}

function Error({ message }: ErrorProps) {
  return (
    <p
      role="alert"
      className="mt-1 text-xs font-bold tracking-widest text-red-500 uppercase"
    >
      {message}
    </p>
  );
}

export { Error };
