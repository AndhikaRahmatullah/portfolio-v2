import React from 'react';
// interfaces
import { ExperienceInterface } from '/src/interfaces/experience';

// ----------------------------------------------------------------------

interface HomeExperienceProps {
  experiences: ExperienceInterface[];
}

// ----------------------------------------------------------------------

const HomeExperience: React.FC<HomeExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="flex-col items-center justify-center px-10 pb-16 pt-32 lg:pb-28 lg:pl-40 lg:pr-20 lg:pt-40">
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
        <p className="font-poppins text-4xl font-black md:text-5xl lg:text-6xl">
          Experience<span className="text-cyan-500">.</span>
        </p>
        <div className="aspect-auto h-[1px] w-full bg-light/50" />
      </div>

      <div className="mt-5 flex flex-col gap-10 lg:mt-10">
        {experiences?.map((experience, index) => (
          <div key={index} className="flex w-full flex-col gap-4 border-b-[1px] border-b-light/10 pb-7">
            <div className="flex flex-row items-center justify-between">
              <p className="font-poppins text-xl font-bold md:text-2xl">{experience.job}</p>
              <p className="font-poppins text-lg font-light md:text-xl">
                {experience.startWork} - {experience.endWork}
              </p>
            </div>

            <div className="flex flex-row items-center justify-between">
              <p className="font-poppins text-lg font-medium text-cyan-500 md:text-xl">{experience.role}</p>
              <p className="font-poppins text-lg font-light md:text-xl">{experience.workplace}</p>
            </div>

            <div className="">
              <p className="text-justify text-sm leading-relaxed md:text-left md:text-base lg:text-lg">{experience.descriptions}</p>
            </div>

            <div className="flex flex-row flex-wrap gap-3">
              {experience.devTools?.map((tool, index) => (
                <p key={index} className="w-fit rounded-full bg-dark px-3 py-1 text-sm md:text-base">
                  {tool}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeExperience;
