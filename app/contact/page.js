"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AButton from "../components/AButton";

export default function Contact() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".animate-fade",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }
      );
    },
    { scope: containerRef }
  );

  return (
    <main
      className="min-h-screen bg-background text-foreground selection:bg-[#F48244] selection:text-white"
      ref={containerRef}
    >
      <Navbar />

      {/* Ambient Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#F48244]/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h1 className="animate-fade text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Contact
          </h1>
          <p className="animate-fade text-xl text-foreground/60 leading-relaxed font-light">
            We’ll help you find the right person. Choose a topic below or send
            us a general inquiry.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Routing Options */}
          <div className="lg:col-span-5 space-y-4">
            {/* Sales Card */}
            <a
              href="#"
              className="animate-fade group block p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-[#F48244]/10 text-[#F48244]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-foreground/40">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Talk to Sales</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Interested in our enterprise solutions? Get in touch with our
                sales team.
              </p>
            </a>

            {/* Support Card */}
            <a
              href="#"
              className="animate-fade group block p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-foreground/40">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Product Support</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Need help with the platform? Check our docs or contact support.
              </p>
            </a>

            {/* Offices Mini Grid */}
            <div className="animate-fade grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
                <div className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-3">
                  NG
                </div>
                <div className="font-medium text-sm">
                  548 Market St
                  <br />
                  <span className="text-foreground/60">Abuja</span>
                </div>
              </div>
              <div className="p-5 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
                <div className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-3">
                  USA
                </div>
                <div className="font-medium text-sm">
                  7 Bell Yard
                  <br />
                  <span className="text-foreground/60">DX Texas</span>
                </div>
              </div>
            </div>

            {/* Social Links - Linear Style */}
            <div className="animate-fade pt-4 flex flex-wrap gap-3">
              {["Twitter", "GitHub", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-medium px-4 py-2 rounded-xl border border-foreground/10 hover:bg-foreground hover:text-background transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: General Inquiry Form */}
          <div className="lg:col-span-7 animate-fade">
            <div className="h-full rounded-3xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm p-8 md:p-10 relative overflow-hidden">
              {/* Form Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-[#F48244]/10 to-transparent blur-[60px] pointer-events-none opacity-50" />

              <h2 className="text-xl font-semibold mb-6">General Inquiry</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-foreground/60 ml-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F48244]/50 focus:ring-1 focus:ring-[#F48244]/50 transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-foreground/60 ml-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F48244]/50 focus:ring-1 focus:ring-[#F48244]/50 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-foreground/60 ml-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F48244]/50 focus:ring-1 focus:ring-[#F48244]/50 transition-all"
                    placeholder="jane@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-foreground/60 ml-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F48244]/50 focus:ring-1 focus:ring-[#F48244]/50 transition-all resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className=""
                  >
                    <AButton href="/contact" showArrow>
                     Submit
                    </AButton>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
