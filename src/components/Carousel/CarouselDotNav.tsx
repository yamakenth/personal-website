import React from "react";
import { FaCircle } from "react-icons/fa";

interface CarouselDotsNavProps {
  curSlide: number;
  setCurSlide: React.Dispatch<React.SetStateAction<number>>;
  projectLength: number;
}

export default function CarouselDotsNav({
  curSlide,
  setCurSlide,
  projectLength,
}: CarouselDotsNavProps): JSX.Element {
  return (
    <div className="col-span-full flex items-center justify-center gap-3 py-3">
      {[...Array(projectLength)].map((_element, i) => {
        return (
          <button type="button" key={i} onClick={() => setCurSlide(i)}>
            <FaCircle
              className={`
                text-[0.5rem] 
                text-neutral-500 
                hover:text-neutral-400 
                hover:scale-125 
                ${i === curSlide ? "text-neutral-400 scale-125" : null}
              `}
            />
          </button>
        );
      })}
    </div>
  );
}
