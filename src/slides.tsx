import { motion } from "motion/react"
import { useEffect, useState } from "react"
import {
  ArrowDown,
  ArrowRight,
  Brain,
  Check,
  ClipboardCheck,
  CreditCard,
  Home,
  Lightbulb,
  LayoutTemplate,
  ListChecks,
  MessageCircle,
  MousePointerClick,
  PackageCheck,
  RefreshCw,
  Rocket,
  Search,
  ShoppingCart,
  Smartphone,
  Sparkles,
  UserSearch,
  Utensils,
} from "lucide-react"
import { Grid, Kicker, Marquee, Phone, Star, Tile } from "./ui"

/* ---------- 01 Title ---------- */
function S1() {
  const names = ["Soubhagya", "Ravivarma", "Yuvraj", "Impana P"]
  const tones = ["sun", "pink", "orange", "coral"] as const
  return (
    <Grid>
      <Tile tone="coral" className="justify-between lg:col-span-8 lg:row-span-4">
        <Kicker>Advanced UI/UX Design · Group Seminar</Kicker>
        <div className="relative z-10">
          <h1 className="t-hero">
            Prototyping <span className="text-sun">in</span> UI/UX Design
          </h1>
          <p className="t-h2 mt-4 max-w-[28ch]">From Ideas to Interactive Experiences</p>
        </div>
        <Star className="absolute -right-12 -top-12 w-56 text-sun" />
        <Star className="absolute -bottom-10 right-24 w-28 text-hotpink" />
      </Tile>
      <Tile tone="sun" className="justify-between lg:col-span-4 lg:row-span-2">
        <Kicker>The big idea</Kicker>
        <div className="flex items-center gap-3">
          <span className="t-h1">Idea</span>
          <motion.span animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
            <ArrowRight className="h-9 w-9" strokeWidth={3} />
          </motion.span>
        </div>
        <span className="t-h1 italic">Interactive</span>
      </Tile>
      <Tile tone="pink" className="items-center justify-center lg:col-span-4 lg:row-span-2">
        <div className="relative h-full min-h-28 aspect-[9/14] lg:h-[88%]">
          <Phone fid={2} className="h-full w-full !aspect-auto" />
          <motion.span
            className="absolute left-[55%] top-[62%] h-9 w-9 rounded-full border-4 border-white"
            animate={{ scale: [0.6, 1.6], opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
          />
        </div>
      </Tile>
      <Tile tone="ink" className="justify-between lg:col-span-4 lg:row-span-2">
        <Kicker>Presenters</Kicker>
        <span className="t-h1">
          4 <span className="text-tangerine">voices</span>
        </span>
      </Tile>
      {names.map((n, i) => (
        <Tile key={n} tone={tones[i]} className="justify-between lg:col-span-2 lg:row-span-2">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-lg font-extrabold text-cream">
            {n[0]}
          </span>
          <span className="t-body font-bold">{n}</span>
        </Tile>
      ))}
    </Grid>
  )
}

/* ---------- 02 What is prototyping ---------- */
function Orbit() {
  const nodes = [
    { label: "Idea", Icon: Lightbulb, pos: "left-1/2 top-0 -translate-x-1/2", tone: "bg-sun" },
    { label: "Prototype", Icon: Smartphone, pos: "right-0 top-1/2 -translate-y-1/2", tone: "bg-coral text-white" },
    { label: "Test", Icon: ClipboardCheck, pos: "bottom-0 left-1/2 -translate-x-1/2", tone: "bg-tangerine" },
    { label: "Feedback", Icon: MessageCircle, pos: "left-0 top-1/2 -translate-y-1/2", tone: "bg-hotpink text-white" },
  ]
  return (
    <div className="relative mx-auto aspect-square h-64 lg:h-full">
      <motion.div
        className="absolute inset-[14%] rounded-full border-[3px] border-dashed border-ink/40"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <span className="t-h2 text-center">
          Build.
          <br />
          Learn.
        </span>
      </div>
      {nodes.map(({ label, Icon, pos, tone }, i) => (
        <motion.div
          key={label}
          className={`absolute flex flex-col items-center gap-1 ${pos}`}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ repeat: Infinity, duration: 4, delay: i, times: [0, 0.12, 0.25] }}
        >
          <span className={`grid h-[clamp(3rem,9vh,4.5rem)] w-[clamp(3rem,9vh,4.5rem)] place-items-center rounded-full border-[3px] border-ink ${tone}`}>
            <Icon className="h-1/2 w-1/2" />
          </span>
          <span className="t-kicker font-medium">{label}</span>
        </motion.div>
      ))}
    </div>
  )
}

