import { motion, type Variants } from "motion/react"
import type { ReactNode } from "react"

export const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.22 } },
}

export const item: Variants = {
  hidden: { opacity: 0, y: 34, scale: 0.9, rotate: -2 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 170, damping: 17 },
  },
}

export type Tone = "coral" | "orange" | "sun" | "pink" | "white" | "ink" | "peach"

const tones: Record<Tone, string> = {
  coral: "bg-coral text-white",
  orange: "bg-tangerine text-ink",
  sun: "bg-sun text-ink",
  pink: "bg-hotpink text-white",
  white: "bg-white text-ink ring-2 ring-ink/10",
  ink: "bg-ink text-cream",
  peach: "bg-peach text-ink",
}

export function Grid({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="grid grid-cols-1 gap-3 lg:h-full lg:grid-cols-12 lg:grid-rows-6 lg:gap-3.5"
    >
      {children}
    </motion.div>
  )
}

export function Tile({
  tone = "white",
  className = "",
  children,
  hover = true,
}: {
  tone?: Tone
  className?: string
  children?: ReactNode
  hover?: boolean
}) {
  return (
    <motion.div
      variants={item}
      whileHover={hover ? { y: -5, rotate: -0.5, transition: { duration: 0.2 } } : undefined}
      className={`relative flex min-h-[8rem] flex-col gap-2 overflow-hidden rounded-[1.75rem] p-5 transition-colors duration-500 lg:min-h-0 lg:p-[clamp(1rem,2.4vh,1.6rem)] ${tones[tone]} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`t-kicker opacity-80 ${className}`}>{children}</span>
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      className={className}
      aria-hidden
    >
      <path
        d="M50 0 L61 35 L97 25 L72 52 L97 78 L61 68 L50 100 L39 68 L3 78 L28 52 L3 25 L39 35Z"
        fill="currentColor"
      />
    </motion.svg>
  )
}

export function Marquee({ text, className = "", duration = 26 }: { text: string; className?: string; duration?: number }) {
  const row = Array.from({ length: 8 })
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
      >
        {[...row, ...row].map((_, i) => (
          <span key={i} className="inline-flex items-center pr-8">
            {text}
            <Star className="ml-8 h-5 w-5" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function Phone({ fid, className = "" }: { fid: 0 | 1 | 2; className?: string }) {
  const pick = (a: string, b: string, c: string) => [a, b, c][fid]
  const shell = pick(
    "border-2 border-dashed border-ink/50 bg-transparent",
    "border-2 border-ink/40 bg-white",
    "border-[3px] border-ink bg-white shadow-[5px_5px_0_#2a0e1c]",
  )
  const line = pick("border border-dashed border-ink/40", "bg-ink/15", "bg-ink/80")
  return (
    <div
      className={`flex aspect-[9/16] flex-col gap-2 rounded-[1.4rem] p-2.5 transition-all duration-500 ${shell} ${className}`}
    >
      <div
        className={`h-[9%] rounded-md transition-all duration-500 ${pick("border border-dashed border-ink/50", "bg-ink/25", "bg-coral")}`}
      />
      <div
        className={`h-[32%] rounded-lg transition-all duration-500 ${pick("border border-dashed border-ink/50", "bg-ink/15", "bg-gradient-to-br from-sun to-tangerine")}`}
      />
      <div className={`h-2 w-3/4 rounded-full ${line}`} />
      <div className={`h-2 w-1/2 rounded-full ${line}`} />
      <div className="mt-auto flex gap-2">
        <div
          className={`h-7 flex-1 rounded-lg transition-all duration-500 ${pick("border border-dashed border-ink/50", "bg-ink/25", "bg-hotpink")}`}
        />
        <div
          className={`h-7 flex-1 rounded-lg transition-all duration-500 ${pick("border border-dashed border-ink/50", "bg-ink/15", "bg-sun")}`}
        />
      </div>
    </div>
  )
}
