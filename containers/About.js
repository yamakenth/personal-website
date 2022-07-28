"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const fa_1 = require("react-icons/fa");
const DESCRIPTIONS = [
    `I'm a first year masters of computer science student at the University of Pennsylvania. 
  I graduated from the University of Washington with a bachelors degree in industrial 
  engineering and worked as a data analyst at Shopee (the largest e-commerce platform in 
  Southeast Asia).`,
    `I decided to leave Shopee in October of 2021 to explore web development 
  as I became interested in learning how technologies we use everyday function under the hood. 
  After working through the Full Stack JavaScript curriculum offered by the Odin Project, 
  I landed an internship as a frontend engineering intern in May of 2022 at a company called 
  TAO BIN to create a PWA for vending machine management.`,
    `Besides coding, I enjoy going 
  to the gym, reading, following tech news, and watching Formula 1.`,
];
function About() {
    return (react_1.default.createElement("section", { id: "about", className: "bg-neutral-50" },
        react_1.default.createElement("div", { className: "container py-16" },
            react_1.default.createElement("h2", { className: "uppercase" }, "About"),
            react_1.default.createElement("div", { className: "mt-5 flex items-center justify-center gap-12 px-4" },
                react_1.default.createElement("div", { className: "lg:w-2/3" }, DESCRIPTIONS.map((paragraph, idx) => (react_1.default.createElement(react_1.Fragment, { key: idx },
                    react_1.default.createElement("p", { className: "text-justify" }, paragraph),
                    react_1.default.createElement("br", null))))),
                react_1.default.createElement(fa_1.FaCode, { className: "hidden lg:block text-[10rem]" })))));
}
exports.default = About;
