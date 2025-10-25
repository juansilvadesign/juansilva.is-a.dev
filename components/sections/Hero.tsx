export default function Hero() {
  return (
    <section className="py-[174px]">
      
      <div className="flex flex-row mx-auto px-4 justify-center items-center gap-[104px]">

        <img src="/assets/logo/hero-placeholder.png" alt="Hero Image" />

        <div className="flex flex-col max-w-[610px] pt-24 gap-12">
          <div className="flex flex-col px-4 gap-4">

            <h1 className="text-[#F7F7F7]">Juan Silva</h1>
            <p className="text-[#CECFD2]">
              Full-stack dev from Rio 🇧🇷<br />
              I design with intention, code with care, and iterate with users. I love turning complex ideas into interfaces that feel obvious, and then pushing the craft with animations and micro-details. 
            </p>

          </div>

          <div className="flex flex-row w-full gap-2 h-auto">

            <a href="#" className="w-12 h-12 flex items-center justify-center">
              <img src="/assets/icons/figma-outlined.svg" alt="Figma" className="w-[28px] h-[28px]" />
            </a>
          
            <a href="#" className="w-12 h-12 flex items-center justify-center">
              <img src="/assets/icons/twitter.svg" alt="Twitter" className="w-[28px] h-[28px]" />
            </a>

            <a href="#" className="w-12 h-12 flex items-center justify-center">
              <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-[28px] h-[28px]" />
            </a>

            <a href="#" className="w-12 h-12 flex items-center justify-center">
              <img src="/assets/icons/dribbble.svg" alt="Dribbble" className="w-[28px] h-[28px]" />
            </a>

            <a href="#" className="group flex flex-row items-center justify-center p-[2px] rounded-full w-12 h-12 hover:w-auto">
              <div className="inline-flex w-[28px] h-[28px] group-hover:w-auto group-hover:bg-[#0C0E12] border border-[#94979C] rounded-full px-[4px] group-hover:pr-[8px] py-[4px] gap-[6px] items-center">
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