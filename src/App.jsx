import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import TechAndCerts from "./components/TechAndCerts.jsx";
import Footer from "./components/Footer.jsx";
import SettingsPanel from "./components/SettingsPanel.jsx";

const App = () => (
  <BrowserRouter>
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <TechAndCerts />
      <Footer />
      <SettingsPanel />
    </main>
  </BrowserRouter>
);

export default App;
