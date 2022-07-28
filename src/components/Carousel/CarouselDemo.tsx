import React from "react";

interface CarouselDemoProps {
  demoGif: any;
}

export default function CarouselDemo({
  demoGif,
}: CarouselDemoProps): JSX.Element {
  return (
    <div className="col-span-full md:col-span-4 xl:col-span-5">
      <img
        src={demoGif}
        alt={"Live demo of project"}
        className="rounded-lg xl:h-full"
      />
    </div>
  );
}
