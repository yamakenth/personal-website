import React from "react";

import SocialNavLinks from "../components/Navs/SocialNavLinks";

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className="bg-neutral-100">
      <div className="container py-16 flex flex-col items-center justify-between gap-10">
        <h2 className="self-start">Contact</h2>
        <SocialNavLinks isMobile={false} />
      </div>
    </section>
  );
}
