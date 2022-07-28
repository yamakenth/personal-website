"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function CarouselDemo({ demoGif, }) {
    return (react_1.default.createElement("div", { className: "col-span-full md:col-span-4 xl:col-span-5" },
        react_1.default.createElement("img", { src: demoGif, alt: "Live demo of project", className: "rounded-lg xl:h-full" })));
}
exports.default = CarouselDemo;
