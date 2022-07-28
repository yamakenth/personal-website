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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const CarouselControls_1 = __importDefault(require("./CarouselControls"));
const CarouselDemo_1 = __importDefault(require("./CarouselDemo"));
const CarouselDetails_1 = __importDefault(require("./CarouselDetails"));
const CarouselDotNav_1 = __importDefault(require("./CarouselDotNav"));
function Carousel({ projects }) {
    const [curSlide, setCurSlide] = (0, react_1.useState)(0);
    const curProject = projects[curSlide];
    return (react_1.default.createElement("div", { className: "\n      border \n      border-solid \n      border-neutral-200 \n      rounded-xl \n      drop-shadow-md \n      p-6 \n      lg:px-12 \n      max-w-5xl \n      mx-auto \n      grid \n      grid-cols-8 \n      gap-x-6 \n      gap-y-6 \n      relative" },
        react_1.default.createElement(CarouselDemo_1.default, { demoGif: curProject.demoGif }),
        react_1.default.createElement(CarouselDetails_1.default, { name: curProject.name, summary: curProject.summary, features: curProject.features, technologies: curProject.technologies, demoLink: curProject.demoLink, repoLink: curProject.repoLink }),
        react_1.default.createElement(CarouselDotNav_1.default, { curSlide: curSlide, setCurSlide: setCurSlide, projectLength: projects.length }),
        react_1.default.createElement(CarouselControls_1.default, { curSlide: curSlide, setCurSlide: setCurSlide, projectLength: projects.length })));
}
exports.default = Carousel;
