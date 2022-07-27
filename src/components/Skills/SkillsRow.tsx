import React from "react";

import Icon, { IIconName } from "../Icon/Icon";

export interface ISkill {
  name: string;
  iconName: IIconName;
}

interface SkillsRowProps {
  skills: ISkill[];
}

export default function SkillsRow({ skills }: SkillsRowProps): JSX.Element {
  return (
    <div className="mt-2 grid gap-4 grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      {skills.map((skill) => {
        return (
          <div
            key={skill.name}
            className="flex flex-col justify-between items-center gap-2 hover:-translate-y-2"
          >
            <div
              className="
                h-16 
                sm:h-24 
                aspect-square 
                flex 
                justify-center 
                items-center 
                bg-white 
                rounded-md 
                drop-shadow-md 
                p-2"
            >
              <Icon name={skill.iconName} />
            </div>
            <p className="text-sm sm:text-base">{skill.name}</p>
          </div>
        );
      })}
    </div>
  );
}
