import { motion } from "framer-motion";

const stats = [
  { value: "8.81", label: "CGPA", sub: "/ 10" },
  { value: "5K+", label: "Users Served", sub: "in internship" },
  { value: "400+", label: "DSA Problems", sub: "solved" },
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
            Computer Science undergraduate at <strong className="text-foreground">Vellore Institute of Technology, Bhopal</strong> (2023–2027) with an 8.81 CGPA. Experienced as a Backend Engineer Intern building scalable REST APIs with Spring Boot and microservices, event-driven architectures with Apache Kafka, and low-latency systems.
          </p>
          <p className="text-base text-muted-foreground font-body leading-[1.85] mb-6">
            Strong foundation in Data Structures & Algorithms (400+ problems solved, top college rank), Object-Oriented Programming, and cloud infrastructure on AWS and Google Cloud with Docker and CI/CD pipelines.
          </p>

          {/* Areas of Interest from Resume */}
          <div className="pt-2">
            <p className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Areas of Interest
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Backend Engineering",
                "Applied AI/ML",
                "FinTech Systems",
                "Distributed Systems",
                "System Design",
                "Competitive Programming",
              ].map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 text-xs font-body font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
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
