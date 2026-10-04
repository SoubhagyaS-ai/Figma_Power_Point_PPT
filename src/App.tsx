import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { slides } from "./slides"

export default function App() {
  const [i, setI] = useState(0)
  const go = useCallback((d: number) => setI((v) => Math.min(slides.length - 1, Math.max(0, v + d))), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault()
        go(1)
      }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) go(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [go])

  const Slide = slides[i]

  return (
    <div className="relative flex h-[100dvh] flex-col overflow-hidden bg-cream">
      <div className="dots pointer-events-none absolute inset-0" />
      <motion.div
        className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-tangerine/30 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 14 }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-hotpink/20 blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 16 }}
      />

      <header className="relative z-10 flex items-center justify-between gap-4 px-3 py-3 lg:px-4">
        <nav className="hidden items-center gap-1.5 md:flex" aria-label="Slides">
          {slides.map((_, n) => (
            <button
              key={n}
              onClick={() => setI(n)}
              aria-label={`Go to slide ${n + 1}`}
              className="group py-2"
            >
              <motion.span
                className="block h-2.5 rounded-full"
                animate={{ width: n === i ? 36 : 10, backgroundColor: n <= i ? "#e8401c" : "#2a0e1c26" }}
              />
            </button>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <span className="t-kicker mr-1">
            {String(i + 1).padStart(2, "0")} / {slides.length}
          </span>
          <button
            onClick={() => go(-1)}
            disabled={i === 0}
            aria-label="Previous slide"
            className="grid h-10 w-10 place-items-center rounded-full bg-white ring-2 ring-ink/10 transition hover:bg-sun disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            disabled={i === slides.length - 1}
            aria-label="Next slide"
            className="grid h-10 w-10 place-items-center rounded-full bg-coral text-white transition hover:bg-hotpink disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main className="relative z-10 min-h-0 flex-1 overflow-y-auto px-3 pb-3 lg:overflow-hidden lg:px-4 lg:pb-4">
        <AnimatePresence mode="wait">
          <Slide key={i} />
        </AnimatePresence>
      </main>
    </div>
  )
}
