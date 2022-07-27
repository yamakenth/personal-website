import React from "react";

import SkillsRow, { ISkill } from "../components/Skills/SkillsRow";

const LANGUAGES: ISkill[] = [
  { name: "JavaScript", iconName: "JavaScript" },
  { name: "HTML", iconName: "HTML" },
  { name: "CSS", iconName: "CSS" },
  { name: "Python", iconName: "Python" },
  { name: "R", iconName: "R" },
  { name: "MySQL", iconName: "MySQL" },
  { name: "Java", iconName: "Java" },
];

const FRAMEWORKS: ISkill[] = [
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

const MISC: ISkill[] = [
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

export default function Skills(): JSX.Element {
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
}
