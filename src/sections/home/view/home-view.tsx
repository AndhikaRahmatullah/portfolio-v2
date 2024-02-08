import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
// interfaces
import { ProjectInterface } from '/src/interfaces/project';
import { ExperienceInterface } from '/src/interfaces/experience';
//
import HomeAbout from '../home-about';
import HomeContact from '../home-contact';
import HomeProjects from '../home-projects';
import HomeExperience from '../home-experience';

// ----------------------------------------------------------------------

const HomeView: React.FC = () => {
  const [devTools, setDevTools] = useState<string[]>([]);

  const [experiences, setExperiences] = useState<ExperienceInterface[]>([]);

  const [projects, setProjects] = useState<ProjectInterface[]>([]);

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

  // DEV TOOLS, EXPERIENCES, PROJECTS
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

    const getProjects = () => {
      const result: ProjectInterface[] = [
        {
          id: 'dkjwbdakjkwad',
          name: 'GBK Istora Senayan',
          url: 'https://istora-andhikarahmatullah.vercel.app/',
          image: '/images/gbk.png',
          descriptions:
            'The application manages seat reservations for events held at the Istora Senayan Stadium. It also includes a back office for administrators to manage incoming orders from customers.',
          jobDesc: 'Building the overall user interface of the website, integrating APIs, and handling access for both administrators and users.',
          techs: ['Javascript', 'NextJS', 'MaterialUI', 'Laravel'],
        },
        {
          id: 'dkjwbdaddkjkwad',
          name: 'Kanaka Survey Indonesia',
          url: 'https://kansa.id/',
          image: '/images/kansa.png',
          descriptions: 'A marketing web application for survey tools, including a back office, company profile, and pages designed to resemble descriptions of the tools being sold to customers.',
          jobDesc: 'Building the overall user interface of the website and integrating APIs.',
          techs: ['Javascript', 'ViteJS', 'MaterialUI', 'Laravel'],
        },
        {
          id: 'ldawndlwlwinwd',
          name: 'Kean Signature',
          url: 'https://keansignature.com/',
          image: '/images/kean.png',
          descriptions: "An online store selling women's Muslim clothing for a fairly large store in the city of Bogor, buyers can place orders with or without an account.",
          jobDesc: 'Building the overall user interface of the website, integrating APIs, logic for orders without an account and local storage management, all of which must be encrypted.',
          techs: ['Typescript', 'ViteJS', 'TailwindCSS', 'Laravel'],
        },
        {
          id: 'dwbdawdnodwdddda',
          name: 'Admin Kean Signature',
          url: '',
          image: '/images/admin-kean.png',
          descriptions: 'Backoffice admin application for the Kean Signature website and Kean Signature cashier, handling all data from the smallest to the most complex tasks.',
          jobDesc: 'Creating the entire user interface, handling access to loadable pages between one user and another, automatic logout system, and several mathematical calculations.',
          techs: ['Javascript', 'ViteJS', 'MaterialUI', 'Laravel'],
        },
        {
          id: 'adjbwhbdabkjbkjb',
          name: 'Cashier Kean Signature',
          url: '',
          image: '/images/cashier-kean.png',
          descriptions:
            'A website-based cashier backoffice application for the Kean Signature store (offline), used in more than 4 branches. It includes several features such as inbound product management, returns, and order history from the respective branches.',
          jobDesc:
            'Creating the entire user interface, handling access to loadable pages between one user and another, differentiating the display for one branch from another branch, and performing various mathematical calculations.',
          techs: ['Javascript', 'ViteJS', 'MaterialUI', 'Laravel'],
        },
      ];

      setProjects(result);
    };

    getDevTools();
    getExperiences();
    getProjects();
  }, []);

  return (
    <section className="2xl:container dark:bg-dark">
      <section className="flex-col items-center justify-center px-10 pb-16 pt-32 lg:pb-28 lg:pl-40 lg:pr-20 lg:pt-40">
        <div className="">
          <p className="text-center font-poppins text-5xl font-black text-light transition-all duration-300 md:text-left md:text-6xl lg:text-8xl">
            Hello, I'm <br className="md:hidden" /> <span ref={el} className="text-cyan-500" />
          </p>
        </div>

        <div className="mt-4">
          <p className="text-center font-poppins text-xl text-light md:text-left md:text-2xl lg:text-4xl">
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

      <HomeProjects projects={projects} />

      <HomeExperience experiences={experiences} />

      <HomeContact />
    </section>
  );
};

export default HomeView;
