/**
 * Projects Component
 * Renders a list of project cards with image, title, category, and year.
 */

import React from "react";

/**
 * Type definition for a single project item.
 */
type ItemsOfProjects = {
  id: number; // Unique identifier for the project
  link: string; // URL to the project
  text: string; // Project title
  image: string; // URL of the project image
  category: string; // Project category
  year: string; // Year of the project
};

/**
 * Props type for Projects component
 */
type ProjectsProps = {
  items: ItemsOfProjects[]; // Array of project items
};

/**
 * Projects component
 * Maps over the items array and renders each project as a card with image, title, category, and year.
 */
const Projects: React.FC<ProjectsProps> = ({ items }) => {
  return (
    <div className="_projects">
      {items.map((item) => (
        <article key={item.id}>
          {/* Project image wrapped in a link */}
          <a href={item.link} className="inline">
            <img
              src={item.image}
              className="w-full object-cover max-h-[645px] rounded-4xl"
              alt={item.text}
            />
          </a>

          {/* Project details */}
          <div className="flex flex-row items-center justify-between py-4 px-4">
            <h4 className="text-3xl lg:text-4xl tracking-widest font-medium">
              {item.text}
            </h4>
            <div className="inline-flex gap-x-4 text-lg">
              <h6 className="text-zinc-800">{item.category}</h6>/
              <span className="text-zinc-700">{item.year}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Projects;
/**
 * Exporting Projects as default for use in other components.
 */
