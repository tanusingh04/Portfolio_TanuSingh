import { motion } from "framer-motion";
import { Trophy, Award, Medal, Code } from "lucide-react";

const achievements = [
  {
    title: "400+ DSA & CP Problems",
    event: "Codeforces · LeetCode · CodeChef · Codolio",
    detail: "Solved 400+ DSA and competitive programming problems across Codeforces, LeetCode, and CodeChef; ranked 1st in college in multiple contests.",
    icon: Code,
    color: "from-sky-500/10 to-blue-500/5 border-sky-500/20",
    iconColor: "text-sky-500 bg-sky-500/15",
  },
  {
    title: "Team Win",
    event: "Codeverse Hackathon",
    detail: "Led a team to a win among 250+ teams in the Codeverse Hackathon.",
    icon: Medal,
    color: "from-emerald-500/10 to-teal-500/5 border-emerald-500/20",
    iconColor: "text-emerald-500 bg-emerald-500/15",
  },
  {
    title: "National Finalist",
    event: "Smart India Hackathon (SIH)",
    detail: "Selected among top national teams for innovative solution development.",
    icon: Award,
    color: "from-primary/10 to-purple-400/5 border-primary/20",
    iconColor: "text-primary bg-primary/15",
  },
  {
    title: "2nd Runner-Up",
    event: "SolVIT Hackathon",
    detail: "Community Safety Platform — recognized among top performers for innovation.",
    icon: Trophy,
    color: "from-amber-500/10 to-yellow-500/5 border-amber-500/20",
    iconColor: "text-amber-500 bg-amber-500/15",
  },
];

const Achievements = () => {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-body font-medium tracking-[0.2em] uppercase text-primary mb-4">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-3">Achievements</h2>
          <div className="w-12 h-1 rounded-full bg-primary" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((item, i) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`relative rounded-2xl border bg-gradient-to-br ${item.color} p-6 group hover:shadow-[0_0_35px_-10px_hsl(var(--primary)/0.3)] transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-body font-bold text-foreground mb-0.5">{item.title}</h3>
                    <p className="text-sm text-primary font-body font-semibold mb-2">{item.event}</p>
                    <p className="text-xs text-muted-foreground font-body leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
