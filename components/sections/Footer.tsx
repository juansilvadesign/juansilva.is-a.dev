'use client';

import { LEGAL_LINKS, SOCIAL_LINKS, WHATSAPP_LINKS } from '@/constants/links';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-[#0F1217]">
      <div className="flex max-w-screen-[1920px] mx-auto gap-6 px-[252px]">
        <div className="flex items-center justify-between">
          <div className="flex pt-12 pb-6">

            <div className="flex flex-col w-[210px]">
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

              {/* Social icons */}
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

              <p className="mt-6 text-[#94979C] text-sm">
                Typeset in Spectral, Lora, Inter and Roboto.<br />
                Developed with Next.js from Rio de Janeiro, Brazil.
              </p>

            </div>

            <div className="flex flex-row gap-12">

              <div>
                <p className="px-4 py-[12px] text-[#F7F7F7] font-medium">
                  Navigation
                </p>
                <Link href="/" className="px-4 py-[12px] text-[#CECFD2] hover:text-[#F7F7F7] transition-colors duration-300">
                  Home
                </Link>
                <Link href="/projects" className="px-4 py-[12px] text-[#CECFD2] hover:text-[#F7F7F7] transition-colors duration-300">
                  Projects
                </Link>
                <Link href="/contact" className="px-4 py-[12px] text-[#CECFD2] hover:text-[#F7F7F7] transition-colors duration-300">
                  Contact
                </Link>
              </div>

              <div>
                <Link href={LEGAL_LINKS.PRIVACY_POLICY} className="px-4 py-[12px] text-[#CECFD2] hover:text-[#F7F7F7] transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href={LEGAL_LINKS.TERMS_OF_USE} className="px-4 py-[12px] text-[#CECFD2] hover:text-[#F7F7F7] transition-colors duration-300">
                  Terms of Use
                </Link>
                <Link href={LEGAL_LINKS.COOKIES_POLICY} className="px-4 py-[12px] text-[#CECFD2] hover:text-[#F7F7F7] transition-colors duration-300">
                  Cookies Policy
                </Link>
              </div>

              <div>
                <p className="px-4 py-[12px] text-[#F7F7F7] font-medium">
                  Contact
                </p>
                <Link href={SOCIAL_LINKS.MAIL} className="px-4 py-[12px] text-[#CECFD2] hover:text-[#F7F7F7] transition-colors duration-300">
                  contact@juansilva.is-a.dev
                </Link>
                <Link href={WHATSAPP_LINKS.FOOTER} className="px-4 py-[12px] text-[#CECFD2] hover:text-[#F7F7F7] transition-colors duration-300">
                  +55 21 96644-2965
                </Link>
              </div>

            </div>

          </div>

          <div className="w-full h-[1px] bg-[#373A41] rounded-full"/>

          <div>
            <p className="text-[#CECFD2] text-sm">
              © {new Date().getFullYear()} Juan Silva. All rights reserved.
            </p>

            <div className="flex flex-row justify-center items-center px-[10px] py-1 rounded-2 bg-[#0C0E12] border border-[#373A41] text-[#CECFD2] text-sm font-medium">
              <img src="/assets/icons/dot.svg" alt="Available" className="inline-block w-2 h-2" />
              Available for partnerships
            </div>
          </div>

          {/* Site Versions */}
          <div>
            <img src="/assets/icons/2025.svg" alt="2025" className="absolute w-full h-[204px] object-cover" />

            <div className="flex flex-row justify-center items-center pl-4 pr-2 py-[6px] gap-1 rounded-full bg-[#0C0E12] border border-[#22262F] text-[#CECFD2] text-sm">
              2025
              <img src="/assets/icons/selector.svg" alt="Selector" className="inline-block w-4 h-4" />
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;