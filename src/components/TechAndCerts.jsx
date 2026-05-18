import { motion } from "framer-motion";
import { Award } from "lucide-react";

const skillCategories = [
  {
    label: "Languages",
    skills: ["Java", "Python", "SQL"],
  },
  {
    label: "Backend",
    skills: ["Spring Boot", "Spring Security", "REST APIs", "Microservices", "Apache Kafka"],
  },
  {
    label: "Frontend",
    skills: ["React", "Angular", "TypeScript", "HTML", "CSS"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "TimescaleDB", "MongoDB", "Firebase", "Supabase"],
  },
  {
    label: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub Actions", "Maven", "Jenkins", "Postman", "SonarQube"],
  },
  {
    label: "Cloud Platforms",
    skills: ["Google Cloud (GCP)", "Supabase"],
  },
  {
    label: "Core CS",
    skills: ["DSA", "OOP", "DBMS", "OS", "System Design", "Distributed Systems"],
  },
];

const allTechnologies = skillCategories.flatMap((c) => c.skills);

const certificates = [
  { title: "GEN AI Using IBM Watsonx", org: "IBM", date: "June 2025", color: "from-blue-500/10 to-cyan-500/5 border-blue-500/20" },
  { title: "Microsoft Certified: Azure DP-900", org: "Microsoft", date: "June 2025", color: "from-purple-500/10 to-indigo-500/5 border-purple-500/20" },
];

const TechAndCerts = () => {
  return (
    <section id="skills" className="py-28 md:py-36 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm font-body font-medium tracking-[0.2em] uppercase text-primary mb-4">Skills</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-3">Tech Stack</h2>
          <div className="w-12 h-1 rounded-full bg-primary mb-12" />

          {/* Marquee */}
          <div className="marquee mb-10 overflow-hidden">
            <div className="marquee-content">
              {[...allTechnologies, ...allTechnologies].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="text-2xl md:text-3xl font-display font-bold text-foreground/8 whitespace-nowrap hover:text-primary/30 transition-colors duration-500 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {[...allTechnologies, ...allTechnologies].map((tech, i) => (
                <span
                  key={`dup-${tech}-${i}`}
                  className="text-2xl md:text-3xl font-display font-bold text-foreground/8 whitespace-nowrap hover:text-primary/30 transition-colors duration-500 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Categorized tags */}
          <div className="space-y-6">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.06 }}
                className="flex flex-col sm:flex-row sm:items-start gap-3"
              >
                <span className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground pt-1 w-28 flex-shrink-0">
                  {cat.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg border border-border text-sm font-body font-medium text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-body font-medium tracking-[0.2em] uppercase text-primary mb-4">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-3">Certifications</h2>
          <div className="w-12 h-1 rounded-full bg-primary mb-10" />

          <div className="grid sm:grid-cols-2 gap-4">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative rounded-xl border bg-gradient-to-br ${cert.color} p-6 group hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.25)] transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                    <Award size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-body font-semibold text-foreground leading-snug mb-1">{cert.title}</h3>
                    <p className="text-sm text-primary font-body font-medium">{cert.org}</p>
                    <p className="text-xs text-muted-foreground font-body mt-1">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechAndCerts;
