import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Projects from "./Projects";

function App() {
  // const header = useRef();
  // const about = document.querySelector(".about");

  // const options = {
  //   rootMargin: "-200px 0px 0px 0px",
  // };

  // const sectionOneObserver = new IntersectionObserver(function (
  //   entries,
  //   sectionOneObserver
  // ) {
  //   entries.forEach((entry) => {
  //     if (!entry.isIntersecting) {
  //       header.current.classList.add("nav-scrolled");
  //     } else {
  //       header.current.classList.remove("nav-scrolled");
  //     }
  //   });
  // },
  // options);

  // useEffect(() => {
  //   if (about) sectionOneObserver.observe(about);

  //   return () => {
  //     if (about) sectionOneObserver.unobserve(about);
  //   };
  // }, [header.current, about, options]);
  return (
    <div className="App">
      <Nav />
      <About />
      <Projects />
    </div>
  );
}

export default App;
