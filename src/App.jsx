import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App(){
  return (
    <>
      <Navbar />
    <div className="hero">
      <h1>Tieran Nexus</h1>

      <h2>Computer Science Undergraduate</h2>

      <p>DSA • AI/ML • Android Development • Web Development</p>

      <button>Explore Portfolio</button>
    </div>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;