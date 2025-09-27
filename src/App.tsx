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
import Box from "./components/Box";
import Projects from "./components/Projects";
/**
 * Import React to use JSX syntax.
 */

import projectOne from "./assets/images/projectOne.jpg";
import projectTwo from "./assets/images/projectTwo.jpg";
import projectThree from "./assets/images/projectThree.jpg";

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

const portfolios = [
  {
    id: 1,
    link: "one",
    text: "one",
    image: projectOne,
    category: "art",
    year: "2025",
  },
  {
    id: 2,
    link: "two",
    text: "two",
    image: projectTwo,
    category: "design",
    year: "2023",
  },
  {
    id: 3,
    link: "three",
    text: "three",
    image: projectThree,
    category: "resources",
    year: "2024",
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
      <Navigation
        className="flex gap-x-4"
        showIcon={true}
        showText={false}
        items={socials}
      />
      <Box
        title="Socials of us"
        button={
          <Button variant="default" className="mb-4">
            Get more
          </Button>
        }
      >
        <Projects items={portfolios} />
      </Box>
    </div>
  );
};

export default App;
/**
 * Exporting the App component as default.
 */
