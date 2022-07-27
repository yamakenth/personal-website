import React from "react";

import Carousel from "../components/Carousel/Carousel";

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="bg-neutral-50">
      <div className="container py-16">
        <h2 className="mb-5">Projects</h2>
        <Carousel />
      </div>
    </section>
  );
}
