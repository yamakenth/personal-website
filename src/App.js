import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div 
      id='app' 
      className='
        text-neutral-900 
        bg-neutral-50
        bg-[url("./assets/img/about/bg-sakura.jpeg")]
        sm:bg-[url("./assets/img/about/bg-sakura-md.jpeg")]
        bg-no-repeat 
        bg-fixed 
        bg-contain
        1.5xl:bg-cover
      '
    >
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact /> 
    </div>
  );
}

export default App;