import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div
      id="app"
      className='text-neutral-900 bg-[url("./assets/img/background/bg-sakura.jpeg")] sm:bg-[url("./assets/img/background/bg-sakura-sm.jpeg")] lg:bg-[url("./assets/img/background/bg-sakura-lg.jpeg")] bg-no-repeat bg-contain'
    >
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
