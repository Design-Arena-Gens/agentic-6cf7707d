const highlights = [
  {
    title: "Biometric Privacy Guard",
    description:
      "Adaptive face ID masking keeps identities safe until access is verified.",
    tag: "Neon Pink",
    accent: "border-[#EFA9B6]/60 bg-[#EFA9B6]/10 text-[#EFA9B6]",
  },
  {
    title: "Real-Time AI Enhancements",
    description:
      "Scene detection, dynamic range repair, and stylized overviews delivered in under 300ms.",
    tag: "Cyan Pulse",
    accent: "border-[#4AF2EA]/60 bg-[#4AF2EA]/10 text-[#4AF2EA]",
  },
  {
    title: "Team-Ready Workflows",
    description:
      "Share curated albums, annotate frames, and approve edits with role-based controls.",
    tag: "Prism Ops",
    accent: "border-[#F3E68F]/60 bg-[#F3E68F]/10 text-[#F3E68F]",
  },
];

const pipeline = [
  {
    title: "Secure Ingestion",
    description:
      "Lossless uploads with automatic encryption and zero-knowledge keys per cohort.",
    detail: "Latency: 42ms avg",
  },
  {
    title: "Lightfield Analysis",
    description:
      "Neural radiance fields and semantic segmentation rebuild depth, mood, and subjects.",
    detail: "Frames processed: 3.2K/min",
  },
  {
    title: "Signal Sync",
    description:
      "Insights synced to your creative tools with diff-based merge approvals.",
    detail: "Integrations: Figma, Notion, Slack",
  },
];

