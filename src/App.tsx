/**
 * App Component
 * The root component of the application.
 * Currently a placeholder that renders a simple div.
 */

import React from "react";
import Button from "./components/Button";
/**
 * Import React to use JSX syntax.
 */

const App = () => {
  /**
   * Main render function of the App component.
   * Returns a simple placeholder div.
   */
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-4">Portfolio.</h1>
      <Button variant="default">Submit</Button>
    </div>
  );
};

export default App;
/**
 * Exporting the App component as default.
 */
