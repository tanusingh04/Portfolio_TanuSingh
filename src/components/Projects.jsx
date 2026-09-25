import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Time Forge",
    subtitle: "AI-Powered Productivity App · Feb 2026",
    github: "https://github.com/tanusingh04/TimeForge",
    description: "Built an AI-powered productivity app using React, TypeScript, Tailwind CSS, and Vite, applying prompt engineering to generate context-aware study guidance. Integrated the Google Gemini API (LLM) to deliver summaries, explanations, and personalized study plans. Implemented LocalStorage and IndexedDB for persistent data and structured LLM context retrieval with custom React hooks.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Google Gemini API", "LLM", "IndexedDB", "Context API"],
    featured: true,
  },
  {
    title: "Order Matching Engine",
    subtitle: "Low-Latency Trading Engine · April 2026",
    github: "https://github.com/tanusingh04/order-matching-engine",
    description: "Engineered a Java-based order matching engine implementing price-time priority (FIFO) for deterministic trade execution. Designed an in-memory order book using TreeMap-based price levels enabling O(log n) order insertion and efficient best-price retrieval, supporting partial fills, order cancellations, and ReentrantLock-based concurrency with an asynchronous event pipeline.",
    tags: ["Java", "DSA", "Low-Latency", "TreeMap", "FIFO", "Multithreading", "ReentrantLock"],
    featured: true,
  },
  {
    title: "SafeWalk",
    subtitle: "Community Safety Navigation",
    github: "https://github.com/tanusingh04/safewalk",
    live: "https://safewalk-seven.vercel.app",
    description: "Safety-focused navigation app helping users find the safest walking routes using real-time data and community reports.",
    tags: ["TypeScript", "React", "Maps API", "Firebase"],
    featured: true,
  },
  {
    title: "Fresh Cart Hub",
    subtitle: "Scalable Grocery Platform",
    github: "https://github.com/tanusingh04/freshcarthub",
    description: "Engineered a scalable and responsive grocery ordering platform with dynamic product listings, real-time pricing, and seamless cart management.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 md:py-36 px-6 bg-secondary/40">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm font-body font-medium tracking-[0.2em] uppercase text-primary mb-4">Projects</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-3">Selected Work</h2>
          <div className="w-12 h-1 rounded-full bg-primary mb-6" />
          <p className="text-base text-muted-foreground font-body leading-relaxed">
            Spanning REST APIs, trading engines, safety platforms, and IoT — each built to solve real engineering problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.25)] transition-all duration-300 flex flex-col"
            >
              {/* Number */}
              <div className="absolute top-5 right-5 text-5xl font-display font-bold text-foreground/4 group-hover:text-primary/10 transition-colors select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="p-7 flex flex-col flex-grow">
                {/* Header */}
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs text-muted-foreground font-body mt-0.5">{project.subtitle}</p>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="w-8 h-0.5 rounded-full bg-primary/40 mt-3 mb-4 group-hover:w-16 transition-all duration-300" />

                {/* Description */}
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-body font-medium px-2.5 py-1 rounded-md bg-primary/8 text-primary border border-primary/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-body font-semibold text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={13} />
                    Source
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-body font-semibold text-primary"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
