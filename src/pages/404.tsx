import { Link } from "@reach/router";
import * as React from "react";

function NotFoundPage() {
  return (
    <div>
      <h1>404: Page Not Found</h1>
      <Link to="/">Return to home page</Link>
    </div>
  );
}

export default NotFoundPage;
