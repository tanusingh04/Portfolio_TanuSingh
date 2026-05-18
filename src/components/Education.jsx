import { motion } from "framer-motion";

const educationData = [
  {
    institution: "VIT Bhopal",
    degree: "B.Tech: Computer Science & Engineering (AI-ML)",
    period: "Sept 2023 – May 2027",
    grade: "GPA: 8.79/10",
    current: true,
  },
  {
    institution: "Pt. D. P. Mishra Memorial Public School",
    degree: "Senior Secondary (Class 12) — CISCE",
    period: "2022",
    grade: "83.2%",
    current: false,
  },
  {
    institution: "Pt. D. P. Mishra Memorial Public School",
    degree: "Secondary (Class 10) — CISCE",
    period: "2020",
    grade: "84.33%",
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-28 md:py-36 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-body font-medium tracking-[0.15em] uppercase text-primary mb-6">Education</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-14">Academic Journey</h2>
        </motion.div>

        <div className="space-y-0">
          {educationData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-8 border-b border-border last:border-b-0 first:pt-0"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-body font-semibold text-foreground">{item.institution}</h3>
                  {item.current && (
                    <span className="text-[10px] font-body font-medium tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                      Current
                    </span>
                  )}
                </div>
                <span className="text-sm text-muted-foreground font-body">{item.period}</span>
              </div>
              <p className="text-sm text-muted-foreground font-body mb-2">{item.degree}</p>
              <p className="text-sm font-body font-medium text-foreground">{item.grade}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
