import React from "react";

type ItemsOfProjects = {
  id: number;
  link: string;
  text: string;
  image: string;
  category: string;
  year: string;
};

type ProjectsProps = {
  items: ItemsOfProjects[];
};

const Projects: React.FC<ProjectsProps> = ({ items }) => {
  return (
    <div className="_projects">
      {items.map((item) => (
        <article key={item.id}>
          {/*  */}
          <a href={item.link} className="inline">
            <img
              src={item.image}
              className="w-full object-cover max-h-[645px] rounded-4xl"
              alt={item.text}
            />
          </a>
          <div className="flex flex-row items-center justify-between py-4 px-4">
            <h4 className="text-4xl tracking-widest font-medium">
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
