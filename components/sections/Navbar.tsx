'use client';

import { SOCIAL_LINKS } from '@/constants/links';
import Link from 'next/link';
import { useLanding } from '@/app/context/LandingContext';

const Navbar = () => {
  const { isLandingVisible } = useLanding();

  return (
    <nav
      className="fixed top-0 left-0 w-full px-4 md:px-12 lg:px-14 2xl:px-[72px] py-2 lg:py-4 2xl:py-6 bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-transparent transition-all duration-300 lg:hover:from-[rgba(255,255,255,0.06)] lg:hover:to-transparent z-50 border-transparent lg:hover:border-[rgba(255,255,255,0.12)] border-b-[2px] lg:hover:border-b-[2px]"
      style={{
        visibility: isLandingVisible ? 'hidden' : 'visible',
        opacity: isLandingVisible ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out'
      }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo/Home link */}
          <Link href="/" className="w-[210px] group relative">
            {/* Dramatic lens flare 
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-[-25px] left-[-40px] w-[240px] h-[90px] bg-[#625DF5] blur-[45px] mix-blend-color-dodge" />
            </div>
            */}

            {/* Logo */}
            <img
              src="/assets/logo/logo-full.svg"
              alt="Logo"
              className="w-auto h-6 md:h-8 relative z-10 opacity-100 group-hover:opacity-80"
            />

            {/* Dramatic shadow 
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <div className="absolute top-[8px] left-[-15px] w-[200px] h-[45px] bg-black blur-[20px] mix-blend-multiply" />
            </div>
            */}
          </Link>

          {/* Navigation links */}
          <div className="flex items-center gap-2 text-[#CECFD2] text-sm md:text-[18px] leading-[32px]">
            <Link
              href="/"
              className="p-2 lg:p-4 group relative flex flex-col hover:text-[#F7F7F7] transition-colors duration-300"
            >
              Home
              <div className="relative h-[2px] w-full">
                <div className="w-full h-full rounded-full bg-transparent group-hover:bg-[#F7F7F7] group-hover:animate-navprogress" />
              </div>
            </Link>
            <Link
              href="/projects"
              className="p-2 lg:p-4 group relative flex flex-col hover:text-[#F7F7F7] transition-colors duration-300"
            >
              Projects
              <div className="relative h-[2px] w-full">
                <div className="w-full h-full rounded-full bg-transparent group-hover:bg-[#F7F7F7] group-hover:animate-navprogress" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="p-2 lg:p-4 group relative flex flex-col hover:text-[#F7F7F7] transition-colors duration-300"
            >
              Contact
              <div className="relative h-[2px] w-full">
                <div className="w-full h-full rounded-full bg-transparent group-hover:bg-[#F7F7F7] group-hover:animate-navprogress" />
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex flex-col w-[210px]">
            <Link
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-row w-full gap-[12px] justify-center items-center"
              aria-label="LinkedIn Profile"
            >

              <div className="inline-flex align-center w-auto max-w-[56px] h-[56px]">
                <img src="https://i.ibb.co/ZpM5sQ5c/profile.webp" alt="Profile" className="object-cover transition-opacity duration-200 group-hover:opacity-0" />
                <img src="https://i.ibb.co/273HS4fD/profile-hover.webp" alt="Profile" className="-translate-x-14 object-cover opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </div>

              <div className="flex flex-row gap-2 justify-center items-center">

                <div className="flex flex-col">
                  <h6 className="text-center text-[#CECFD2] leading-[1.5rem]">
                    Juan Silva
                  </h6>
                  <p className="text-[#94979C] text-[12px] leading-[0.875rem]">
                    @juansilvadesign
                  </p>
                </div>

                <div className="flex w-6 h-6">
                  <img src="/assets/icons/chevron-right.svg" alt="Icon" className="object-cover transition-opacity duration-200 group-hover:opacity-0" />
                  <img src="/assets/icons/chevron-right-hover.svg" alt="Icon" className="-translate-x-6 object-cover opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </div>

              </div>
            </Link>

            {/*/ Social icons 
            <div className="flex flex-row w-full h-auto justify-center items-center">

              <a href={SOCIAL_LINKS.LINKEDIN} className="w-12 h-12 flex items-center justify-center">
                <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
              </a>

              <a href={SOCIAL_LINKS.X} className="w-12 h-12 flex items-center justify-center">
                <img src="/assets/icons/twitter.svg" alt="Twitter" className="w-4 h-4" />
              </a>

              <a href={SOCIAL_LINKS.INSTAGRAM} className="w-12 h-12 flex items-center justify-center">
                <img src="/assets/icons/instagram.svg" alt="Instagram" className="w-4 h-4" />
              </a>
              
              <a href={SOCIAL_LINKS.THREADS} className="w-12 h-12 flex items-center justify-center">
                <img src="/assets/icons/threads.svg" alt="Threads" className="w-4 h-4" />
              </a>

              <a href={SOCIAL_LINKS.FIGMA} className="w-12 h-12 flex items-center justify-center">
                <img src="/assets/icons/figma-outlined.svg" alt="Figma" className="w-4 h-4" />
              </a>

              <a href={SOCIAL_LINKS.DRIBBBLE} className="w-12 h-12 flex items-center justify-center">
                <img src="/assets/icons/dribbble.svg" alt="Dribbble" className="w-4 h-4" />
              </a>

            </div>
            */}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;