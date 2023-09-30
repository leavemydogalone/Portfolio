import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import ProjectGallery from "./ProjectGallery";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Projects />
      <ProjectGallery />
      <Contact />
    </div>
  );
}

export default App;
