'use client';

import { LEGAL_LINKS, SOCIAL_LINKS, WHATSAPP_LINKS } from '@/constants/links';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-[#0F1217]">
      <div className="flex max-w-screen-[1920px] mx-auto gap-6 px-6 md:px-12 lg:px-20 2xl:px-[252px]">
        <div className="flex flex-col w-full items-center justify-between">
          <div className="flex flex-col lg:flex-row w-full pt-12 pb-6 gap-6 lg:gap-12 lg:gap-0 justify-between">

            <div className="flex flex-col w-full lg:max-w-[330px] items-center lg:items-start">
              <Link
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-row w-full gap-[12px] justify-center lg:justify-start items-center"
                aria-label="LinkedIn Profile"
              >

                <div className="inline-flex align-center w-auto max-w-[56px] h-[56px]">
                  <img src="https://i.ibb.co/ZpM5sQ5c/profile.webp" alt="Profile" className="object-cover transition-opacity duration-200 group-hover:opacity-0" />
                  <img src="https://i.ibb.co/273HS4fD/profile-hover.webp" alt="Profile" className="-translate-x-14 object-cover opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </div>

                <div className="flex flex-row justify-center items-center">

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

              {/* Social icons */}
              <div className="flex flex-row w-full h-auto justify-center lg:justify-start items-center px-[2.5px]">

                <a href={SOCIAL_LINKS.LINKEDIN} className="w-[28px] h-12 flex items-center justify-center">
                  <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
                </a>

                <a href={SOCIAL_LINKS.X} className="w-[28px] h-12 flex items-center justify-center">
                  <img src="/assets/icons/twitter.svg" alt="Twitter" className="w-4 h-4" />
                </a>

                <a href={SOCIAL_LINKS.INSTAGRAM} className="w-[28px] h-12 flex items-center justify-center">
                  <img src="/assets/icons/instagram.svg" alt="Instagram" className="w-4 h-4" />
                </a>

                <a href={SOCIAL_LINKS.THREADS} className="w-[28px] h-12 flex items-center justify-center">
                  <img src="/assets/icons/threads.svg" alt="Threads" className="w-4 h-4" />
                </a>

                <a href={SOCIAL_LINKS.FIGMA} className="w-[28px] h-12 flex items-center justify-center">
                  <img src="/assets/icons/figma-outlined.svg" alt="Figma" className="w-4 h-4" />
                </a>

                <a href={SOCIAL_LINKS.DRIBBBLE} className="w-[28px] h-12 flex items-center justify-center">
                  <img src="/assets/icons/dribbble.svg" alt="Dribbble" className="w-4 h-4" />
                </a>

              </div>

              <p className="text-[#94979C] text-sm text-center lg:text-left">
                Typeset in Spectral, Lora, Inter and Roboto.<br />
                Developed with Next.js from Rio de Janeiro, Brazil.
              </p>

            </div>

            <div className="flex flex-row gap-4 md:gap-0 lg:gap-12 justify-center text-center lg:text-left flex-wrap">

              <div className="w-full lg:w-auto max-w-[154px] md:max-w-[224px] lg:max-w-[1920px]">
                <h6 className="px-4 py-[12px] font-medium">
                  Navigation
                </h6>
                <Link href="/" className="block px-4 py-[12px] text-[#CECFD2] hover:text-[#F7F7F7] transition-colors duration-300">
                  Home
                </Link>
                <Link href="/projects" className="block px-4 py-[12px] text-[#CECFD2] hover:text-[#F7F7F7] transition-colors duration-300">
                  Projects
                </Link>
                <Link href="/contact" className="block px-4 py-[12px] text-[#CECFD2] hover:text-[#F7F7F7] transition-colors duration-300">
                  Contact
                </Link>
              </div>

              <div className="w-full lg:w-auto max-w-[154px] md:max-w-[224px] lg:max-w-[1920px]">
                <h6 className="px-4 py-[12px] font-medium">
                  Legal
                </h6>
                <Link href={LEGAL_LINKS.PRIVACY_POLICY} className="block px-4 py-[12px] text-[#CECFD2] hover:text-[#F7F7F7] transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href={LEGAL_LINKS.TERMS_OF_USE} className="block px-4 py-[12px] text-[#CECFD2] hover:text-[#F7F7F7] transition-colors duration-300">
                  Terms of Use
                </Link>
                <Link href={LEGAL_LINKS.COOKIES_POLICY} className="block px-4 py-[12px] text-[#CECFD2] hover:text-[#F7F7F7] transition-colors duration-300">
                  Cookies Policy
                </Link>
              </div>

              <div className="w-full lg:w-auto md:max-w-[224px] lg:max-w-[1920px]">
                <h6 className="px-4 py-[12px] font-medium">
                  Contact
                </h6>
                <Link href={SOCIAL_LINKS.MAIL} className="block px-4 py-[12px] text-[#CECFD2] hover:text-[#F7F7F7] transition-colors duration-300">
                  contact@juansilva.is-a.dev
                </Link>
                <Link href={WHATSAPP_LINKS.FOOTER} className="block px-4 py-[12px] text-[#CECFD2] hover:text-[#F7F7F7] transition-colors duration-300">
                  +55 21 96644-2965
                </Link>
              </div>

            </div>

          </div>

          <div className="w-full h-[1px] bg-[#373A41] rounded-full" />

          <div className="w-full flex flex-col-reverse md:flex-row justify-center md:justify-between items-center pt-6 pb-0 md:py-6 gap-4 md:gap-0">

            <p className="text-sm">
              © {new Date().getFullYear()} Juan Silva. All rights reserved.
            </p>

            <div className="relative z-10 flex flex-row justify-center items-center pl-4 pr-2 py-[6px] gap-1 rounded-full bg-[#0C0E12] border border-[#22262F] text-[#CECFD2] text-sm">
              2025
              <img src="/assets/icons/chevron-selector-vertical.svg" alt="Selector" className="inline-block w-4 h-4" />
            </div>

            <div className="flex flex-row justify-center items-center px-[10px] py-1 gap-[6px] rounded-[8px] bg-[#0C0E12] border border-[#373A41] text-[#CECFD2] text-sm font-medium">
              <img src="/assets/icons/dot.svg" alt="Available" className="inline-block w-2 h-2" />
              Available for partnerships
            </div>

          </div>

          {/* Site Versions */}
          <div className="relative flex w-full justify-center pb-6">
            <img src="/assets/vectors/site-versions-bg.svg" alt="Site Versions Background" className="absolute hidden sm:flex w-full h-auto object-cover -top-[82px] z-0" />
            <img src="/assets/vectors/site-versions-bg-mobile.svg" alt="Site Versions Background" className="absolute flex sm:hidden w-full h-auto object-cover -top-[140px] z-0" />
          </div>


          {/* Site Versions Backup
          <div className="relative flex w-full justify-center pb-6">
            <img src="/assets/vectors/2025.svg" alt="2025" className="absolute w-full h-[204px] object-cover -top-20 z-0 opacity-50 md:opacity-100" />
            <img src="/assets/vectors/site-versions-bg.svg" alt="Site Versions Background" className="absolute w-full h-auto object-cover -top-20 z-0" />

            <div className="relative z-10 flex flex-row justify-center items-center pl-4 pr-2 py-[6px] gap-1 rounded-full bg-[#0C0E12] border border-[#22262F] text-[#CECFD2] text-sm">
              2025
              <img src="/assets/icons/chevron-selector-vertical.svg" alt="Selector" className="inline-block w-4 h-4" />
            </div>
          </div>
          */}

        </div>
      </div>
    </footer>
  );
};

export default Footer;