"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
function CarouselDotsNav({ curSlide, setCurSlide, projectLength, }) {
    return (react_1.default.createElement("div", { className: "col-span-full flex items-center justify-center gap-3 py-3" }, [...Array(projectLength)].map((_element, i) => {
        return (react_1.default.createElement("button", { type: "button", key: i, onClick: () => setCurSlide(i) },
            react_1.default.createElement(fa_1.FaCircle, { className: `
                text-[0.5rem] 
                text-neutral-500 
                hover:text-neutral-400 
                hover:scale-125 
                ${i === curSlide ? "text-neutral-400 scale-125" : null}
              ` })));
    })));
}
exports.default = CarouselDotsNav;
