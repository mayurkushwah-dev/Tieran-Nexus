import "./App.css";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Background from "./components/Background";
import Footer from "./components/Footer";

function App(){
  return (
    <>
      <Background />
      <Navbar />
    <motion.div
    className="hero"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    >
      <h1>Tieran Nexus</h1>

      <h2>Building Intelligent Systems,
          Interactive Experiences,
          and Future-Ready Solutions.</h2>

      <p>AI/ML • Full Stack • Android • DSA</p>

      <button>Explore Projects</button>
    </motion.div>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer />
    </>
  );
}

export default App;