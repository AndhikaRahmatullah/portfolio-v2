import React from 'react';
import { Icon } from '@iconify-icon/react';

// interfaces
import { ProjectInterface } from '/src/interfaces/project';
//
import HomeDialogProjects from './home-dialog-projects';

// ----------------------------------------------------------------------

interface HomeProjectsProps {
  projects: ProjectInterface[];
}

// ----------------------------------------------------------------------

const HomeProjects: React.FC<HomeProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="flex-col items-center justify-center px-10 pb-16 pt-32 lg:pb-28 lg:pl-40 lg:pr-20 lg:pt-40">
      <div className="flex flex-col-reverse items-center gap-4 md:flex-row md:gap-8">
        <div className="aspect-auto h-[1px] w-full bg-light/50" />
        <p className="font-poppins text-4xl font-black md:text-5xl lg:text-6xl">
          Projects<span className="text-cyan-500">.</span>
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-16 lg:mt-10 lg:grid-cols-2">
        {projects?.map((project, index) => (
          <div key={index}>
            <div className="flex flex-col gap-5">
              <HomeDialogProjects project={project} />

              <div className="flex flex-col items-center justify-start gap-2 md:flex-row md:justify-between">
                <div className="">
                  <p className="font-poppins text-xl font-bold md:text-2xl">{project.name}</p>
                </div>

                <div className="hidden aspect-auto h-[1px] w-full flex-1 bg-light/50 md:block" />

                {project.url && (
                  <div>
                    <a href={project.url} target="_blank" rel="noreferrer" className="transition-all duration-300 hover:text-cyan-500">
                      <Icon icon="material-symbols:web" width={28} />
                    </a>
                  </div>
                )}
              </div>

              <div className="flex flex-row flex-wrap justify-center gap-2 md:justify-start">
                {project.techs?.map((tech, index) => (
                  <p key={index} className="font-semibold text-cyan-500 after:ml-2 after:text-light [&:not(:last-child)]:after:content-['-']">
                    {tech}
                  </p>
                ))}
              </div>

              <div className="">
                <p className="text-justify text-sm leading-relaxed md:text-left md:text-base lg:text-lg">{project.descriptions}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeProjects;