function S2() {
  const chips = [
    ["01", "Validate ideas", "sun"],
    ["02", "Reveal usability issues", "orange"],
    ["03", "Align teams", "pink"],
  ] as const
  return (
    <Grid>
      <Tile tone="coral" className="justify-between lg:col-span-6 lg:row-span-2">
        <Kicker>Chapter 01</Kicker>
        <h2 className="t-h1">What is Prototyping?</h2>
        <p className="t-body max-w-[46ch]">
          A prototype is an interactive or visual representation used to test and communicate a design before development.
        </p>
      </Tile>
      <Tile className="lg:col-span-6 lg:row-span-4">
        <Kicker>The loop</Kicker>
        <div className="min-h-0 flex-1 py-2">
          <Orbit />
        </div>
      </Tile>
      {chips.map(([n, t, c]) => (
        <Tile key={n} tone={c} className="justify-between lg:col-span-2 lg:row-span-2">
          <Kicker>Why create prototypes? · {n}</Kicker>
          <span className="t-h2">{t}</span>
        </Tile>
      ))}
      <Tile tone="pink" className="justify-between lg:col-span-6 lg:row-span-2">
        <Kicker>Link to the final product</Kicker>
        <div className="flex items-center gap-2 t-h2">
          Concept <ArrowRight strokeWidth={3} /> Build
        </div>
        <p className="t-body">Bridges concept to implementation; reduces risk.</p>
      </Tile>
      <Tile tone="ink" className="justify-between lg:col-span-6 lg:row-span-2">
        <Kicker>Example</Kicker>
        <p className="t-body">
          Before building a <b className="text-sun">food delivery app</b>, designers prototype the ordering flow to test
          clarity and speed.
        </p>
      </Tile>
    </Grid>
  )
}

/* ---------- 03 Why it matters ---------- */
function S3() {
  const pts = [
    ["sun", "Identifies usability problems early", "lg:col-span-7 lg:row-span-2"],
    ["pink", "Saves development time and cost", "lg:col-span-4 lg:row-span-2"],
    ["orange", "Improves user experience", "lg:col-span-3 lg:row-span-2"],
    ["white", "Communicates ideas to developers & stakeholders", "lg:col-span-4 lg:row-span-2"],
    ["peach", "Enables testing and refinement of concepts", "lg:col-span-3 lg:row-span-2"],
  ] as const
  return (
    <Grid>
      <Tile tone="coral" className="justify-between lg:col-span-5 lg:row-span-4">
        <Kicker>Chapter 02</Kicker>
        <h2 className="t-hero">
          Why Prototyping <span className="text-sun">Matters</span>
        </h2>
        <Sparkles className="absolute right-5 top-5 h-10 w-10 text-sun" />
      </Tile>
      {pts.slice(0, 1).map(([t, s, c]) => (
        <Tile key={s} tone={t} className={`justify-between ${c}`}>
          <Kicker>01</Kicker>
          <span className="t-h1">{s}</span>
        </Tile>
      ))}
      {pts.slice(1, 3).map(([t, s, c], i) => (
        <Tile key={s} tone={t} className={`justify-between ${c}`}>
          <Kicker>0{i + 2}</Kicker>
          <span className="t-h2">{s}</span>
        </Tile>
      ))}
      <Tile tone="ink" className="justify-between lg:col-span-5 lg:row-span-2">
        <Kicker>Visual</Kicker>
        <div className="flex h-full min-h-20 items-end gap-2">
          {[30, 45, 40, 62, 75, 95].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-xl"
              style={{ background: ["#ffcb3d", "#ff9a1f", "#e8401c", "#e5246b", "#ffcb3d", "#ff9a1f"][i] }}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.7 + i * 0.12, type: "spring", stiffness: 120, damping: 14 }}
            />
          ))}
        </div>
        <p className="t-body">Design evolving through iterations driven by user feedback.</p>
      </Tile>
      {pts.slice(3).map(([t, s, c], i) => (
        <Tile key={s} tone={t} className={`justify-between ${c}`}>
          <Kicker>0{i + 4}</Kicker>
          <span className="t-h2">{s}</span>
        </Tile>
      ))}
    </Grid>
  )
}

