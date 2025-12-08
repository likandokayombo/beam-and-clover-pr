export default function WhyUs() {
  const cards = [
    {
      title: "IT Integration",
      description:
        "We Are Modernizing Vehicle Administration With Smart Digital Systems That Cut Processing Time, Eliminate Manual Input And Errors, An",
    },
    {
      title: "IT Integration",
      description:
        "We Are Modernizing Vehicle Administration With Smart Digital Systems That Cut Processing Time, Eliminate Manual Input And Errors, An",
    },
    {
      title: "IT Integration",
      description:
        "We Are Modernizing Vehicle Administration With Smart Digital Systems That Cut Processing Time, Eliminate Manual Input And Errors, An",
    },
    {
      title: "IT Integration",
      description:
        "We Are Modernizing Vehicle Administration With Smart Digital Systems That Cut Processing Time, Eliminate Manual Input And Errors, An",
    },
    {
      title: "IT Integration",
      description:
        "We Are Modernizing Vehicle Administration With Smart Digital Systems That Cut Processing Time, Eliminate Manual Input And Errors, An",
    },
  ];

  return (
    <section className="px-8 py-12">
      <h1 className="font-heading font-semibold tracking-tight font-semibold leading-tight text-2xl  md:text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 md:px-5 lg:px-14 text-center  pb-4 lg:pb-6 ">
        Why Choose Us
      </h1>

      {/* Desktop: 2 top + 3 bottom using flex */}
      <div className="hidden lg:flex flex-col gap-3">
        {/* Top row: 2 cards with flex-1 */}
        <div className="flex gap-3 flex-row">
          <div className="flex-1 bg-gray-300 rounded-lg p-8 flex flex-col justify-between aspect-video">
            <h2 className="text-2xl font-semibold">{cards[0].title}</h2>
            <p className="text-gray-700 text-sm">{cards[0].description}</p>
          </div>
          <div className="flex-1 bg-gray-300 rounded-lg p-8 flex flex-col justify-between aspect-video">
            <h2 className="text-2xl font-semibold">{cards[1].title}</h2>
            <p className="text-gray-700 text-sm">{cards[1].description}</p>
          </div>
        </div>

        {/* Bottom row: 3 cards with flex-1 */}
        <div className="flex gap-3 flex-row">
          <div className="flex-1 bg-gray-300 rounded-lg p-8 flex flex-col justify-between aspect-video">
            <h2 className="text-xl font-semibold">{cards[2].title}</h2>
            <p className="text-gray-700 text-sm">{cards[2].description}</p>
          </div>
          <div className="flex-1 bg-gray-300 rounded-lg p-8 flex flex-col justify-between aspect-video">
            <h2 className="text-xl font-semibold">{cards[3].title}</h2>
            <p className="text-gray-700 text-sm">{cards[3].description}</p>
          </div>
          <div className="flex-1 bg-gray-300 rounded-lg p-8 flex flex-col justify-between aspect-video">
            <h2 className="text-xl font-semibold">{cards[4].title}</h2>
            <p className="text-gray-700 text-sm">{cards[4].description}</p>
          </div>
        </div>
      </div>

      {/* Tablet: 2 top, 1 middle, 2 bottom */}
      <div className="hidden md:flex lg:hidden flex-col gap-3">
        {/* Top: 2 cards */}
        <div className="flex gap-3 flex-row">
          <div className="flex-1 bg-gray-300 rounded-lg p-6 flex flex-col justify-between aspect-video">
            <h2 className="text-lg font-semibold">{cards[0].title}</h2>
            <p className="text-gray-700 text-xs">{cards[0].description}</p>
          </div>
          <div className="flex-1 bg-gray-300 rounded-lg p-6 flex flex-col justify-between aspect-video">
            <h2 className="text-lg font-semibold">{cards[1].title}</h2>
            <p className="text-gray-700 text-xs">{cards[1].description}</p>
          </div>
        </div>

        {/* Middle: 1 card centered */}
        <div className="flex gap-3 flex-row">
          <div className="flex-1 bg-gray-300 rounded-lg p-6 flex flex-col justify-between aspect-video">
            <h2 className="text-lg font-semibold">{cards[2].title}</h2>
            <p className="text-gray-700 text-xs">{cards[2].description}</p>
          </div>
        </div>

        {/* Bottom: 2 cards */}
        <div className="flex gap-3 flex-row">
          <div className="flex-1 bg-gray-300 rounded-lg p-6 flex flex-col justify-between aspect-video">
            <h2 className="text-lg font-semibold">{cards[3].title}</h2>
            <p className="text-gray-700 text-xs">{cards[3].description}</p>
          </div>
          <div className="flex-1 bg-gray-300 rounded-lg p-6 flex flex-col justify-between aspect-video">
            <h2 className="text-lg font-semibold">{cards[4].title}</h2>
            <p className="text-gray-700 text-xs">{cards[4].description}</p>
          </div>
        </div>
      </div>

      {/* Mobile: 1 column */}
      <div className="md:hidden flex flex-col gap-3">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-gray-300 rounded-lg p-6 flex flex-col justify-between aspect-video"
          >
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-gray-700 text-xs">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
