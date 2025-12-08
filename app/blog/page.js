import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NetworkNodes from "../components/NetworkNodes";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Evolution of Digital Infrastructure",
    date: "October 12, 2024",
    category: "Engineering",
    excerpt:
      "How we are rethinking the foundational layers of the modern web to support the next generation of applications.",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Designing for High-Density Interfaces",
    date: "November 03, 2024",
    category: "Design",
    excerpt:
      "Lessons learned from building complex dashboards and data-heavy applications without sacrificing clarity.",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Scale and Sustainability",
    date: "November 15, 2024",
    category: "Sustainability",
    excerpt:
      "Why efficient code is the first step towards a greener cloud computing footprint.",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "The Future of Logistics Tech",
    date: "December 01, 2024",
    category: "Logistics",
    excerpt:
      "Predictive algorithms and real-time tracking are changing how goods move around the world.",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Zero Trust Security Models",
    date: "December 10, 2024",
    category: "Security",
    excerpt:
      "Implementing strict identity verification for every person and device trying to access resources.",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Asynchronous Workflows",
    date: "December 22, 2024",
    category: "Culture",
    excerpt:
      "How we structure our teams to work effectively across multiple time zones and continents.",
    readTime: "5 min read",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background relative">
      <Navbar />

      <div className="absolute top-0 left-0 w-full h-[60vh] z-30 pointer-events-none">
        <NetworkNodes />
      </div>

      <div className=" px-6 md:px-12 pt-32 pb-20 relative ">
        {/* Header */}
        <header className="mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.9] pb-4 md:pb-8  bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
            Blog & Articles
          </h1>{" "}
            <p className="text-sm md:text-lg lg:text-xl text-foreground/60 max-w-sm md:max-w-lg leading-relaxed ">
            Insights, thoughts, and updates from the team. We share what we
            learn as we build.
          </p>
        </header>

        <div className="pb-20  px-6 md:px-12">
          <div className="group relative overflow-hidden rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-foreground/20 transition-colors duration-500">
            <div className="grid md:grid-cols-2 gap-8  ">
              <div className="aspect-video md:aspect-auto bg-foreground/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F48244] to-[#F48244]/60 group-hover:scale-105 transition-transform duration-700" />
                {/* Abstract Shape */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-foreground/20 rounded-full blur-2xl" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6 text-sm text-foreground/40 font-mono uppercase tracking-wider">
                  <span>{BLOG_POSTS[0].date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-[#F48244] transition-colors duration-300">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-foreground/60 text-lg mb-8 line-clamp-3">
                  {BLOG_POSTS[0].excerpt}
                </p>
                <div className="flex items-center text-sm font-medium text-foreground/80 group-hover:translate-x-2 transition-transform duration-300">
                  Read Article
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(1).map((post) => (
            <article key={post.id} className="group flex flex-col h-full">
              <div className="aspect-[16/10] bg-foreground/5 rounded-2xl mb-6 overflow-hidden relative border border-foreground/10 group-hover:border-foreground/20 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-foreground/5 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-16 h-16 rounded-lg rotate-12 bg-foreground/20" />
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3 text-xs text-foreground/40 font-mono uppercase tracking-wider">
                <span>•</span>
                <span>{post.date}</span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-[#F48244] transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-foreground/60 text-sm mb-6 flex-grow">
                {post.excerpt}
              </p>

              <div className="flex items-center text-sm font-medium text-foreground/80 mt-auto group-hover:translate-x-1 transition-transform duration-300">
                Read more
                <svg
                  className="w-3 h-3 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-32 bg-foreground/5 border border-foreground/10 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
          <h3 className="text-2xl font-bold mb-4">Stay in the loop</h3>
          <p className="text-foreground/60 max-w-md mx-auto mb-8">
            Get the latest updates on our technology and design philosophy
            directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="email@example.com"
              className="px-4 py-3 rounded-lg bg-background border border-foreground/10 focus:outline-none focus:border-[#F48244] transition-colors w-full"
            />
            <button className="px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
