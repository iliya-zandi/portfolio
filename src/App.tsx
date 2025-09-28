/**
 * App Component
 * The root component of the application.
 * It renders the main layout including header, projects, posts, recommendations, and footer sections.
 */

import React from "react";

/**
 * Import icons from Phosphor Icons library.
 */
import {
  FacebookLogo,
  GithubLogo,
  HandPointing,
  LinkedinLogo,
  PhoneCall,
  Quotes,
  TwitterLogo,
} from "@phosphor-icons/react";

/**
 * Import images used in the app.
 */
import projectOne from "./assets/images/projectOne.jpg";
import projectTwo from "./assets/images/projectTwo.jpg";
import projectThree from "./assets/images/projectThree.jpg";
import avatar from "./assets/images/avatar.jpg";
import postOne from "./assets/images/postOne.jpg";
import postTwo from "./assets/images/postTwo.jpg";

/**
 * Import custom components used in the app.
 */
import Navigation from "./components/Navigation";
import Button from "./components/Button";
import Box from "./components/Box";
import Projects from "./components/Projects";

/**
 * Social media links array for header and footer navigation.
 */
const socials = [
  {
    id: 1,
    link: "1",
    text: "Twitter",
    icon: <TwitterLogo size={36} weight="thin" />,
  },
  {
    id: 2,
    link: "2",
    text: "Facebook",
    icon: <FacebookLogo size={36} weight="thin" />,
  },
  {
    id: 3,
    link: "3",
    text: "Github",
    icon: <GithubLogo size={36} weight="thin" />,
  },
  {
    id: 4,
    link: "4",
    text: "LinkedIn",
    icon: <LinkedinLogo size={36} weight="thin" />,
  },
];

/**
 * Portfolio projects array to display in Projects section.
 */
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

/**
 * Testimonials array to display recommendations section.
 */
const testimonials = [
  {
    id: 1,
    name: "Maki Donald",
    role: "Software Engineer",
    quote:
      "I build elegant software solutions, design intuitive user experiences, and create innovative projects from scratch, focusing on simplicity and clarity.",
  },
  {
    id: 2,
    name: "Jordan Lee",
    role: "Designer",
    quote:
      "I create minimal and engaging digital designs that are both functional and visually appealing, ensuring a smooth and clear user experience.",
  },
  {
    id: 3,
    name: "Alex Morgan",
    role: "Founder",
    quote:
      "I lead innovative projects that combine design and technology, creating products that are both impactful and memorable for users.",
  },
];

/**
 * App component
 * Main functional component that renders the complete UI.
 */
