"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AButton from "./AButton";

// Register explicitly outside component
gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 1,
    title: "IT Integration",
    description:
      "Driving digital transformation with intelligent, integrated systems that bridge the gap between strategy and execution. We deliver cutting-edge technology solutions specifically designed to boost business efficiency, enhance security, and support sustainable growth for complex operations.",
    label: "01",
    features: [
      "Software Development & Deployment",
      "AI Automation & Optimization",
      "Cloud Computing & Data Services",
      "IT Consulting & Advisory",
      "Network Infrastructure",
    ],
  },
  {
    id: 2,
    title: "Vehicle Administration",
    description:
      "In partnership with Government Agencies, we modernize vehicle administration through smart digital systems. Our technology cuts processing time, eliminates manual errors, and makes services faster and more secure for a comfortable experience.",
    label: "02",
    features: [
      "License Management & Renewal",
      "Vehicle Registration & Docs",
      "Digital Compliance & Verification",
      "Smart Tracking & Monitoring",
    ],
  },
  {
    id: 3,
    title: "Digital Infrastructure",
    description:
      "Building resilient and scalable digital infrastructure that supports your business growth. Our comprehensive solutions ensure reliability, security, and optimal performance across all your digital operations.",
    label: "03",
    features: [
      "Data Centers & Hosting",
      "Cybersecurity & Protection",
      "System Integration",
      "Disaster Recovery",
    ],
  },
];

export default function ServicesCarousel() {
  const container = useRef(null);
  const progressBarRef = useRef(null);
  // Use a fixed array for refs to avoid dynamic ref callbacks issues during re-renders
  const slidesRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = slidesRef.current;
      const totalSlides = servicesData.length;
      
      // Initial setup: Hide all slides except the first one
      // We set them to translate-y-full (down) and opacity 0
      slides.forEach((slide, i) => {
        if (i !== 0) {
          gsap.set(slide, { yPercent: 100, opacity: 0 });
        }
      });

      // Create the timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${totalSlides * 100}%`, 
          scrub: 0.5,
          pin: true,
          // anticipatePin helps with the slight jitter on start
          anticipatePin: 1,
          // Update the progress bar
          onUpdate: (self) => {
            if (progressBarRef.current) {
               gsap.set(progressBarRef.current, { scaleX: self.progress });
            }
          }
        },
      });

      // Build the animation sequence
      servicesData.forEach((_, i) => {
        if (i === 0) return; // First slide stays put initially

        const currentSlide = slides[i];
        const prevSlide = slides[i - 1];

        // Animate current slide IN
        tl.to(currentSlide, { 
          yPercent: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power2.inOut" 
        });

        // Animate previous slide OUT (slightly) for depth
        // We overlap this with the entrance of the current slide using "<"
        tl.to(prevSlide, { 
          opacity: 0, 
          scale: 0.95, 
          duration: 1 
        }, "<");
      });

    }, container);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div 
      ref={container} 
      className="relative h-screen w-full bg-black overflow-hidden text-white flex flex-col"
      style={{ minHeight: '100vh' }} // Fallback
    >
      
      {/* Global Background Elements - Fixed Position inside relative container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Blurs */}
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-orange-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[100px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
          }} 
        />
      </div>

      {/* Slides Container */}
      {servicesData.map((service, i) => (
        <div
          key={service.id}
          ref={(el) => (slidesRef.current[i] = el)}
          className="absolute inset-0 w-full h-full flex items-center justify-center px-6 md:px-12 lg:px-24"
          style={{ 
            zIndex: 10 + i, // Explicit Z-Index
            backgroundColor: 'transparent' // Ensure no background blocking
          }}
        >
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">
            
            {/* Text Content */}
            <div className="flex-1 flex flex-col gap-8 items-start">
               <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-sm font-mono text-[#F48244] bg-black/50 backdrop-blur-md">
                          {service.label}
                      </span>
                      <div className="h-px w-12 bg-white/20"></div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight drop-shadow-lg">
                      {service.title}
                  </h2>
                  
                  <p className="text-zinc-400 text-lg leading-relaxed max-w-xl drop-shadow-md">
                      {service.description}
                  </p>
               </div>

               {/* Features List */}
               <div className="flex flex-wrap gap-3">
                  {service.features.map((feat, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 backdrop-blur-sm">
                          {feat}
                      </span>
                  ))}
               </div>

               <div className="mt-4">
                  <AButton href="/get-started" showArrow>
                      Learn More
                  </AButton>
               </div>
            </div>

            {/* Visual / Graphic Placeholder */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
                <div className="relative w-full aspect-square max-w-[500px]">
                    <div className="w-full h-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md rounded-3xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 bg-cover" />
                        
                        {/* Icons per service */}
                        <div className="relative z-10">
                            {i === 0 && <div className="w-32 h-32 rounded-2xl border-2 border-[#F48244] rotate-12 shadow-[0_0_40px_rgba(244,130,68,0.2)]" />}
                            {i === 1 && <div className="w-32 h-32 rounded-full border-2 border-[#F48244] shadow-[0_0_40px_rgba(244,130,68,0.2)]" />}
                            {i === 2 && (
                                <div className="w-32 h-32 grid grid-cols-2 gap-2">
                                    {[...Array(4)].map((_, idx) => (
                                        <div key={idx} className="bg-[#F48244]/20 border border-[#F48244]/40 rounded-md" />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      ))}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 z-50">
        <div 
            ref={progressBarRef}
            className="h-full bg-[#F48244] origin-left scale-x-0"
        />
      </div>
    </div>
  );
}