/* ---------- 04 Types ---------- */
function Meter({ label, level, color }: { label: string; level: number; color: string }) {
  return (
    <div>
      <div className="mb-1 flex justify-between">
        <Kicker>{label}</Kicker>
        <Kicker>{["Minimal", "Basic", "Advanced"][level - 1]}</Kicker>
      </div>
      <div className="flex gap-1.5">
        {[1, 2, 3].map((n) => (
          <motion.div
            key={n}
            className={`h-3 flex-1 origin-left rounded-full ${n <= level ? color : "bg-ink/15"}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6 + n * 0.12, duration: 0.5 }}
          />
        ))}
      </div>
    </div>
  )
}

function S4() {
  const types = [
    { n: "Low-Fidelity", tone: "sun", a: "Rough sketches", d: 1, i: 1, p: "Explore structure", f: 0, pts: ["Paper sketches & whiteboard drafts", "Fast and cheap to throw away", "Great for early team feedback"] },
    { n: "Mid-Fidelity", tone: "orange", a: "Structured wireframes", d: 2, i: 2, p: "Layout & flow", f: 1, pts: ["Grayscale screens with real structure", "Clickable basic flows", "Tests navigation & layout"] },
    { n: "High-Fidelity", tone: "pink", a: "Realistic UI", d: 3, i: 3, p: "Usability testing & demos", f: 2, pts: ["Real colors, type & imagery", "Advanced, realistic interactions", "Feels like the finished product"] },
  ] as const
  return (
    <Grid>
      <Tile tone="coral" className="flex-row items-center justify-between lg:col-span-12 lg:row-span-1">
        <h2 className="t-h1">Types of Prototypes</h2>
        <Kicker className="hidden md:block">Chapter 03 · Fidelity ladder</Kicker>
      </Tile>
      {types.map((t) => (
        <Tile key={t.n} tone={t.tone} className="lg:col-span-4 lg:row-span-4">
          <div className="flex items-start justify-between">
            <h3 className="t-h1">{t.n}</h3>
            <Kicker>0{t.d}</Kicker>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center py-2 max-lg:py-4 [@media(max-height:760px)]:hidden">
            <Phone fid={t.f} className="h-full max-h-40 min-h-24" />
          </div>
          <p className="t-body">
            <b>Appearance:</b> {t.a}
          </p>
          <Meter label="Detail" level={t.d} color="bg-ink" />
          <Meter label="Interactivity" level={t.i} color="bg-ink" />
          <p className="t-body">
            <b>Purpose:</b> {t.p}
          </p>
          <ul className="mt-1 flex flex-col gap-1.5 border-t-2 border-current/20 pt-3">
            {t.pts.map((x) => (
              <li key={x} className="t-body flex gap-2">
                <Check className="mt-0.5 h-4 w-4 flex-none" strokeWidth={3} />
                {x}
              </li>
            ))}
          </ul>
        </Tile>
      ))}
      <Tile tone="ink" hover={false} className="justify-center lg:col-span-12 lg:row-span-1">
        <Marquee text="LOW → MID → HIGH · SKETCH IT · WIREFRAME IT · POLISH IT" duration={60} className="t-h2 text-sun" />
      </Tile>
    </Grid>
  )
}

/* ---------- 05 Lo vs Hi ---------- */
function S5() {
  const [mode, setMode] = useState<"lo" | "hi">("hi")
  const lo = ["Quick and inexpensive", "Sketches / wireframes", "Focus: layout & structure", "Easy to modify", "Early-stage ideation"]
  const hi = [
    "Realistic interface",
    "Colors, typography, images",
    "Interactive navigation",
    "Closely resembles final product",
    "Used for detailed usability testing",
  ]
  const List = ({ items, tone, title, m }: { items: string[]; tone: "peach" | "pink"; title: string; m: "lo" | "hi" }) => (
    <div
      onMouseEnter={() => setMode(m)}
      onClick={() => setMode(m)}
      className="contents"
    >
      <Tile tone={tone} className="cursor-pointer lg:col-span-4 lg:row-span-4">
        <h3 className="t-h1">{title}</h3>
        <ul className="mt-2 flex flex-col gap-2">
          {items.map((x) => (
            <li key={x} className="t-body flex gap-2">
              <Check className="mt-0.5 h-4 w-4 flex-none" strokeWidth={3} />
              {x}
            </li>
          ))}
        </ul>
      </Tile>
    </div>
  )
  return (
    <Grid>
      <Tile tone="coral" className="justify-between lg:col-span-8 lg:row-span-2">
        <Kicker>Chapter 04</Kicker>
        <h2 className="t-hero">
          Low-Fidelity <span className="text-sun">vs</span> High-Fidelity
        </h2>
      </Tile>
      <Tile tone={mode === "lo" ? "peach" : "ink"} className="items-center justify-between lg:col-span-4 lg:row-span-6">
        <div className="flex w-full rounded-full bg-white/90 p-1 text-ink">
          {(["lo", "hi"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`t-kicker flex-1 rounded-full px-3 py-2 font-medium transition-colors ${mode === m ? "bg-coral text-white" : ""}`}
            >
              {m === "lo" ? "Low-fi" : "High-fi"}
            </button>
          ))}
        </div>
        <div className="flex min-h-0 flex-1 items-center py-4">
          <Phone fid={mode === "lo" ? 0 : 2} className="h-full max-h-[26rem] min-h-48" />
        </div>
        <Kicker>Tap a card to morph the screen</Kicker>
      </Tile>
      {List({ items: lo, tone: "peach", title: "Low-Fidelity", m: "lo" })}
      {List({ items: hi, tone: "pink", title: "High-Fidelity", m: "hi" })}
    </Grid>
  )
}

/* ---------- 06 Process ---------- */
function S6() {
  const steps = [
    { n: "Understand", Icon: Brain, c: "bg-sun" },
    { n: "Research", Icon: UserSearch, c: "bg-tangerine" },
    { n: "Define", Icon: ListChecks, c: "bg-hotpink text-white" },
    { n: "Wireframe", Icon: LayoutTemplate, c: "bg-coral text-white" },
    { n: "Prototype", Icon: MousePointerClick, c: "bg-ink text-cream" },
  ]
  const [on, setOn] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setOn((v) => (v + 1) % steps.length), 1300)
    return () => clearInterval(t)
  }, [steps.length])
  return (
    <Grid>
      <Tile tone="coral" className="justify-between lg:col-span-7 lg:row-span-2">
        <Kicker>Chapter 05 · The process</Kicker>
        <h2 className="t-hero">
          Five steps, <span className="text-sun">one loop.</span>
        </h2>
      </Tile>
      <Tile tone="sun" className="justify-between lg:col-span-5 lg:row-span-2">
        <RefreshCw className="h-10 w-10 animate-[spin_6s_linear_infinite]" strokeWidth={2.5} />
        <p className="t-h2">Prototyping is iterative — repeat testing and refinement until goals are met.</p>
      </Tile>
      <Tile className="justify-center lg:col-span-12 lg:row-span-4">
        <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-2">
          {steps.map(({ n, Icon, c }, i) => (
            <div key={n} className="flex flex-col items-center gap-3 lg:contents">
              <div className="flex flex-col items-center gap-3 lg:flex-1">
                <motion.div
                  animate={{ scale: on === i ? 1.12 : 1, rotate: on === i ? -6 : 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className={`grid h-24 w-24 place-items-center rounded-full border-[4px] border-ink lg:h-[min(15vw,24vh)] lg:w-[min(15vw,24vh)] ${on === i ? c : "bg-white"}`}
                >
                  <Icon className="h-[40%] w-[40%]" strokeWidth={2} />
                </motion.div>
                <div className="text-center">
                  <Kicker>0{i + 1}</Kicker>
                  <div className="t-h2">{n}</div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <>
                  <ArrowDown className="h-6 w-6 text-coral lg:hidden" strokeWidth={3} />
                  <ArrowRight className="hidden h-8 w-8 flex-none -translate-y-6 text-coral lg:block" strokeWidth={3} />
                </>
              )}
            </div>
          ))}
        </div>
      </Tile>
    </Grid>
  )
}

/* ---------- 07 Tools ---------- */
function S7() {
  const tools = [
    ["Adobe XD", "Fast prototyping with voice, animation and design systems", "orange", "Xd"],
    ["Sketch", "Vector-first UI design, strong plugin ecosystem (Mac only)", "sun", "Sk"],
    ["Framer", "High-fidelity interactions and code-based components", "pink", "Fr"],
    ["ProtoPie", "Advanced micro-interactions without code for realistic prototypes", "peach", "Pp"],
  ] as const
  const pos = ["lg:col-span-3 lg:row-span-2", "lg:col-span-3 lg:row-span-2", "lg:col-span-3 lg:row-span-2", "lg:col-span-3 lg:row-span-2"]
  return (
    <Grid>
      <Tile tone="coral" className="justify-between lg:col-span-6 lg:row-span-4">
        <div className="flex items-center justify-between">
          <Kicker>Chapter 06 · Highlight</Kicker>
          <span className="rounded-full bg-sun px-3 py-1 t-kicker text-ink">Team favourite</span>
        </div>
        <div>
          <div className="mb-4 grid w-20 grid-cols-2 gap-1">
            {["rounded-l-full bg-sun", "rounded-r-full bg-white", "rounded-l-full bg-tangerine", "rounded-full bg-ink", "rounded-l-full bg-white"].map(
              (c, i) => (
                <motion.span
                  key={i}
                  className={`h-10 ${c}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                />
              ),
            )}
          </div>
          <h3 className="t-hero">Figma</h3>
          <p className="t-body mt-3 max-w-[34ch]">Collaborative design &amp; prototyping in the browser — real-time teamwork.</p>
        </div>
      </Tile>
      <Tile tone="white" className="justify-between lg:col-span-6 lg:row-span-2">
        <Kicker>Toolbox</Kicker>
        <h2 className="t-hero">
          Prototyping <span className="text-coral">Tools</span>
        </h2>
      </Tile>
      {tools.map(([n, d, tone, m], i) => (
        <Tile key={n} tone={tone} className={`justify-between ${pos[i]}`}>
          <div className="flex items-start justify-between">
            <span className="t-h1 opacity-30">{m}</span>
            {n === "Sketch" && <span className="rounded-full bg-ink px-2 py-0.5 t-kicker text-cream">Mac only</span>}
          </div>
          <div>
            <h3 className="t-h2">{n}</h3>
            <p className="t-body mt-1">{d}</p>
          </div>
        </Tile>
      ))}
      <Tile tone="ink" hover={false} className="justify-center lg:col-span-6 lg:row-span-2">
        <Marquee text="FIGMA — THE GO-TO COLLABORATIVE PLATFORM FOR TEAMS" duration={60} className="t-h2 text-tangerine" />
      </Tile>
    </Grid>
  )
}

/* ---------- 08 Food delivery ---------- */
function S8() {
  const flow = [
    [Home, "Home Screen", "sun"],
    [Search, "Search Restaurant", "orange"],
    [Utensils, "Select Food", "pink"],
    [ShoppingCart, "Add to Cart", "coral"],
    [CreditCard, "Checkout", "peach"],
    [PackageCheck, "Order Confirmation", "white"],
  ] as const
  const tests = [
    "Is navigation easy?",
    "Can users find food quickly?",
    "Is checkout clear?",
    "Are primary actions discoverable?",
    "Where do users get confused?",
  ]
  return (
    <Grid>
      <Tile tone="coral" className="justify-center lg:col-span-12 lg:row-span-1">
        <div className="flex items-center justify-between gap-4">
          <h2 className="t-h1">
            Real-Life Example: <span className="text-sun">Food Delivery App</span>
          </h2>
          <Utensils className="hidden h-10 w-10 md:block" />
        </div>
      </Tile>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-8 lg:row-span-5 lg:grid-cols-3 lg:grid-rows-2 lg:gap-3.5">
        {flow.map(([Icon, label, tone], i) => (
          <Tile key={label} tone={tone} className="justify-between">
            <div className="flex items-start justify-between">
              <Icon className="h-[clamp(1.8rem,5vh,2.8rem)] w-[clamp(1.8rem,5vh,2.8rem)]" strokeWidth={2} />
              <span className="t-h1 opacity-30">{i + 1}</span>
            </div>
            <span className="t-h2">{label}</span>
            {i < flow.length - 1 && (
              <ArrowRight className="absolute bottom-4 right-4 h-5 w-5 opacity-60" strokeWidth={3} />
            )}
          </Tile>
        ))}
      </div>
      <Tile tone="ink" className="justify-between lg:col-span-4 lg:row-span-5">
        <Kicker>Prototype tests</Kicker>
        <div className="relative min-h-40 flex-1 overflow-hidden rounded-2xl bg-coral lg:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1760888549280-4aef010720bd?w=900&h=700&fit=crop&auto=format"
            alt="Hand holding a smartphone showing a food ordering app"
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-2 left-2 rounded-full bg-sun px-3 py-1 t-kicker text-ink">
            Example · Zomato-style ordering
          </span>
        </div>
        <ul className="flex flex-col gap-2.5">
          {tests.map((q, i) => (
            <motion.li
              key={q}
              className="t-body flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.15 }}
            >
              <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-sun text-ink">
                <Check className="h-3.5 w-3.5" strokeWidth={4} />
              </span>
              {q}
            </motion.li>
          ))}
        </ul>
        <Star className="absolute -bottom-8 -right-8 w-28 text-hotpink" />
      </Tile>
    </Grid>
  )
}

/* ---------- 09 Testing ---------- */
function S9() {
  const steps = [
    ["sun", "Give prototype to users", "Use representative participants"],
    ["orange", "Ask task-based questions", "Observe behaviour, not opinions"],
    ["pink", "Collect feedback & identify issues", "Prioritise usability problems"],
    ["coral", "Modify design and retest", "Iterate until key metrics improve"],
  ] as const
  return (
    <Grid>
      <Tile tone="white" className="flex-row items-center justify-between lg:col-span-12 lg:row-span-1">
        <h2 className="t-h1">
          User Testing, Feedback <span className="text-coral">&amp; Iteration</span>
        </h2>
        <RefreshCw className="hidden h-9 w-9 animate-[spin_7s_linear_infinite] text-coral md:block" strokeWidth={2.5} />
      </Tile>
      {steps.map(([tone, t, s], i) => (
        <Tile key={t} tone={tone} className="justify-between lg:col-span-3 lg:row-span-4">
          <span className="font-display text-[clamp(4rem,min(10vw,17vh),9rem)] font-extrabold leading-none opacity-40">
            0{i + 1}
          </span>
          <div>
            <h3 className="t-h2">{t}</h3>
            <p className="t-body mt-2">{s}</p>
          </div>
        </Tile>
      ))}
      <Tile tone="ink" className="justify-center lg:col-span-12 lg:row-span-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 t-body">
          <Kicker className="text-sun">Example</Kicker>
          <span>Users couldn&apos;t find the Checkout button</span>
          <ArrowRight className="h-5 w-5 text-sun" strokeWidth={3} />
          <span>moved it to a fixed bottom bar</span>
          <ArrowRight className="h-5 w-5 text-sun" strokeWidth={3} />
          <b className="rounded-full bg-sun px-3 py-0.5 text-ink">success on retest</b>
        </div>
      </Tile>
    </Grid>
  )
}

/* ---------- 10 Takeaways ---------- */
function S10() {
  const k = [
    ["sun", "Prototyping turns ideas into testable experiences", "lg:col-span-4"],
    ["pink", "Detects problems before development", "lg:col-span-4"],
    ["orange", "Use different fidelity levels at different stages", "lg:col-span-4"],
    ["white", "User testing makes designs user-centred", "lg:col-span-4"],
    ["peach", "Iteration is the core of strong prototypes", "lg:col-span-4"],
  ] as const
  return (
    <Grid>
      <Tile tone="coral" className="justify-between lg:col-span-4 lg:row-span-2">
        <Kicker>Chapter 07</Kicker>
        <h2 className="t-h1">Key Takeaways</h2>
        <motion.div
          className="absolute right-4 top-4"
          animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2.6 }}
        >
          <Rocket className="h-14 w-14 text-sun" strokeWidth={2} />
        </motion.div>
      </Tile>
      {k.slice(0, 2).map(([t, s, c], i) => (
        <Tile key={s} tone={t} className={`justify-between ${c} lg:row-span-2`}>
          <Kicker>0{i + 1}</Kicker>
          <span className="t-h2">{s}</span>
        </Tile>
      ))}
      {k.slice(2).map(([t, s, c], i) => (
        <Tile key={s} tone={t} className={`justify-between ${c} lg:row-span-2`}>
          <Kicker>0{i + 3}</Kicker>
          <span className="t-h2">{s}</span>
        </Tile>
      ))}
      <Tile tone="ink" className="justify-between lg:col-span-8 lg:row-span-2">
        <Kicker className="text-sun">Final prompt</Kicker>
        <div className="t-hero flex flex-wrap gap-x-4">
          {["Design it.", "Test it.", "Improve it."].map((w, i) => (
            <motion.span
              key={w}
              className={["text-sun", "text-tangerine", "text-hotpink"][i]}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.35, type: "spring" }}
            >
              {w}
            </motion.span>
          ))}
        </div>
      </Tile>
      <Tile tone="sun" className="justify-between lg:col-span-4 lg:row-span-2">
        <Star className="absolute -right-6 -top-6 w-24 text-coral" />
        <Kicker>Thank you</Kicker>
        <span className="t-h1">Questions?</span>
      </Tile>
    </Grid>
  )
}

export const slides = [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10]
