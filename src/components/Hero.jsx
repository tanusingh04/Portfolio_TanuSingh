import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px]" />
      </div>

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-10"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-body font-medium text-primary tracking-wide">Open to Backend / SDE Roles</span>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-display font-bold leading-[0.9] tracking-tight mb-6"
      >
        <span className="text-foreground">Tanu</span>{" "}
        <span className="text-gradient">Singh</span>
      </motion.h1>

      {/* Role line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base md:text-lg font-body font-medium tracking-[0.15em] uppercase text-muted-foreground mb-5"
      >
        Software Developer Engineer · Backend · Distributed Systems
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-base md:text-lg text-muted-foreground font-body font-light max-w-xl leading-relaxed mb-12"
      >
        Building high-performance APIs, event-driven systems, and scalable cloud infrastructure that handle millions of requests.
      </motion.p>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="flex items-center gap-4 mb-20"
      >
        {[
          { icon: Github, href: "https://github.com/tanusingh04", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/tnusng04/", label: "LinkedIn" },
          { icon: Code2, href: "https://leetcode.com/u/tanu0405/", label: "LeetCode" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all duration-300 text-muted-foreground hover:text-primary"
          >
            <Icon size={15} />
            <span className="text-xs font-body font-medium">{label}</span>
          </a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
