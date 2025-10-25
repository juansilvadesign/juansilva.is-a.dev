'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  // Hide navbar on landing quiz page
  if (pathname === '/quiz') return null;

  return (
    <nav className="fixed top-0 left-0 w-full px-[72px] py-6 bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-transparent transition-all duration-300 hover:from-[rgba(255,255,255,0.06)] hover:to-transparent z-50 border-transparent hover:border-[rgba(255,255,255,0.12)] border-b-[2px] hover:border-b-[2px]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo/Home link */}
          <Link href="/" className="w-[168px] group relative">
            {/* Dramatic lens flare 
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-[-25px] left-[-40px] w-[240px] h-[90px] bg-[#625DF5] blur-[45px] mix-blend-color-dodge" />
            </div>
            */}

            {/* Logo */}
            <img 
              src="/assets/logo/logo-full.svg" 
              alt="Logo" 
              className="w-auto h-8 relative z-10 opacity-100 group-hover:opacity-80" 
            />

            {/* Dramatic shadow 
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <div className="absolute top-[8px] left-[-15px] w-[200px] h-[45px] bg-black blur-[20px] mix-blend-multiply" />
            </div>
            */}
          </Link>

          {/* Navigation links */}
          <div className="flex items-center gap-2 text-[#CECFD2] text-[18px] leading-[32px]">
            <Link 
              href="/"
              className="p-4 group relative flex flex-col hover:text-[#F7F7F7] transition-colors duration-300"
            >
              Home
              <div className="relative h-[2px] w-full">
                <div className="w-full h-full rounded-full bg-transparent group-hover:bg-[#F7F7F7] group-hover:animate-navprogress" />
              </div>
            </Link>
            <Link 
              href="/#projects"
              className="p-4 group relative flex flex-col hover:text-[#F7F7F7] transition-colors duration-300"
            >
              Projects
              <div className="relative h-[2px] w-full">
                <div className="w-full h-full rounded-full bg-transparent group-hover:bg-[#F7F7F7] group-hover:animate-navprogress" />
              </div>
            </Link>
            <Link 
              href="/#contact"
              className="p-4 group relative flex flex-col hover:text-[#F7F7F7] transition-colors duration-300"
            >
              Contact
              <div className="relative h-[2px] w-full">
                <div className="w-full h-full rounded-full bg-transparent group-hover:bg-[#F7F7F7] group-hover:animate-navprogress" />
              </div>
            </Link>
          </div>

          <div className="flex flex-col w-[168px] gap-[12px]">
            <div className="flex flex-row w-full gap-[12px]">
              
              <img src="#" alt="Profile" className="w-[38px] h-[38px] block hover:hidden" />
              <img src="#" alt="Profile" className="w-[38px] h-[38px] hidden hover:block" />

              <div className="group flex flex-row w-full">

                <div className="flex flex-col">
                  <p className="text-[#CECFD2] leading-[1.5rem]">
                    Juan Silva
                  </p>
                  <p className="text-[#94979C] text-[12px] leading-[0.875rem]">
                    @juansilvadesign
                  </p>
                </div>

                <img src="/assets/icons/chevron-right.svg" alt="Icon" className="w-6 h-6 block group-hover:hidden" />
                <img src="/assets/icons/chevron-right-hover.svg" alt="Icon" className="w-6 h-6 hidden group-hover:block" />

              </div>
            </div>

            <div className="flex flex-row w-full h-auto gap-[12px] justify-center items-center">

              <a href="#" className="w-12 h-12 flex items-center justify-center">
                <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
              </a>
              
              <a href="#" className="w-12 h-12 flex items-center justify-center">
                <img src="/assets/icons/twitter.svg" alt="Twitter" className="w-4 h-4" />
              </a>
              
              <a href="#" className="w-12 h-12 flex items-center justify-center">
                <img src="/assets/icons/instagram.svg" alt="Instagram" className="w-4 h-4" />
              </a>
              
              <a href="#" className="w-12 h-12 flex items-center justify-center">
                <img src="/assets/icons/threads.svg" alt="Threads" className="w-4 h-4" />
              </a>

              <a href="#" className="w-12 h-12 flex items-center justify-center">
                <img src="/assets/icons/figma-outlined.svg" alt="Figma" className="w-4 h-4" />
              </a>

              <a href="#" className="w-12 h-12 flex items-center justify-center">
                <img src="/assets/icons/dribbble.svg" alt="Dribbble" className="w-4 h-4" />
              </a>

            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;