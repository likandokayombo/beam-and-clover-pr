import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const teamMembers = [
    { name: "Tunde Adebayo", role: "Founder & CEO", initials: "TA" },
    { name: "Chioma Okonkwo", role: "Head of Engineering", initials: "CO" },
    { name: "David Okafor", role: "Product Lead", initials: "DO" },
    { name: "Sarah Smith", role: "Operations Director", initials: "SS" },
    { name: "James Doe", role: "Senior Architect", initials: "JD" },
    { name: "Anita Rose", role: "Design Director", initials: "AR" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar />

      {/* <section className="py-32 border-b border-foreground/10 relative overflow-hidden">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8">
              Engineered for <span className="text-[#F48244]">Deep Work</span>.
            </h2>
            <p className="text-xl text-foreground/60">
              We provide the infrastructure. You provide the intellect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">

            <div className="md:col-span-2 bg-background border border-foreground/10 p-8 md:p-12 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                 <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H9v-2h6v2zm5-3H4V6h16v9z"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Hardware Spec</h3>
              <p className="text-foreground/60 mb-8 max-w-md">
                Every engineer receives a top-tier localized setup. No approval chains, just performance.
              </p>
              <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                <div className="bg-foreground/5 p-4 rounded border border-foreground/5">
                  <div className="text-foreground/40 text-xs mb-1">MODEL</div>
                  <div>Latest MacBook Pro</div>
                </div>
                <div className="bg-foreground/5 p-4 rounded border border-foreground/5">
                  <div className="text-foreground/40 text-xs mb-1">DISPLAY</div>
                  <div>Dual 4K Monitors</div>
                </div>
                <div className="bg-foreground/5 p-4 rounded border border-foreground/5">
                  <div className="text-foreground/40 text-xs mb-1">AUDIO</div>
                  <div>Noise Cancelling</div>
                </div>
                <div className="bg-foreground/5 p-4 rounded border border-foreground/5">
                  <div className="text-foreground/40 text-xs mb-1">STIPEND</div>
                  <div>$2k Home Office</div>
                </div>
              </div>
            </div>


            <div className="bg-foreground text-background p-8 md:p-12 rounded-2xl relative overflow-hidden flex flex-col justify-between group">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div>
                <div className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center mb-6 text-2xl">
                  ∞
                </div>
                <h3 className="text-2xl font-bold mb-2">Unlimited Growth</h3>
                <p className="text-background/70 text-sm leading-relaxed">
                  Books, courses, conferences. If it upgrades your neural network, it's on the company card.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-background/20 font-mono text-xs flex justify-between">
                 <span>ANNUAL_BUDGET</span>
                 <span>UNCAPPED</span>
              </div>
            </div>


            <div className="bg-background border border-foreground/10 p-8 md:p-12 rounded-2xl relative overflow-hidden group md:col-span-1">
               <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.03)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] bg-[position:-100%_0] group-hover:bg-[position:200%_0] transition-[background-position] duration-[1500ms] bg-no-repeat" />
               <h3 className="text-2xl font-bold mb-2">Global Sync</h3>
               <p className="text-foreground/60 mb-6 text-sm">
                 Quarterly offsites in global hubs. We code, strategy, and connect in high-bandwidth reality.
               </p>
               <div className="flex flex-wrap gap-2">
                 {['Lisbon', 'Tokyo', 'New York', 'Berlin'].map(city => (
                   <span key={city} className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-mono">{city}</span>
                 ))}
               </div>
            </div>


             <div className="md:col-span-2 bg-background border border-foreground/10 p-8 md:p-12 rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
               <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Async by Default</h3>
                  <p className="text-foreground/60">
                    Zero "hey u there?" messages. We document everything. You own your calendar. Deep work is the priority, not instant response.
                  </p>
               </div>
               <div className="flex-shrink-0 grid grid-cols-7 gap-1">
                 {[...Array(28)].map((_, i) => (
                   <div key={i} className={`w-4 h-4 rounded-sm ${Math.random() > 0.7 ? 'bg-[#F48244]' : 'bg-foreground/10'}`} />
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-40 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter pb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/40  z-10">
          Building infrastructure <br className="hidden md:block" />
          for Africa&apos;s growth
        </h1>
      </section>

      {/* Bento Grid Values Section */}
      <section className="px-6 md:px-12 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Mission (Large) */}
          <div className="md:col-span-2 bg-foreground/[0.02] border border-foreground/10 rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group hover:border-foreground/20 transition-all duration-500 hover:bg-foreground/[0.04]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#F48244]/5 to-[#F48244]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center mb-6 border border-foreground/10">
                <svg
                  className="w-5 h-5 text-foreground/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">
                The Mission
              </h3>
              <p className="text-foreground/60 text-lg max-w-md leading-relaxed">
                Every pixel, every line of code, and every interaction is
                crafted with intention. We don&apos;t just build; we refine.
              </p>
            </div>

            <div className="mt-12 flex gap-4 items-center relative z-10">
              <div className="h-px w-12 bg-foreground/20 group-hover:w-20 transition-all duration-500" />
              <span className="text-xs font-mono text-foreground/40 uppercase tracking-[0.2em] group-hover:text-foreground/60 transition-colors">
                Core Principle 01
              </span>
            </div>
          </div>

          {/* Card 2 - 100% (Vertical) */}
          <div className="md:col-span-1 bg-foreground/[0.02] border border-foreground/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-foreground/20 transition-all duration-500 hover:bg-foreground/[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/20 tracking-tighter relative z-10">
              100%
            </h3>
            <p className="text-foreground/60 text-sm font-medium uppercase tracking-wide mb-2">
              Compliance
            </p>
            <p className="text-foreground/40 text-sm max-w-[200px] relative z-10">
              Meeting all Nigerian federal and state requirements
            </p>
          </div>

          {/* Card 3 - Public & Private (Vertical) */}
          <div className="md:col-span-1 bg-foreground/[0.02] border border-foreground/10 rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group hover:border-foreground/20 transition-all duration-500 hover:bg-foreground/[0.04] min-h-[320px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-tr from-[#F48244]/10 to-[#F48244]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

            {/* Abstract Globe/Network graphic */}
            <div className="absolute top-8 inset-x-0 flex justify-center opacity-50 group-hover:opacity-80 transition-opacity duration-500">
              <div className="w-32 h-32 border border-foreground/10 rounded-full flex items-center justify-center">
                <div className="w-20 h-20 border border-foreground/10 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-foreground/5 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-foreground tracking-tight">
                Public & Private
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Serving clients across 12 time zones with 24/7 dedicated
                support.
              </p>
            </div>
          </div>

          {/* Card 4 - 3-in-1 (Large) */}
          <div className="md:col-span-2 bg-foreground/[0.02] border border-foreground/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center relative overflow-hidden group hover:border-foreground/20 transition-all duration-500 hover:bg-foreground/[0.04]">
            <div className="flex-1 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center mb-6 border border-foreground/10">
                <svg
                  className="w-5 h-5 text-foreground/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-3 text-foreground tracking-tight">
                3-in-1 Solutions
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                We believe that latency is the enemy of creativity. Our systems
                are optimized for instant feedback and seamless flow.
              </p>
            </div>

            {/* Decorative Element */}
            <div className="w-full md:w-1/3 aspect-square rounded-2xl border border-foreground/10 bg-foreground/5 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite] opacity-20"></div>
              <div className="grid grid-cols-2 gap-2 transform rotate-45">
                <div className="w-8 h-8 rounded-lg bg-[#F48244]/20"></div>
                <div className="w-8 h-8 rounded-lg bg-[#F48244]/20"></div>
                <div className="w-8 h-8 rounded-lg bg-[#F48244]/20"></div>
                <div className="w-4 h-4 rounded-lg bg-[#F48244]/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Contributors Section */}
      <section className="py-24 md:py-32 border-t border-foreground/5 bg-foreground/[0.01] relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="md:w-1/3 md:sticky md:top-32">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 tracking-tight">
                Core <br/> Contributors.
              </h2>
              <p className="text-foreground/60 text-lg pb-8 leading-relaxed">
                Our distributed network of engineers and innovators. Each module, critical to the system's integrity.
              </p>
              <Link
                href="/careers"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#F48244] hover:text-[#F48244]/80 transition-colors"
              >
                Join the Protocol
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, i) => (
                <div key={i} className="group relative bg-background border border-foreground/10 rounded-2xl p-6 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#F48244]/50 hover:shadow-lg hover:shadow-[#F48244]/5">
                  {/* Abstract circuit pattern background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#F48244]/10 flex items-center justify-center mb-4 text-xl font-bold text-[#F48244]">
                      {member.initials}
                    </div>
                    <h4 className="font-bold text-lg text-foreground mb-1 group-hover:text-[#F48244] transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs text-foreground/40 font-mono uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-foreground/5 flex justify-between items-center relative z-10">
                    <span className="font-mono text-xs text-foreground/30">
                      ID: {String(i + 1).padStart(3, '0')}
                    </span>
                    <svg className="w-5 h-5 text-foreground/20 group-hover:text-[#F48244] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9a2 2 0 00-2-2h-7m-2 2H5a2 2 0 00-2 2v10a2 2 0 002 2h7m0-14v-2m0 2h-2m2 0h2" /></svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
