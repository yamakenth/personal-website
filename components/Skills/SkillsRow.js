"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icon_1 = __importDefault(require("../Icon/Icon"));
function SkillsRow({ skills }) {
    return (react_1.default.createElement("div", { className: "mt-2 grid gap-4 grid-cols-4 md:grid-cols-6 lg:grid-cols-8" }, skills.map((skill) => {
        return (react_1.default.createElement("div", { key: skill.name, className: "flex flex-col justify-between items-center gap-2 hover:-translate-y-2" },
            react_1.default.createElement("div", { className: "\n                h-16 \n                sm:h-24 \n                aspect-square \n                flex \n                justify-center \n                items-center \n                bg-white \n                rounded-md \n                drop-shadow-md \n                p-2" },
                react_1.default.createElement(Icon_1.default, { name: skill.iconName })),
            react_1.default.createElement("p", { className: "text-sm sm:text-base" }, skill.name)));
    })));
}
exports.default = SkillsRow;
