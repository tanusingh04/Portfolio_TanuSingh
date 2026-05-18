import { motion } from "framer-motion";

const experiences = [
  {
    title: "Rasient Technohub Pvt. Ltd.",
    role: "Backend Engineer Intern",
    period: "Jan 2026 – Mar 2026",
    location: "Remote",
    tags: ["Java", "Spring Boot", "REST APIs", "Microservices", "Apache Kafka", "Redis", "Docker", "GitHub Actions", "AWS", "Google Cloud", "Linux", "Agile/Scrum"],
    points: [
      "Developed scalable REST APIs using Java, Spring Boot, and Microservices, supporting 5K+ concurrent users with less than 200ms latency.",
      "Integrated backend with AI/ML services and implemented event-driven architecture using Apache Kafka, improving throughput by 40%+.",
      "Optimized performance using Redis caching, reducing API response time by 30% and enhancing system scalability.",
      "Deployed and managed containerized services using Docker and CI/CD pipelines (GitHub Actions) on Linux-based cloud platforms (AWS and Google Cloud), ensuring 99.9% uptime and reliable releases.",
      "Worked in an Agile/Scrum team with sprint planning and code reviews, using GitHub Copilot to improve productivity.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 md:py-36 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-body font-medium tracking-[0.2em] uppercase text-primary mb-4">Experience</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Where I've Worked</h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-primary" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.3)]">
                {/* Glow bar on left */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/60 to-transparent rounded-l-2xl" />

                <div className="pl-8 pr-8 py-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-body font-semibold text-base mt-1">{exp.role}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 flex-shrink-0">
                      <span className="text-sm font-body font-semibold text-foreground bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        {exp.period}
                      </span>
                      <span className="text-xs text-muted-foreground font-body">{exp.location}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-border my-5" />

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-6">
                    {exp.points.map((point, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 + j * 0.07 }}
                        className="text-sm text-muted-foreground font-body leading-relaxed flex gap-3"
                      >
                        <span className="flex-shrink-0 mt-[6px] w-1.5 h-1.5 rounded-full bg-primary" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, k) => (
                      <span
                        key={k}
                        className="text-xs font-body font-medium px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 transition-colors duration-200 hover:bg-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
