import React from "react";

import About from "./containers/About";
import Contact from "./containers/Contact";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Projects from "./containers/Projects";
import Skills from "./containers/Skills";

export default function App(): JSX.Element {
  return (
    <div
      id="app"
      className={`
        text-neutral-900 
        bg-[url("./assets/img/background/bg-sakura.jpeg")] 
        sm:bg-[url("./assets/img/background/bg-sakura-sm.jpeg")] 
        lg:bg-[url("./assets/img/background/bg-sakura-lg.jpeg")] 
        bg-no-repeat 
        bg-contain
      `}
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
