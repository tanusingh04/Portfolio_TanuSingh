import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Sun, Moon, X } from "lucide-react";

const themes = [
  { id: "rose", label: "Rose", swatch: "#e0446e", className: "" },
  { id: "purple", label: "Purple", swatch: "#8b5cf6", className: "theme-purple" },
  { id: "sky", label: "Sky", swatch: "#0ea5e9", className: "theme-sky" },
  { id: "emerald", label: "Emerald", swatch: "#10b981", className: "theme-emerald" },
];

const LS_THEME = "portfolio-theme";
const LS_DARK = "portfolio-dark";

function applyTheme(themeId, dark) {
  const root = document.documentElement;
  themes.forEach((t) => { if (t.className) root.classList.remove(t.className); });
  const found = themes.find((t) => t.id === themeId);
  if (found && found.className) root.classList.add(found.className);
  if (dark) { root.classList.add("dark"); } else { root.classList.remove("dark"); }
}

const SettingsPanel = () => {
  const [open, setOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(() => localStorage.getItem(LS_THEME) || "rose");
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem(LS_DARK);
    if (saved !== null) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => { applyTheme(activeTheme, dark); }, []);

  const handleTheme = (id) => {
    setActiveTheme(id);
    localStorage.setItem(LS_THEME, id);
    applyTheme(id, dark);
  };

  const handleDark = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem(LS_DARK, String(next));
    applyTheme(activeTheme, next);
  };

  return (
    <>
      <motion.button
        id="settings-toggle"
        aria-label="Open settings"
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center"
        style={{ zIndex: 9999, boxShadow: "0 4px 20px hsl(var(--primary)/0.4)" }}
      >
        <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.3 }}>
          {open ? <X size={18} /> : <Settings size={18} />}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="settings-panel"
            role="dialog"
            aria-label="Theme settings"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed right-6 w-60 rounded-2xl border border-border bg-card shadow-2xl p-5"
            style={{ bottom: "5.5rem", zIndex: 9999, boxShadow: "0 8px 40px hsl(var(--primary)/0.3)" }}
          >
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground mb-4">Appearance</p>

            <div className="flex items-center justify-between mb-5">
              <span className="text-sm font-body font-medium text-foreground">{dark ? "Dark mode" : "Light mode"}</span>
              <button
                id="dark-mode-toggle"
                onClick={handleDark}
                aria-label="Toggle dark mode"
                className="relative w-12 h-6 rounded-full border border-border flex items-center px-0.5 transition-colors duration-300"
                style={{ background: dark ? "hsl(var(--primary)/0.85)" : "hsl(var(--muted))" }}
              >
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  className="w-5 h-5 rounded-full bg-white shadow flex items-center justify-center"
                  style={{ marginLeft: dark ? "auto" : "0", marginRight: dark ? "0" : "auto" }}
                >
                  {dark ? <Moon size={10} className="text-primary" /> : <Sun size={10} className="text-amber-500" />}
                </motion.div>
              </button>
            </div>

            <div className="w-full h-px bg-border mb-4" />

            <p className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground mb-3">Colour</p>
            <div className="grid grid-cols-4 gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  id={`theme-${theme.id}`}
                  onClick={() => handleTheme(theme.id)}
                  aria-label={`${theme.label} theme`}
                  title={theme.label}
                  className="flex flex-col items-center gap-1.5 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-full transition-all duration-200"
                    style={{
                      background: theme.swatch,
                      outline: activeTheme === theme.id ? `3px solid ${theme.swatch}` : "3px solid transparent",
                      outlineOffset: "2px",
                      boxShadow: activeTheme === theme.id ? `0 0 12px ${theme.swatch}80` : "none",
                    }}
                  />
                  <span className="text-[10px] font-body text-muted-foreground group-hover:text-foreground transition-colors">
                    {theme.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SettingsPanel;
