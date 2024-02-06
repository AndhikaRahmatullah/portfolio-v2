import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
// interfaces
import { ExperienceInterface } from '/src/interfaces/experience';
//
import HomeAbout from '../home-about';
import HomeContact from '../home-contact';
import HomeExperience from '../home-experience';

// ----------------------------------------------------------------------

const HomeView: React.FC = () => {
  const [devTools, setDevTools] = useState<string[]>([]);

  const [experiences, setExperiences] = useState<ExperienceInterface[]>([]);

  const el = useRef<HTMLSpanElement>(null);

  // TYPED LIBRARY
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Dika.', 'Andhika.'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // DEV TOOLS
  useEffect(() => {
    const getDevTools = () => {
      const result: string[] = [
        'Javascript',
        'ReactJS',
        'Typescript',
        'GitHub',
        'TailwindCSS',
        'Vercel',
        'VueJS',
        'useSWR',
        'Niagahoster',
        'MaterialUI',
        'NextJS',
        'NodeJS',
        'ViteJS',
        'DaisyUI',
        'CryptoJS',
        'Others',
      ];
      setDevTools(result);
    };

    const getExperiences = () => {
      const result: ExperienceInterface[] = [
        {
          job: 'Freelance',
          role: 'Frontend',
          startWork: '2022',
          endWork: 'Present',
          workplace: 'Bogor',
          descriptions: 'Building user interfaces for various freelance projects, integrating data with provided APIs, assisting in maintaining data in the database, and overall website maintenance.',
          devTools: ['Javascript', 'ReactJS', 'Typescript', 'GitHub', 'TailwindCSS', 'Vercel', 'MaterialUI', 'NextJS', 'ViteJS'],
        },
      ];

      setExperiences(result);
    };

    getDevTools();
    getExperiences();
  }, []);

  return (
    <section className="2xl:container dark:bg-dark">
      <section className="flex-col items-center justify-center px-10 pb-16 pt-32 lg:pb-28 lg:pl-40 lg:pr-20 lg:pt-40">
        <div className="">
          <p className="font-poppins text-center text-5xl font-black text-light transition-all duration-300 md:text-left md:text-6xl lg:text-8xl">
            Hello, I'm <br className="md:hidden" /> <span ref={el} className="text-cyan-500" />
          </p>
        </div>

        <div className="mt-4">
          <p className="font-poppins text-center text-xl text-light md:text-left md:text-2xl lg:text-4xl">
            I'm a <span className="text-cyan-500">Frontend Web Developer</span>
          </p>
        </div>

        <div className="my-6">
          <p className="max-w-3xl text-justify text-sm leading-relaxed text-light md:text-left md:text-base lg:text-lg">
            I am a frontend programmer with extensive experience in freelance projects, mastering React.js and TypeScript to enhance code quality. My expertise in Tailwind CSS, Material UI, and API
            integration ensures responsive and efficient user interfaces, while additional skills in Node.js, Vue.js, as well as Java and Python in other programming languages, make me valuable in
            every project.
          </p>
        </div>

        <div className="mt-10 flex justify-center md:justify-start">
          <a
            href="#contact"
            className="rounded-md border-2 border-cyan-600 bg-cyan-600 px-5 py-3 text-sm font-semibold text-dark transition-all duration-300 hover:bg-transparent hover:text-cyan-500 md:text-base"
          >
            Contact Me
          </a>
        </div>
      </section>

      <HomeAbout devTools={devTools} />

      <section id="projects" className="my-40 ml-20 bg-blue-300 pt-24">
        <p className="">Project</p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio maxime, iste qui hic perferendis beatae nisi accusantium eaque natus molestiae repellendus autem ipsam non necessitatibus
        reiciendis facilis. Quidem reiciendis iure beatae cupiditate? At suscipit libero iste in quo corrupti, facere quasi nobis cupiditate quas aut. Perferendis saepe quidem architecto eveniet
        laboriosam quam porro nam animi consequuntur dolore autem, molestiae veritatis modi unde rerum inventore explicabo eligendi tempora impedit exercitationem eos rem sunt facilis. Animi
        doloremque et praesentium asperiores natus, voluptas recusandae, harum porro perspiciatis quam minima. Molestiae expedita ipsam tenetur. Deleniti necessitatibus enim adipisci quae veniam optio
        unde numquam inventore odio, quam cumque accusantium ut tempora quidem debitis? Quos fugit nam aperiam doloremque tenetur repellendus cumque suscipit consequuntur? Dignissimos ab distinctio
        quo provident. Eius molestiae unde nulla quia maxime ad quam ullam pariatur iure, cum aperiam aut sed voluptates suscipit. Hic expedita voluptatem vero aliquid, magnam libero saepe officia
        reiciendis voluptas corporis, molestias tenetur modi eveniet quod ut dolorum atque tempora doloremque harum, deleniti repellat temporibus eius iure! Ab adipisci nisi numquam labore voluptatum
        quas. Tempore nesciunt odio debitis placeat impedit, sed id neque earum modi distinctio perferendis quidem porro quaerat officiis nemo quae aperiam accusamus commodi, temporibus quasi.
        Aliquid?
      </section>

      <HomeExperience experiences={experiences} />

      <HomeContact />
    </section>
  );
};

export default HomeView;
