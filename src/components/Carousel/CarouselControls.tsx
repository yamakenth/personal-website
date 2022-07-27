import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

interface CarouselControlsProps {
  curSlide: number;
  setCurSlide: React.Dispatch<React.SetStateAction<number>>;
  projectLength: number;
}

export default function CarouselControls({
  curSlide,
  setCurSlide,
  projectLength,
}: CarouselControlsProps): JSX.Element {
  function getNextSlide(): void {
    setCurSlide(curSlide === projectLength - 1 ? 0 : curSlide + 1);
  }

  function getPrevSlide(): void {
    setCurSlide(curSlide === 0 ? projectLength - 1 : curSlide - 1);
  }

  return (
    <>
      {/* left */}
      <div
        className="
          group 
          md:hover:bg-neutral-900/40 
          absolute 
          top-0 
          left-0 
          h-full 
          w-fit 
          rounded-l-xl 
          flex 
          justify-center 
          items-center"
      >
        <button type="button" onClick={getPrevSlide}>
          <FaCaretLeft
            className="
              text-5xl 
              text-neutral-500/60 
              md:group-hover:text-neutral-50/80"
          />
        </button>
      </div>

      {/* right */}
      <div
        className="
          group 
          md:hover:bg-neutral-900/40 
          absolute 
          top-0 
          right-0 
          h-full 
          w-fit 
          rounded-r-xl 
          flex 
          justify-center 
          items-center"
      >
        <button type="button" onClick={getNextSlide}>
          <FaCaretRight
            className="
              text-5xl 
              text-neutral-500/60 
              md:group-hover:text-neutral-50/80"
          />
        </button>
      </div>
    </>
  );
}
