import AButton from "./AButton";
import DeliveryRoute from "./DeliveryRoute";

// Generate random circles once at module load
const generateRandomCircles = () => {
  return [...Array(200)].map(() => ({
    cx: Math.random() * 1000,
    cy: Math.random() * 500,
    r: Math.random() * 2,
  }));
};

const RANDOM_CIRCLES = generateRandomCircles();

const MODULES = [
  {
    id: "01",
    code: "SC-OPT",
    title: "Supply Chain Optimization",
    subtitle: "End-to-end efficiency",
    desc: "We streamline your entire supply chain with data analytics and process automation. From supplier relationships to demand forecasting, we identify bottlenecks and implement solutions that cut costs while improving reliability. Our predictive models analyze historical data to forecast demand with 98% accuracy, ensuring you are never overstocked or underprepared.",
    icon: (
      <svg
        className="w-24 h-24 text-foreground/10 group-hover:text-[#F48244]/20 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.5}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.5}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v3.215A5.5 5.5 0 0112 16z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.5}
          d="M13 16a4.5 4.5 0 009 0V9l-2-3h-5l-2 3v7z"
        />
      </svg>
    ),
  },
  {
    id: "02",
    code: "WH-SOL",
    title: "Warehouse Solutions",
    subtitle: "Smarter storage systems",
    desc: "Maximize warehouse efficiency with intelligent inventory systems and automated workflows. Our solutions include layout optimization, RFID tracking, and real-time inventory management that eliminate waste and accelerate fulfillment. We deploy autonomous guided vehicles (AGVs) and smart shelving units that reduce picking time by up to 40%.",
    icon: (
      <svg
        className="w-24 h-24 text-foreground/10 group-hover:text-[#F48244]/20 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    id: "03",
    code: "TR-PLN",
    title: "Transport Planning",
    subtitle: "Optimized routing",
    desc: "Reduce fuel costs and delivery times with intelligent routing and fleet optimization. We implement dynamic scheduling systems that adapt to traffic, weather, and delivery priorities in real-time. Our algorithms consider over 50 variables to calculate the most efficient path, reducing carbon footprint and operational expenses simultaneously.",
    icon: (
      <svg
        className="w-24 h-24 text-foreground/10 group-hover:text-[#F48244]/20 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    id: "04",
    code: "DL-MGT",
    title: "Delivery Management",
    subtitle: "Last-mile excellence",
    desc: "Give customers visibility while optimizing your last-mile operations. Our tracking platforms, proof-of-delivery systems, and failed delivery management ensure customer satisfaction at every touchpoint. We provide a white-labeled tracking interface that integrates seamlessly into your existing customer portal.",
    icon: (
      <svg
        className="w-24 h-24 text-foreground/10 group-hover:text-[#F48244]/20 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: "05",
    code: "TC-ADV",
    title: "Technology Advisory",
    subtitle: "Digital transformation",
    desc: "Navigate the complex landscape of logistics technology with expert consulting. We help select, implement, and integrate the right systems for your operations, ensuring maximum ROI on your technology investments. From ERP migration to IoT sensor deployment, we guide you through every step of the digital evolution.",
    icon: (
      <svg
        className="w-24 h-24 text-foreground/10 group-hover:text-[#F48244]/20 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function Logistics() {
  return (
    <section className="relative pt-24 pb-16 px-6 md:px-12 border-b border-foreground/10 overflow-hidden min-h-[60vh] flex flex-col">
      <div className="relative pb-16 overflow-hidden min-h-[60vh] flex flex-col">
        <div className="max-w-[1400px]  overflow-visible mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div
            className=" overflow-visible lg:hidden relative w-full"
            style={{ height: "150px" }}
          >
            <DeliveryRoute />
          </div>
          <div>
            <div className="flex items-center gap-3 pb-5 lg:pb-8">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-[#F48244]/10 text-[#F48244] text-xs font-mono  rounded border border-[#F48244]/20 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-[#F48244]/60 rounded-full animate-pulse" />
                Logistics{" "}
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.9] pb-4 md:pb-8  bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
              End-to-end supply chain optimization
            </h1>

            <p className="text-sm md:text-lg lg:text-xl text-foreground/60 max-w-sm md:max-w-2xl leading-relaxed ">
              Orchestrate your global supply chain from a single source of
              truth. Real-time visibility, predictive analytics, and automated
              execution.
            </p>
            <div className="pt-4">
              <AButton href="/contact" filled showArrow>
                Get a Demo
              </AButton>
            </div>
          </div>
          <div
            className=" overflow-visible hidden lg:block -top-56 relative w-full"
            style={{ height: "200px" }}
          >
            <DeliveryRoute />
          </div>
        </div>
      </div>

      <section className="px-6 md:px-12 py-12 md:py-20 relative">
        {/* Central Process Line (Desktop Only) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-foreground/10 -translate-x-1/2 z-0" />

        <div className="max-w-[1400px] mx-auto space-y-32 relative z-10">
          {MODULES.map((module, i) => (
            <div
              key={module.id}
              className={`flex flex-col md:flex-row items-center gap-16 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {module.title}
                </h3>
                <p className="text-[#F48244] font-medium mb-6 text-sm uppercase tracking-wide">
                  {module.subtitle}
                </p>

                <p className="text-lg text-foreground/60 leading-relaxed mb-8">
                  {module.desc}
                </p>
              </div>

              {/* Visual Schematic */}
              <div className="flex-1 w-full">
                <div className="aspect-square md:aspect-[4/3] w-full bg-foreground/[0.02] border border-foreground/10 rounded-2xl relative overflow-hidden group hover:border-[#F48244]/30 transition-all duration-500 p-12 flex items-center justify-center">
                  {/* Central Icon */}
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {module.icon}
                  </div>

                  {/* Corner Decors */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-foreground/10 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-foreground/10 rounded-br-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to optimize?
          </h2>
          <p className="text-foreground/60 mb-10 text-lg">
            Initiate a full system audit. We identify inefficiencies and propose
            architectural upgrades within 48 hours.
          </p>
          <div className="flex overflow-visible justify-center">
            <AButton href="/contact" filled showArrow>
              Start Protocol
            </AButton>
          </div>
        </div>
      </section>
    </section>
  );
}