const App = () => {
  /**
   * Renders the complete app layout including header, main content, and footer.
   */
  return (
    <div className="app">
      <main className="app_content">
        {/** Header Section */}
        <header>
          <div className="container py-36 flex flex-col flex-center">
            <img
              src={avatar}
              alt="iliya zandi"
              className="max-w-full mb-6 rounded-full object-cover w-[145px] lg:h-[80px]"
            />
            <h1 className="text-4xl lg:text-6xl font-bold tracking-wider text-slate-900 mb-3">
              Liam Carter
            </h1>
            <h2 className="mb-5 text-md lg:text-xl font-normal tracking-tight text-slate-700">
              Software Engineer, Designer, Founder
            </h2>
            <span className="h-[1px] bg-black/10 mb-4 w-1/5"></span>
            <p className="text-slate-600 lg:leading-7 text-center w-full xl:max-w-3xl mb-6">
              I build elegant software solutions that solve real problems. I
              design intuitive and minimal user experiences that feel natural
              and engaging. I create innovative projects from the ground up,
              combining creativity and technology to make an impact.
            </p>
            <Navigation
              items={socials}
              showIcon={true}
              showText={false}
              className="flex flex-row mb-6 items-center gap-x-4"
            />
            <Button variant="active">
              <div className="flex items-center gap-x-2">
                Get in touch
                <span>
                  <HandPointing size={22} weight="light" />
                </span>
              </div>
            </Button>
          </div>
        </header>

        {/** Main Content Section */}
        <main className="block">
          <Box
            title="Projects"
            button={<Button variant="default">View all</Button>}
            className="container"
          >
            <Projects items={portfolios} />
          </Box>

          <Box
            title="Posts"
            button={<Button variant="default">View all</Button>}
            className="container"
          >
            <div className="flex flex-col gap-y-16">
              {/** Post One */}
              <article className="flex flex-col flex-center text-center lg:text-left lg:flex-row lg:gap-x-16 gap-y-8">
                <div className="overflow-hidden lg:w-1/4">
                  <a href="/" className="inline">
                    <img
                      src={postOne}
                      className="max-w-full object-cover h-[250px] rounded-4xl"
                    />
                  </a>
                </div>
                <div className="flex flex-col w-3/4">
                  <h5 className="text-2xl font-medium mb-6 text-slate-900 tracking-wider">
                    The Rise of AI-Assisted Design System
                  </h5>
                  <p className="text-lg text-slate-700 leading-7">
                    The Rise of AI-Assisted Design Systems is fundamentally
                    changing the landscape of design. By automating repetitive
                    tasks, providing intelligent suggestions, and learning from
                    user behavior, these systems empower designers to focus on
                    creativity and innovation. They enhance consistency across
                    projects, speed up workflows, and allow teams to experiment
                    with ideas more freely, ultimately making the design process
                    smarter, more efficient, and more impactful.
                  </p>
                </div>
              </article>

              {/** Post Two */}
              <article className="flex flex-col flex-center text-center lg:text-left lg:flex-row lg:gap-x-16 gap-y-8">
                <div className="overflow-hidden lg:w-1/4">
                  <a href="/" className="inline">
                    <img
                      src={postTwo}
                      className="max-w-full object-cover h-[250px] rounded-4xl"
                    />
                  </a>
                </div>
                <div className="flex flex-col w-3/4">
                  <h5 className="text-2xl font-medium mb-6 text-slate-900 tracking-wider">
                    Why I Built My Design Portfolio With WebGL
                  </h5>
                  <p className="text-lg text-slate-700 leading-7">
                    I built my design portfolio with WebGL to push the
                    boundaries of creativity and showcase my technical skills.
                    WebGL allows for interactive, 3D experiences directly in the
                    browser, making the portfolio more engaging and visually
                    striking. By incorporating dynamic animations and immersive
                    effects, I can offer potential clients and employers a truly
                    unique and memorable experience, setting my portfolio apart
                    from traditional, static designs.
                  </p>
                </div>
              </article>
            </div>
          </Box>

          {/** Recommendations Section */}
          <Box
            title="Recommendations"
            button={<Button variant="default">View all</Button>}
            className="container"
          >
            <div className="flex flex-col gap-y-16">
              {testimonials.map((item) => (
                <article key={item.id}>
                  <Quotes weight="light" className="mb-2" size={42} />
                  <p className="text-slate-700 text-lg leading-7">
                    {item.quote}
                  </p>
                  <h6 className="text-xl font-medium text-slate-800 mt-2">
                    {item.name} @{item.role}
                  </h6>
                </article>
              ))}
            </div>
          </Box>
        </main>

        {/** Footer Section */}
        <footer>
          <div className="container py-36 flex flex-col flex-center">
            <h2 className="text-5xl mb-6 font-bold text-slate-900 tracking-wider">
              Get in touch
            </h2>
            <Navigation
              items={socials}
              showIcon={false}
              showText={true}
              className="flex flex-row mb-6 items-center gap-x-4"
            />
            <Button variant="active">
              <div className="flex items-center gap-x-2">
                Contact me
                <span>
                  <PhoneCall size={22} weight="light" />
                </span>
              </div>
            </Button>
          </div>
        </footer>
      </main>
    </div>
  );
};

/**
 * Exporting the App component as default.
 */
export default App;
