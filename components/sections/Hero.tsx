"use client"

import { SOCIAL_LINKS } from "@/constants/links";

export default function Hero() {
  return (
    <section className="py-[174px]">
      
      <div className="flex flex-row mx-auto px-4 justify-center items-center gap-[104px]">

        <img src="https://i.ibb.co/4RQQ7qnw/hero.webp" alt="Hero" />

        <div className="flex flex-col max-w-[610px] pt-24 gap-12">
          <div className="flex flex-col px-4 gap-4">

            <h1 className="text-[#F7F7F7]">Juan Silva</h1>
            <p className="text-[#CECFD2]">
              Full-stack developer from RJ <span className="inline-flex w-[14px]"><img src="/assets/icons/BR.svg" alt="Brazil Flag" /></span><br />
              I design with intention, code with care, and iterate with users. I love turning complex ideas into interfaces that feel obvious, and then pushing the craft with animations and micro-details. 
            </p>

          </div>

          <div className="flex flex-row w-full gap-2 h-auto">

            <a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="group w-12 h-12 flex items-center justify-start"
              aria-label="LinkedIn Profile"
            >
              <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="ml-[10px] w-[28px] h-[28px] opacity-100 group-hover:opacity-0" />
              <img src="/assets/icons/linkedin-hover.svg" alt="LinkedIn" className="mr-[10px] w-[28px] h-[28px] opacity-0 group-hover:opacity-100 -translate-x-[28px]" />
            </a>

            <a
              href={SOCIAL_LINKS.X}
              target="_blank"
              rel="noreferrer"
              className="group w-12 h-12 flex items-center justify-start"
              aria-label="Twitter Profile"
            >
              <img src="/assets/icons/twitter.svg" alt="Twitter" className="ml-[10px] w-[28px] h-[28px] opacity-100 group-hover:opacity-0" />
              <img src="/assets/icons/twitter-hover.svg" alt="Twitter" className="mr-[10px] w-[28px] h-[28px] opacity-0 group-hover:opacity-100 -translate-x-[28px]" />
            </a>

            <a
              href={SOCIAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="group w-12 h-12 flex items-center justify-start"
              aria-label="Instagram Profile"
            >
              <img src="/assets/icons/instagram.svg" alt="Instagram" className="ml-[10px] w-[28px] h-[28px] opacity-100 group-hover:opacity-0" />
              <img src="/assets/icons/instagram-hover.svg" alt="Instagram" className="mr-[10px] w-[28px] h-[28px] opacity-0 group-hover:opacity-100 -translate-x-[28px]" />
            </a>

            <a
              href={SOCIAL_LINKS.THREADS}
              target="_blank"
              rel="noreferrer"
              className="group w-12 h-12 flex items-center justify-start"
              aria-label="Threads Profile"
            >
              <img src="/assets/icons/threads.svg" alt="Threads" className="ml-[10px] w-[28px] h-[28px] opacity-100 group-hover:opacity-0" />
              <img src="/assets/icons/threads-hover.svg" alt="Threads" className="mr-[10px] w-[28px] h-[28px] opacity-0 group-hover:opacity-100 -translate-x-[28px]" />
            </a>

            <a
              href={SOCIAL_LINKS.FIGMA}
              target="_blank"
              rel="noreferrer"
              className="group w-12 h-12 flex items-center justify-start"
              aria-label="Figma Profile"
            >
              <img src="/assets/icons/figma-outlined.svg" alt="Figma" className="ml-[10px] w-[28px] h-[28px] opacity-100 group-hover:opacity-0" />
              <img src="/assets/icons/figma-outlined-hover.svg" alt="Figma" className="mr-[10px] w-[28px] h-[28px] opacity-0 group-hover:opacity-100 -translate-x-[28px]" />
            </a>

            <a
              href={SOCIAL_LINKS.DRIBBBLE}
              target="_blank"
              rel="noreferrer"
              className="group w-12 h-12 flex items-center justify-start"
              aria-label="Dribbble Profile"
            >
              <img src="/assets/icons/dribbble.svg" alt="Dribbble" className="ml-[10px] w-[28px] h-[28px] opacity-100 group-hover:opacity-0" />
              <img src="/assets/icons/dribbble-hover.svg" alt="Dribbble" className="mr-[10px] w-[28px] h-[28px] opacity-0 group-hover:opacity-100 -translate-x-[28px]" />
            </a>

            <a
              href={SOCIAL_LINKS.GITHUB}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-row items-center justify-start p-[2px] rounded-full w-12 h-12 hover:w-auto transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <div className="inline-flex w-[28px] h-[28px] ml-[10px] group-hover:w-auto group-hover:bg-[#0C0E12] border border-[#94979C] rounded-full px-[4px] group-hover:pr-[8px] py-[4px] gap-[6px] items-center transition-all duration-300">
                <p className="w-[14px] text-[14px] leading-[1.25rem] text-center" style={{fontFamily: "Inter, sans-serif"}}>🏝️</p>
                <p className="text-[14px] text-[#CECFD2] font-medium leading-[1.25rem] hidden group-hover:block">Living my dream while building it!</p>
              </div>
            </a>
          
          </div>
        </div>
      </div>
    </section>
  );
}