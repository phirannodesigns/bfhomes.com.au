import * as React from 'react';
import { BGLeft } from './vectors/shapes/bg-left';

interface BGImageLeftProps {
  children: React.ReactNode;
}

function BGImageLeft({ children }: BGImageLeftProps) {
  return (
    <div className="relative">
      {children}
      <BGLeft
        aria-hidden
        focusable={false}
        preserveAspectRatio="none"
        className="absolute inset-y-0 left-0 h-full pointer-events-none"
      />
    </div>
  );
}

export { BGImageLeft };
