

export const STACK_STYLES = {
  typescript: {
    bg: "bg-[#102A56]",
    border: "bg-[#065986]",
    text: "text-[#84CAFF]",
    icon: "/assets/icons/typescript.svg",
    name: "TypeScript"
  },
  javascript: {
    bg: "bg-[#542C0D]",
    border: "bg-[#854A0E]",
    text: "text-[#FDE272]",
    icon: "/assets/icons/javascript.svg",
    name: "JavaScript"
  },
  tailwind: {
    bg: "bg-[linear-gradient(90deg,#062C41_0%,#052E1C_100%)]",
    border: "bg-[linear-gradient(90deg,#065986_0%,#095C37_100%)]",
    text: "text-[#73E2A3]",
    icon: "/assets/icons/tailwind.svg",
    name: "Tailwind"
  },
  figma: {
    bg: "bg-[#13161B]",
    border: "bg-[#373A41]",
    text: "text-[#CECFD2]",
    icon: "/assets/icons/figma.svg",
    name: "Figma"
  },
  python: {
    bg: "bg-[linear-gradient(90deg,#102A56_0%,#542C0D_100%)]",
    border: "bg-[linear-gradient(90deg,#1849A9_0%,#854A0E_100%)]",
    text: "text-[#FDE272]",
    icon: "/assets/icons/python.svg",
    name: "Python"
  },
  opensource: {
    bg: "bg-[#052E1C]",
    border: "bg-[#095C37]",
    text: "text-[#73E2A3]",
    icon: "/assets/icons/open-source.svg",
    name: "Open Source"
  }
}

export type StackId = keyof typeof STACK_STYLES;

interface StackProps {
  id: StackId;
}

export function Stack({ id }: StackProps) {
  const style = STACK_STYLES[id];
  
  return (
    <button className={`${style.border} p-[1px] rounded-full`}>
      <div className={`shrink-0 flex flex-row pl-[10px] pr-[12px] py-[4px] ${style.bg} rounded-full ${style.text} gap-[4px]`}>
        <img src={style.icon} alt={style.name} />
        <span className="text-[14px]">{style.name}</span>
      </div>
    </button>
  );
}

export default function Stacks({ stacks }: { stacks: StackId[] }) {
  return (
    <div className="flex flex-row w-full gap-[12px] h-auto flex-wrap">
      {stacks.map((stackId) => (
        <Stack key={stackId} id={stackId} />
      ))}
    </div>
  );
}
