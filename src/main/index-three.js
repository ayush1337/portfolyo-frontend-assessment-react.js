import React, { useEffect } from 'react';
import AboutUs from '../components/AboutUs';
import Services from '../components/Service';
import CTABanner from '../components/CTABanner';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';
import HeroThree from '../components/HeroThree';
import NavbarLight from '../components/NavbarLight';
import Clients from '../components/Clients';

export default function IndexThree() {
  useEffect(() => {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.classList.add('light');
  }, []);
  return (
    <>
      <NavbarLight />
      <HeroThree />
      <AboutUs />
      <Services />
      <CTABanner />
      <Experience />
      <Projects />
      <Clients />
      <GetInTouch />
      <Footer />
    </>
  );
}
