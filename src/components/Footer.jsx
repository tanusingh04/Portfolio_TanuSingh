import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-28 md:py-36 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-body font-medium tracking-[0.15em] uppercase text-primary mb-6">Contact</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">Let's Connect</h2>
          <p className="text-base text-muted-foreground font-body max-w-md mx-auto mb-10">
            Open to backend, SDE opportunities, collaborations, and interesting conversations.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
          <motion.a
            href="mailto:tnusng7905@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-border text-foreground font-body font-medium hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Mail size={16} />
            tnusng7905@gmail.com
          </motion.a>

          <motion.a
            href="tel:+917905188436"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-border text-foreground font-body font-medium hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Phone size={16} />
            +91 7905188436
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center gap-3 mb-14"
        >
          {[
            { icon: Github, href: "https://github.com/tanusingh04", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/tnusng04", label: "LinkedIn" },
            { icon: Code2, href: "https://leetcode.com/u/tanu0405/", label: "LeetCode" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              title={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>

        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground font-body">© 2026 Tanu Singh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
