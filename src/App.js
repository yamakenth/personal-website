// import About from './components/About';
// import Contact from './components/Contact';
import Header from './components/Header';
// import Projects from './components/Projects';
// import Skills from './components/Skills';

function App() {
  return (
    <div 
      id='app' 
      className='
        text-neutral-900 
        bg-white
        bg-[url("./assets/img/about/bg-sakura.jpeg")]
        md:bg-[url("./assets/img/about/bg-sakura-md.jpeg")]
        bg-no-repeat 
        bg-fixed 
        bg-center
        bg-cover
      '
    >
      <Header />
      <div className='h-96 text-white' id='about'>ABOUT</div>
      <div className='h-96 text-white' id='skills'>SKILLS</div>
      <div className='h-96 text-white' id='projects'>PROJECTS</div>
      <div className='h-96 text-white' id='contact'>CONTACT</div>
      {/* <About />
      <Skills />
      <Projects />
      <Contact /> */}
    </div>
  );
}

export default App;