const testimonials = [
  {
    quote:
      "Prism gives our creative squad a live nervous system for imagery. The noir interface keeps focus while AI does the heavy lift.",
    author: "Rhea Lawson",
    role: "Head of Design Systems, Nebula Studio",
  },
  {
    quote:
      "Face ID masking is instant. We deliver preview decks to clients in minutes without compliance headaches.",
    author: "Malik Ortega",
    role: "Director of Photography, Lumen Collective",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0e0e0e] text-white">
      <div className="grid-overlay" />
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-20 pt-10 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#F3E68F]">
              Prism
            </span>
            <div className="hidden h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent md:block" />
          </div>
          <nav className="hidden items-center gap-8 text-sm text-[#A1A1AA] sm:flex">
            <a className="transition hover:text-white" href="#hero">
              Platform
            </a>
            <a className="transition hover:text-white" href="#pipeline">
              Workflow
            </a>
            <a className="transition hover:text-white" href="#features">
              Capabilities
            </a>
            <a className="transition hover:text-white" href="#cta">
              Request Access
            </a>
          </nav>
          <a
            href="#cta"
            className="rounded-full bg-[#F3E68F] px-5 py-3 text-sm font-medium text-black shadow-[0_0_30px_rgba(243,230,143,0.35)] transition hover:shadow-[0_0_45px_rgba(243,230,143,0.45)]"
          >
            Get Early Access
          </a>
        </header>

        <section
          id="hero"
          className="relative flex flex-1 flex-col items-center justify-center text-center"
        >
          <div className="absolute -top-40 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#4AF2EA]/20 blur-3xl" />
          <div className="absolute top-24 left-12 h-40 w-40 rounded-full bg-[#EFA9B6]/10 blur-3xl" />
          <div className="absolute top-48 right-10 h-44 w-44 rounded-full bg-[#F3E68F]/10 blur-3xl" />

          <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs uppercase tracking-[0.4em] text-[#A1A1AA]">
            SIGNAL // CLARITY
            <span className="inline-flex h-2 w-2 rounded-full bg-[#4AF2EA]" />
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Intelligent photo sharing built for{" "}
            <span className="text-[#F3E68F]">tech-noir creators</span>.
          </h1>

          <p className="mt-5 max-w-2xl text-base text-[#A1A1AA] sm:text-lg">
            Prism captures light, encrypts identity, and overlays AI insights in
            real time. Share visuals that feel cinematic while staying secure,
            collaborative, and fast enough for the future of creative ops.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              className="flex items-center gap-3 rounded-full bg-[#F3E68F] px-8 py-3 text-sm font-semibold text-black transition hover:shadow-[0_0_35px_rgba(243,230,143,0.45)]"
              href="#cta"
            >
              Start The Brief
              <span className="inline-flex h-2 w-2 rounded-full bg-black" />
            </a>
            <a
              className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm text-white transition hover:border-white/30 hover:bg-white/10"
              href="https://agentic-6cf7707d.vercel.app/demo"
            >
              Watch The Demo
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4AF2EA]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4AF2EA]" />
              </span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-10 text-left text-sm text-[#A1A1AA] sm:gap-16">
            <div>
              <p className="text-3xl font-semibold text-white">3.2M+</p>
              <p>Frames processed each day</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">98%</p>
              <p>Accuracy on biometric masking</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">12</p>
              <p>Enterprise studio deployments</p>
            </div>
          </div>

          <div className="mt-16 w-full max-w-4xl">
            <div className="glass relative overflow-hidden rounded-[32px] border border-white/10 px-6 py-8 sm:px-10 sm:py-12">
              <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-[#4AF2EA]/30 blur-3xl" />
              <div className="absolute -bottom-16 right-12 h-40 w-40 rounded-full bg-[#EFA9B6]/20 blur-3xl" />
              <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="flex flex-col justify-between gap-6">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#A1A1AA]">
                      Live Feed
                    </p>
                    <p className="mt-3 text-lg font-medium text-white">
                      “Philadelphia Evening // Neon Alley”
                    </p>
                    <p className="mt-2 text-sm text-[#A1A1AA]">
                      Up-res, identity shield, and exposure leveling active.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl border border-[#EFA9B6]/40 bg-[#EFA9B6]/5 px-5 py-4 text-left">
                      <p className="text-xs uppercase tracking-[0.25em] text-[#EFA9B6]">
                        Face ID
                      </p>
                      <p className="mt-2 text-sm text-white">
                        5 subjects masked — reveal pending approval.
                      </p>
                    </div>
                    <div className="rounded-3xl border border-[#4AF2EA]/40 bg-[#4AF2EA]/5 px-5 py-4 text-left">
                      <p className="text-xs uppercase tracking-[0.25em] text-[#4AF2EA]">
                        Processing
                      </p>
                      <p className="mt-2 text-sm text-white">
                        92% clarity // 18 layers // 0.21s per diff.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-left">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#F3E68F]/40 bg-[#F3E68F]/20 text-sm font-semibold text-[#F3E68F]">
                      Syn
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white">
                        Synced to Prism Orbit
                      </p>
                      <p className="text-xs uppercase tracking-[0.25em] text-[#A1A1AA]">
                        Link shared with 12 collaborators
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,15,15,0.4),_rgba(14,14,14,0.95))]" />
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(160deg,_rgba(12,12,12,0.6),_rgba(10,10,10,0.9))]">
                    <div className="absolute inset-0">
                      <div className="absolute inset-x-6 top-10 flex flex-col gap-3 text-left text-xs text-white/80">
                        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2">
                          <span className="uppercase tracking-[0.3em] text-[#A1A1AA]">
                            Prism AI
                          </span>
                          <span className="flex items-center gap-2 text-[#4AF2EA]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#4AF2EA]" />
                            Active
                          </span>
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-black/30 p-4">
                          <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.25em] text-[#A1A1AA]">
                            <span>Depth Map</span>
                            <span>92% Confidence</span>
                          </div>
                          <div className="mt-4 h-32 rounded-2xl bg-[conic-gradient(from_45deg,_rgba(243,230,143,0.2),_rgba(74,242,234,0.15),_rgba(239,169,182,0.25))]" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0">
                      <div className="absolute inset-12 rounded-[20px] border border-[#EFA9B6]/70" />
                      <div className="absolute inset-x-16 bottom-12 flex justify-between text-[0.65rem] uppercase tracking-[0.3em] text-[#A1A1AA]">
                        <span>Subject 03</span>
                        <span>Mask Locked</span>
                      </div>
                      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[0.65rem] uppercase tracking-[0.25em] text-[#F3E68F]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F3E68F]" />
                        Sync Ready
                      </div>
                    </div>
                    <div className="absolute inset-0 opacity-60">
                      <div className="absolute inset-x-12 bottom-20 h-40 rounded-full bg-[radial-gradient(circle,_rgba(74,242,234,0.35),_transparent_65%)] blur-3xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="mt-28 grid gap-8 md:grid-cols-3 md:gap-6"
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              className="glass group flex flex-col justify-between rounded-[28px] border border-white/10 px-6 py-8 transition hover:border-white/30 hover:bg-white/10"
            >
              <div>
                <span
                  className={`inline-flex items-center rounded-full border px-4 py-1 text-[0.65rem] uppercase tracking-[0.3em] ${item.accent}`}
                >
                  {item.tag}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[#A1A1AA]">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[#F3E68F]/70">
                <span>01 · Active Layer</span>
                <span className="flex h-2 w-2 items-center justify-center">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#F3E68F]" />
                </span>
              </div>
            </div>
          ))}
        </section>

        <section
          id="pipeline"
          className="mt-28 grid gap-8 rounded-[36px] border border-white/10 bg-white/5 p-8 md:grid-cols-[0.6fr_1fr] md:p-12"
        >
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
              Workflow Signal
              <span className="h-2 w-2 rounded-full bg-[#4AF2EA]" />
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Orchestrate the entire journey from lens to launch.
            </h2>
            <p className="text-sm text-[#A1A1AA]">
              Prism translates raw exposure into intelligence. Every frame is
              analyzed, annotated, and synced with your stack—without leaking a
              single photon of data.
            </p>
            <div className="flex items-center gap-4 rounded-full border border-white/10 bg-black/40 px-5 py-3 text-xs uppercase tracking-[0.35em] text-[#F3E68F]">
              <span className="h-2 w-2 rounded-full bg-[#F3E68F]" />
              Latency Budget: &lt; 280ms
            </div>
          </div>

          <div className="space-y-6">
            {pipeline.map((stage, index) => (
              <div
                key={stage.title}
                className="glass relative overflow-hidden rounded-[28px] border border-white/10 px-6 py-6 transition hover:border-white/30 hover:bg-white/10"
              >
                <div className="absolute -top-16 right-10 h-24 w-24 rounded-full bg-[#4AF2EA]/10 blur-3xl" />
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#A1A1AA]">
                      {`${String(index + 1).padStart(2, "0")} // Stage`}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold">
                      {stage.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#A1A1AA]">
                      {stage.description}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[0.6rem] uppercase tracking-[0.35em] text-[#F3E68F]">
                    {stage.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-28 grid gap-6 rounded-[36px] border border-white/10 bg-black/30 p-8 md:grid-cols-2 md:p-10">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="flex h-full flex-col justify-between rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-black/40 to-black/60 p-8"
            >
              <p className="text-lg text-white">{item.quote}</p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-white">
                  {item.author}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section
          id="cta"
          className="mt-24 overflow-hidden rounded-[40px] border border-[#F3E68F]/30 bg-[#F3E68F]/10 p-10 text-center md:p-14"
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-8">
            <p className="inline-flex items-center gap-3 rounded-full border border-black/20 bg-black/30 px-5 py-2 text-xs uppercase tracking-[0.35em] text-black/70">
              Beam Request
              <span className="h-2 w-2 rounded-full bg-black/80" />
            </p>
            <h2 className="text-3xl font-semibold text-black sm:text-4xl">
              Ready to share light? Join the next creative wave with Prism.
            </h2>
            <p className="text-sm text-black/70">
              Enterprise-ready within 5 business days. Priority invites go to
              teams piloting AI-assisted photo ops, editorial pipelines, or
              biometric-sensitive workflows.
            </p>
            <form className="flex w-full flex-col gap-4 sm:flex-row">
              <input
                className="w-full flex-1 rounded-full border border-black/20 bg-white/80 px-6 py-3 text-sm text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/30"
                placeholder="Enter your work email"
                type="email"
              />
              <button
                className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-[#F3E68F] transition hover:bg-black/90"
                type="submit"
              >
                Request Invite
              </button>
            </form>
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">
              Limited Beta // Wave 03
            </p>
          </div>
        </section>
      </main>
      <footer className="relative border-t border-white/10 bg-[#0b0b0b]/80 px-6 py-10 text-xs text-[#A1A1AA] sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-[#F3E68F]">
              Prism
            </span>
            <span>Intelligent AI Photo Sharing</span>
          </div>
          <div className="flex items-center gap-6">
            <a className="transition hover:text-white" href="#pipeline">
              Pipeline
            </a>
            <a className="transition hover:text-white" href="#features">
              Capabilities
            </a>
            <a className="transition hover:text-white" href="#cta">
              Access
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
