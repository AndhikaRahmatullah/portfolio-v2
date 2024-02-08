import React from 'react';
// hooks
import { useBoolean } from '/src/hooks/use-boolean';
// interfaces
import { ProjectInterface } from '/src/interfaces/project';
// components
import { Dialog } from '/src/components/dialog';

// ----------------------------------------------------------------------

interface HomeDialogProjectsProps {
  project: ProjectInterface;
}

// ----------------------------------------------------------------------

const HomeDialogProjects: React.FC<HomeDialogProjectsProps> = ({ project }) => {
  const state = useBoolean(false);

  return (
    <>
      <div onClick={state.onTrue} className="group flex h-72 w-full cursor-pointer items-end justify-center overflow-hidden rounded-lg bg-[#232323]">
        <img
          src={project.image}
          alt={project.name}
          className="h-[90%] w-[90%] rounded-t-lg object-fill object-top transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 md:h-[80%] md:w-[80%]"
        />
      </div>

      <Dialog state={state} maxWidth="lg" className="rounded-xl">
        <div>
          <div className="h-[500px]">
            <img src={project.image} alt={project.name} className="h-full w-full object-cover object-top md:object-fill md:object-center" />
          </div>

          <div className="flex flex-col gap-10 bg-dark px-5 py-10">
            <div className="flex flex-col gap-2">
              <div className="">
                <p className="text-center font-poppins text-2xl font-bold md:text-left md:text-4xl">{project?.name}</p>
              </div>

              <div className="flex flex-row flex-wrap justify-center gap-2 md:justify-start">
                {project?.techs?.map((tech, index) => (
                  <p key={index} className="font-semibold text-cyan-500 after:ml-2 after:text-light [&:not(:last-child)]:after:content-['-']">
                    {tech}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="font-poppins text-sm font-semibold md:text-left md:text-base lg:text-2xl">
                  Project Descriptions<span className="text-cyan-500">.</span>
                </p>

                <p className="text-justify text-sm leading-relaxed md:text-left md:text-base lg:text-lg">{project?.descriptions}</p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="font-poppins text-sm font-semibold md:text-left md:text-base lg:text-2xl">
                  Job Descriptions<span className="text-cyan-500">.</span>
                </p>

                <p className="text-justify text-sm leading-relaxed md:text-left md:text-base lg:text-lg">{project?.jobDesc}</p>
              </div>

              {project?.url && (
                <div className="flex flex-col gap-1">
                  <p className="font-poppins text-sm font-semibold md:text-left md:text-base lg:text-2xl">
                    Project Link<span className="text-cyan-500">.</span>
                  </p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-justify text-sm italic leading-relaxed text-cyan-500 underline transition-all duration-300 hover:text-light md:text-left md:text-base"
                  >
                    {project?.url}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default HomeDialogProjects;
