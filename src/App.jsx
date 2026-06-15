import "./App.css";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App(){
  return (
    <>
      <Navbar />
    <motion.div
    className="hero"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    >
      <h1>Tieran Nexus</h1>

      <h2>Computer Science Undergraduate</h2>

      <p>DSA • AI/ML • Android Development • Web Development</p>

      <button>Explore Portfolio</button>
    </motion.div>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;