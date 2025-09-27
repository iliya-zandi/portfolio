/**
 * App Component
 * The root component of the application.
 * Currently a placeholder that renders a simple div.
 */

import React from "react";
import Button from "./components/Button";
import Navigation from "./components/Navigation";
import {
  FacebookLogo,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
/**
 * Import React to use JSX syntax.
 */

const socials = [
  {
    id: 1,
    link: "1",
    text: "Twitter",
    icon: <TwitterLogo size={28} weight="thin" />,
  },
  {
    id: 1,
    link: "2",
    text: "facebook",
    icon: <FacebookLogo size={28} weight="thin" />,
  },
  {
    id: 1,
    link: "3",
    text: "github",
    icon: <GithubLogo size={28} weight="thin" />,
  },
  {
    id: 1,
    link: "4",
    text: "linkedin",
    icon: <LinkedinLogo size={28} weight="thin" />,
  },
];

const App = () => {
  /**
   * Main render function of the App component.
   * Returns a simple placeholder div.
   */
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-4">Portfolio.</h1>
      <Button variant="default" className="mb-4">
        Submit
      </Button>
      <Navigation
        className="flex gap-x-4"
        showIcon={true}
        showText={false}
        items={socials}
      />
    </div>
  );
};

export default App;
/**
 * Exporting the App component as default.
 */
