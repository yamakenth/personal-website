import React from "react";

interface CarouselDemoProps {
  demoSrc: string;
}

export default function CarouselDemo({
  demoSrc,
}: CarouselDemoProps): JSX.Element {
  return (
    <div className="col-span-full md:col-span-4 xl:col-span-5">
      <img
        src={demoSrc}
        alt={`Live demo of project`}
        className="rounded-lg xl:h-full"
      />
    </div>
  );
}
