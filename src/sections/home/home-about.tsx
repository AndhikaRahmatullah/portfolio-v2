import React from 'react';
import { Icon } from '@iconify-icon/react';
// hooks
import { useResponsive } from '/src/hooks/use-responsive';

// ----------------------------------------------------------------------

interface HomeAboutProps {
  devTools: string[];
}

// ----------------------------------------------------------------------

const HomeAbout: React.FC<HomeAboutProps> = ({ devTools }) => {
  const { mdUp } = useResponsive();

  return (
    <section id="about" className="flex-col items-center justify-center px-10 pb-16 pt-32 lg:pb-28 lg:pl-40 lg:pr-20 lg:pt-40">
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
        <p className="font-poppins text-4xl font-black md:text-5xl lg:text-6xl">
          About<span className="text-cyan-500">.</span>
        </p>
        <div className="aspect-auto h-[1px] w-full bg-light/50" />
      </div>

      <div className="mt-5 flex flex-col gap-10 md:flex-row lg:mt-10">
        <div className="flex basis-8/12 flex-col gap-5">
          <p className="text-justify text-sm leading-relaxed md:text-left md:text-base lg:text-lg">
            I am an experienced frontend programmer with extensive skills in developing various types of projects. Over the years, I have been involved in numerous freelance projects including the
            creation of backoffice systems, e-commerce platforms, and company profile websites. I am highly proficient in utilizing various UI libraries such as React.js and Vue.js, and possess solid
            skills in using TypeScript to enhance the quality of my code.
          </p>

          <p className="text-justify text-sm leading-relaxed md:text-left md:text-base lg:text-lg">
            Furthermore, I have expertise in utilizing CSS libraries like Tailwind CSS and Material UI to design attractive and responsive user interfaces. My ability to integrate APIs ensures
            efficient communication between frontend and backend applications.
          </p>

          <p className="text-justify text-sm leading-relaxed md:text-left md:text-base lg:text-lg">
            Additionally, I have additional skills in operating Node.js as a server-side application, as well as experience in programming languages such as Java and Python. The combination of my
            experience and skills enables me to make valuable contributions to every project I undertake.
          </p>
        </div>

        <div className="basis-4/12">
          <div className="flex flex-row items-center gap-2">
            <Icon icon="fluent:window-dev-tools-16-filled" width={mdUp ? 28 : 22} className="text-cyan-500" />
            <p className="font-poppins text-xl font-bold md:text-2xl">Use at work</p>
          </div>

          <div className="mt-5 flex flex-row flex-wrap gap-3">
            {devTools?.map((tool, index) => (
              <p key={index} className="w-fit rounded-full bg-dark px-3 py-1 text-sm md:text-base">
                {tool}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
