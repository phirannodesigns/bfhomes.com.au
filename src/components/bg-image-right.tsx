import * as React from "react";
import { BGRight } from "./vectors/shapes/bg-right";

interface BGImageRightProps {
  children: React.ReactNode;
}

function BGImageRight({ children }: BGImageRightProps) {
  return (
    <div className="relative">
      {children}
      <BGRight
        aria-hidden
        focusable={false}
        preserveAspectRatio="none"
        className="absolute inset-y-0 right-0 h-full pointer-events-none"
      />
    </div>
  );
}

export { BGImageRight };
