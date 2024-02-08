import React from 'react';
import { Icon } from '@iconify-icon/react';

// ----------------------------------------------------------------------

const HomeContact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen w-full flex-col items-center justify-center px-10 pb-16 pt-32 lg:py-40 lg:pl-40 lg:pr-20">
      <div className="flex w-full justify-center">
        <p className="text-center font-poppins text-5xl font-black text-light transition-all duration-300 md:text-left md:text-6xl lg:text-8xl">
          Contact<span className="text-cyan-500">.</span>
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <p className="max-w-2xl text-center text-sm leading-relaxed md:text-base lg:text-lg">
          Shoot me an email if you want to connect! You can also find me on{' '}
          <a target="_blank" href="https://id.linkedin.com/in/andhika-rahmatullah-2039b0157" rel="noreferrer" className="text-cyan-500">
            Linkedin
          </a>{' '}
          or{' '}
          <a target="_blank" href="https://www.instagram.com/andhikarhmt_/" rel="noreferrer" className="text-cyan-500">
            Instagram
          </a>{' '}
          if that's more your speed.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="mailto:dikarahmatullah909@gmail.com"
          className="flex max-w-2xl flex-row items-center justify-center gap-2 text-center font-poppins text-base leading-relaxed transition-all duration-300 hover:text-cyan-500 md:text-lg lg:text-xl"
        >
          <Icon icon="ic:round-email" width={28} />
          dikarahmatullah909@gmail.com
        </a>
      </div>
    </section>
  );
};

export default HomeContact;
