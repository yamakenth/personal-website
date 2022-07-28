"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SkillsRow_1 = __importDefault(require("../components/Skills/SkillsRow"));
const LANGUAGES = [
    { name: "JavaScript", iconName: "JavaScript" },
    { name: "TypeScript", iconName: "TypeScript" },
    { name: "HTML", iconName: "HTML" },
    { name: "CSS", iconName: "CSS" },
    { name: "Python", iconName: "Python" },
    { name: "R", iconName: "R" },
    { name: "MySQL", iconName: "MySQL" },
    { name: "Java", iconName: "Java" },
];
const FRAMEWORKS = [
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
const MISC = [
    { name: "GraphQL", iconName: "GraphQL" },
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
function Skills() {
    return (react_1.default.createElement("section", { id: "skills", className: "bg-neutral-100" },
        react_1.default.createElement("div", { className: "container py-16" },
            react_1.default.createElement("h2", null, "Skills"),
            react_1.default.createElement("div", { className: "mt-5 px-2 md:px-6" },
                react_1.default.createElement("h3", null, "Languages"),
                react_1.default.createElement(SkillsRow_1.default, { skills: LANGUAGES })),
            react_1.default.createElement("div", { className: "mt-5 px-2 md:px-6" },
                react_1.default.createElement("h3", null, "Frameworks & Databases"),
                react_1.default.createElement(SkillsRow_1.default, { skills: FRAMEWORKS })),
            react_1.default.createElement("div", { className: "mt-5 px-2 md:px-6" },
                react_1.default.createElement("h3", null, "Miscellaneous"),
                react_1.default.createElement(SkillsRow_1.default, { skills: MISC })))));
}
exports.default = Skills;
