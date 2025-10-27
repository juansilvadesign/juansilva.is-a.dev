import React from 'react'
import Stacks, { StackId } from './Stacks'
import { Link } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  stacks: StackId[]
  primaryLink?: { href: string; label?: string; icon?: string }
  secondaryLink?: { href: string; label?: string; icon?: string }
  onClick?: () => void
}

export default function ProjectCard({ 
  title, 
  description, 
  stacks,
  primaryLink,
  secondaryLink,
  onClick 
}: ProjectCardProps) {
  return (
    <div onClick={onClick} className="flex flex-col max-w-[550px] pt-[27px] gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-[#F7F7F7]">{title}</h2>
        <p className="text-[#CECFD2]">{description}</p>
      </div>

      <div className="flex flex-row w-full gap-[12px] h-auto flex-wrap">
        <Stacks stacks={stacks} />
      </div>

      <div className="flex flex-row w-full">
        {primaryLink && (
          <button>
            <a
              href={primaryLink.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row justify-center text-center w-[340px] gap-[6px] px-[18px] py-[12px] rounded-[8px] bg-[rgba(255,255,255,0.10)] border-2 border-[rgba(255,255,255,0.12)] text-[#F7F7F7] font-semibold hover:bg-[rgba(255,255,255,0.25)] transition-colors duration-300"
              aria-label="GitHub Repository"
            >
              {primaryLink.icon && <img src={primaryLink.icon} alt="Primary Link Icon" />}
              {primaryLink.label || 'Go to Project'}
            </a>
          </button>
        )}

        {secondaryLink && (
          <button className="w-full">
            <a
              href={secondaryLink.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row justify-center text-center w-full gap-[6px] px-[18px] py-[12px] rounded-[8px] bg-[rgba(255,255,255,0)] text-[#CECFD2] font-semibold border-2 border-[rgba(255,255,255,0)] hover:bg-[rgba(255,255,255,0.25)] hover:border-[rgba(255,255,255,0.25)] transition-colors duration-300"
              aria-label="Live Project"
            >
              {secondaryLink.label || 'Live Project'}
              {secondaryLink.icon && <img src={secondaryLink.icon} alt="Secondary Link Icon" />}
            </a>
          </button>
        )}
      </div>

    </div>
  )
}
