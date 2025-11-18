"use client"

import { useEffect, useState, useRef } from 'react'
import ProjectCard from '../ui/ProjectCard'
import { StackId } from '../ui/Stacks'

type ProjectTheme = 'space' | 'loom' | 'qrcode'

const PROJECT_THEMES = {
  space: {
    className: "bg-gradient-to-r from-[#674DE2] to-[#9E25EF]"
  },
  loom: {
    className: "bg-[#625DF5]"
  },
  qrcode: {
    className: "bg-gradient-to-r from-[#35C1E9] to-[#4E3191]"
  },
}

export default function Projects() {
  const projects: {
    theme: ProjectTheme;
    title: string
    description: string
    stacks: StackId[]
  primaryLink?: { href: string; label?: string; icon?: string }
  secondaryLink?: { href: string; label?: string; icon?: string }
    thumb: string
    preview?: { type: 'image' | 'video'; src: string; alt?: string }
  }[] = [
    {
      title: 'SpaceApps Website',
      description:
        'Each stage is like a rocket component being carefully assembled for takeoff. From initial understanding to final delivery, we follow a structured process in clear and well-defined phases.',
      theme: 'space',
      stacks: ['typescript', 'javascript', 'tailwind', 'figma'],
      primaryLink: { href: 'https://github.com/ZokuWebDesign/spaceapps', label: 'Go to Project', icon: '/assets/icons/github.svg' },
      secondaryLink: { href: 'https://spaceapps.com.br/', label: 'Live Project', icon: '/assets/icons/link-external-02.svg' },
      thumb: '/assets/icons/space-thumb.svg',
      preview: { type: 'image', src: '/assets/logo/video-placeholder.png', alt: 'Explorer Preview' },
    },
    {
      title: 'Loom Downloader',
      description: 'Simple Node.js command-line tool to download videos from loom.com. It retrieves the video download link based on the video ID in the URL and saves the video with a specified filename.',
      theme: 'loom',
      stacks: ['javascript', 'opensource'],
      primaryLink: { href: 'https://github.com/juansilvadesign/loom-downloader', label: 'Go to Project', icon: '/assets/icons/github.svg' },
      secondaryLink: { href: 'https://loom.juansilva.is-a.dev/', label: 'Live Project', icon: '/assets/icons/link-external-02.svg' },
      thumb: '/assets/icons/loom-thumb.svg',
      preview: { type: 'image', src: '/assets/logo/video-placeholder.png', alt: 'Landing Preview' },
    },
    {
      title: 'QR Code Generator',
      description: 'A powerful, interactive QR code generator with custom colors and multiple content types. Has custom colors and border, multiple content types, error correction, terminal preview.',
      theme: 'qrcode',
      stacks: ['python', 'opensource'],
      primaryLink: { href: 'https://github.com/juansilvadesign/custom-qr-code-generator', label: 'Go to Project', icon: '/assets/icons/github.svg' },
      // No secondaryLink for this project
      thumb: 'https://i.ibb.co/vx177bm3/qrcode-thumb.webp',
      preview: { type: 'image', src: '/assets/logo/video-placeholder.png', alt: 'Studio Preview' },
    },
  ]
  const [selected, setSelected] = useState(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    timerRef.current = window.setInterval(() => setSelected((s) => (s + 1) % projects.length), 4500)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects.length])

  const selectProject = (i: number) => {
    setSelected(i)
    // reset timer so manual selection holds the carousel
    if (timerRef.current) window.clearInterval(timerRef.current)
    timerRef.current = window.setInterval(() => setSelected((s) => (s + 1) % projects.length), 4500)
  }

  return (
    <section className="pt-[224px] pl-[170px] pr-[72px]">
      <div className="flex flex-row mx-auto justify-center items-start gap-[104px]">

        <div className="flex flex-col max-w-[550px] pt-[27px] gap-12">
          {/* Show only the selected ProjectCard */}
          <ProjectCard
            key={projects[selected].title}
            title={projects[selected].title}
            description={projects[selected].description}
            stacks={projects[selected].stacks}
            primaryLink={projects[selected].primaryLink}
            secondaryLink={projects[selected].secondaryLink}
            onClick={() => selectProject(selected)}
          />

          {/* Left: three small image cards (thumbnails). Visible together. Clicking a thumb selects project and resets timer. */}
          <div className="flex flex-row w-full">
            {projects.map((p, idx) => (
              <button 
                key={p.title} 
                onClick={() => selectProject(idx)} 
                className="w-full group"
                onMouseEnter={() => {
                  // Pause timer on hover
                  if (timerRef.current) window.clearInterval(timerRef.current)
                }}
                onMouseLeave={() => {
                  // Resume timer when mouse leaves
                  if (timerRef.current) window.clearInterval(timerRef.current)
                  timerRef.current = window.setInterval(() => setSelected((s) => (s + 1) % projects.length), 4500)
                }}
              >
                <div className="flex justify-center items-center p-6 rounded-lg">
                  <img src={p.thumb} alt={`${p.title} logo`} />
                </div>
                <div className="relative h-[2px] mt-2 bg-[rgba(255,255,255,0.1)]">
                  <div 
                    className={`
                      absolute top-0 left-0 h-full w-0 opacity-0
                      ${PROJECT_THEMES[p.theme].className}
                      ${idx === selected ? 'animate-progress group-hover:animation-play-state-paused' : ''}
                    `}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right-side shared preview (large) — updates with the selected project */}
        <div className="">
          {projects[selected]?.preview?.type === 'image' ? (
            <img src={projects[selected].preview!.src} alt={projects[selected].preview!.alt ?? projects[selected].title} />
          ) : projects[selected]?.preview?.type === 'video' ? (
            <video src={projects[selected].preview!.src} controls className="max-w-full" />
          ) : (
            <img src="/assets/logo/video-placeholder.png" alt="Preview placeholder" />
          )}
        </div>

      </div>
    </section>
  )
}