import React from 'react';
//
import { NavDesktop } from './nav';
import { configNavigation } from './config-navigation';

// ----------------------------------------------------------------------

const Header: React.FC = () => {
  const socials: { name: string; icon: string; url: string }[] = [
    { name: 'linkedin', icon: 'mdi:linkedin', url: 'https://id.linkedin.com/in/andhika-rahmatullah-2039b0157' },
    { name: 'github', icon: 'mdi:github', url: 'https://github.com/AndhikaRahmatullah' },
    { name: 'instagram', icon: 'mdi:instagram', url: 'https://www.instagram.com/andhikarhmt_/' },
  ];

  return (
    <header>
      <NavDesktop data={configNavigation} socials={socials} />
    </header>
  );
};

export default Header;
