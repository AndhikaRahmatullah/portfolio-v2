import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { Icon } from '@iconify-icon/react';
// hooks
import { useResponsive } from '/src/hooks/use-responsive';

// ----------------------------------------------------------------------

interface Data {
  title: string;
  path: string;
}

interface Social {
  name: string;
  icon: string;
  url: string;
}

interface NavDesktopProps {
  data: Data[];
  socials: Social[];
}

// ----------------------------------------------------------------------

const NavDesktop: React.FC<NavDesktopProps> = ({ data, socials }: NavDesktopProps) => {
  const [currentPathId, setCurrentPathId] = useState<string>('');

  const [yOffset, setYOffset] = useState<number>(0);

  const { lgUp } = useResponsive();

  const aboutSection = document.getElementById('about') as HTMLElement;

  const projectsSection = document.getElementById('projects') as HTMLElement;

  const experienceSection = document.getElementById('experience') as HTMLElement;

  const contactSection = document.getElementById('contact') as HTMLElement;

  // ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setYOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    const offsetSections: number[] = [aboutSection?.offsetTop, projectsSection?.offsetTop, experienceSection?.offsetTop, contactSection?.offsetTop];

    if (yOffset >= offsetSections[0] && yOffset < offsetSections[1] && yOffset < offsetSections[2] && yOffset < offsetSections[3]) {
      setCurrentPathId('about');
    } else if (yOffset > offsetSections[0] && yOffset >= offsetSections[1] && yOffset < offsetSections[2] && yOffset < offsetSections[3]) {
      setCurrentPathId('projects');
    } else if (yOffset > offsetSections[0] && yOffset > offsetSections[1] && yOffset >= offsetSections[2] && yOffset < offsetSections[3]) {
      setCurrentPathId('exp.');
    } else if (yOffset > offsetSections[0] && yOffset > offsetSections[1] && yOffset > offsetSections[2] && yOffset >= offsetSections[3]) {
      setCurrentPathId('contact');
    } else {
      setCurrentPathId('');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setYOffset, yOffset, aboutSection?.offsetTop, projectsSection?.offsetTop, experienceSection?.offsetTop, contactSection?.offsetTop]);

  return (
    <>
      {/* SIDE NAVIGATION */}
      {lgUp && (
        <nav className="fixed -top-10 left-8 z-[999] w-full origin-left rotate-90 bg-[#080808]">
          <div className="ml-5 flex w-fit flex-row">
            <div className="mr-5">
              <p style={{ textShadow: '0px 0px 8px rgba(8, 145, 178)' }} className="font-poppins -rotate-90 cursor-default px-4 py-5 text-3xl font-black text-cyan-500">
                A
              </p>
            </div>

            {data?.map((d, index) => (
              <div key={index} className="mt-6">
                <a
                  onClick={() => setCurrentPathId(d.path)}
                  href={d.path}
                  className={twMerge(
                    'border-t-2 border-t-transparent px-4 py-5 text-xl font-light text-light/30 transition-all duration-300 hover:border-t-cyan-600 hover:bg-neutral-800',
                    currentPathId === d.title.toLowerCase() && 'border-t-cyan-600 bg-neutral-800 text-light'
                  )}
                >
                  {d.title}
                </a>
              </div>
            ))}
          </div>
        </nav>
      )}

      {/* TOP NAVIGATION */}
      <nav className={!yOffset ? 'fixed left-0 top-0 z-[998] w-full bg-transparent transition-all duration-300' : 'fixed left-0 top-0 z-[998] w-full backdrop-blur-md transition-all duration-300'}>
        <div className="flex w-full flex-row items-center justify-between px-5 md:px-10">
          <div className="flex flex-row gap-5 py-2 lg:pl-16">
            {socials?.map((social, index) => (
              <div key={index} className="py-5">
                <a href={social.url} target="_blank" rel="noreferrer" className="flex items-center justify-center text-light/30 transition-all duration-300 hover:text-cyan-500">
                  <Icon icon={social.icon} width={lgUp ? 28 : 24} />
                </a>
              </div>
            ))}
          </div>

          <div className="">
            <button className="border-b-2 border-cyan-600 px-5 py-3 text-sm font-semibold text-cyan-500 transition-all duration-300 hover:bg-cyan-600 hover:text-dark md:rounded-md md:border-2 lg:text-base">
              My Resume
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavDesktop;
