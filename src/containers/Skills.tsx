// @ts-nocheck
import React from "react";

import Icon, { TIconName } from "../components/Icon/Icon";

interface ISkillArg {
  name: string;
  iconName: TIconName;
}

const LANGUAGES: ISkillArg[] = [
  { name: "JavaScript", iconName: "JavaScript" },
  { name: "HTML", iconName: "HTML" },
  { name: "CSS", iconName: "CSS" },
  { name: "Python", iconName: "Python" },
  { name: "R", iconName: "R" },
  { name: "MySQL", iconName: "MySQL" },
  { name: "Java", iconName: "Java" },
];

const FRAMEWORKS: ISkillArg[] = [
  { name: "React.js", iconName: "ReactJS" },
  { name: "Node.js", iconName: "NodeJS" },
  { name: "Express.js", iconName: "Express" },
  { name: "Passport.js", iconName: "PassportJS" },
  { name: "MongoDB", iconName: "MongoDB" },
  { name: "Mongoose", iconName: "Mongoose" },
  { name: "Pug", iconName: "Pug" },
  { name: "Bootstrap", iconName: "Bootstrap" },
  { name: "Tailwind", iconName: "Tailwind" },
];

const MISC: ISkillArg[] = [
  { name: "Git", iconName: "Git" },
  { name: "GitHub", iconName: "GitHub" },
  { name: "npm", iconName: "NPM" },
  { name: "Webpack", iconName: "Webpack" },
  { name: "Heroku", iconName: "Heroku" },
  { name: "Jest", iconName: "Jest" },
  { name: "Firebase", iconName: "Firebase" },
  { name: "Tableau", iconName: "Tableau" },
  { name: "Power BI", iconName: "PowerBI" },
];

// create each skills subsection
const SkillsRow = (props) => {
  const skills = props.skills;

  return (
    <div className="mt-2 grid gap-4 grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      {skills.map((skill) => {
        return (
          <div
            key={skill.name}
            className="flex flex-col justify-between items-center gap-2 hover:-translate-y-2"
          >
            <div className="h-16 sm:h-24 aspect-square flex justify-center items-center bg-white rounded-md drop-shadow-md p-2">
              <Icon name={skill.iconName} />
            </div>
            <p className="text-sm sm:text-base">{skill.name}</p>
          </div>
        );
      })}
    </div>
  );
};

// create skills section
const Skills = () => {
  return (
    <section id="skills" className="bg-neutral-100">
      <div className="container py-16">
        <h2>Skills</h2>
        <div className="mt-5 px-2 md:px-6">
          <h3>Languages</h3>
          <SkillsRow skills={LANGUAGES} />
        </div>
        <div className="mt-5 px-2 md:px-6">
          <h3>Frameworks &#38; Databases</h3>
          <SkillsRow skills={FRAMEWORKS} />
        </div>
        <div className="mt-5 px-2 md:px-6">
          <h3>Miscellaneous</h3>
          <SkillsRow skills={MISC} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
