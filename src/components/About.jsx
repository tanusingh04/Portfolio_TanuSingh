import { motion } from "framer-motion";

const stats = [
  { value: "8.79", label: "CGPA", sub: "/ 10" },
  { value: "5K+", label: "Users Served", sub: "in internship" },
  { value: "250+", label: "DSA Problems", sub: "solved" },
  { value: "2+", label: "Certifications", sub: "Microsoft & IBM" },
];

const About = () => {
  return (
    <section id="about" className="py-28 md:py-36 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-body font-medium tracking-[0.2em] uppercase text-primary mb-4">About</p>
          <div className="w-12 h-1 rounded-full bg-primary mb-8" />
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-snug mb-8">
            A CS undergrad with strong fundamentals in{" "}
            <span className="text-primary">data structures</span> and{" "}
            <span className="text-primary">backend development</span>.
          </h2>
          <p className="text-base text-muted-foreground font-body leading-[1.85] mb-5">
            Computer Science undergraduate at <strong className="text-foreground">VIT Bhopal</strong> specializing in AI &amp; ML. Experienced in building Spring Boot microservices and event-driven systems, with hands-on industry experience and recognition in national-level hackathons.
          </p>
          <p className="text-base text-muted-foreground font-body leading-[1.85]">
            I focus on writing clean, testable, production-grade code — from low-latency REST APIs to containerized cloud deployments. I believe great software starts with deep engineering principles and attention to system design.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14 pt-10 border-t border-border"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-start gap-1 p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors duration-300 group"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors">{stat.value}</span>
                {stat.sub && <span className="text-xs text-muted-foreground font-body">{stat.sub}</span>}
              </div>
              <div className="text-xs font-body text-muted-foreground uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
