"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_scroll_1 = require("react-scroll");
const CONTAINERS = ["home", "about", "skills", "projects", "contact"];
function NavLinks({ isMobile }) {
    return (react_1.default.createElement("ul", { className: `
        flex 
        justify-end 
        items-center 
        gap-8 
        ${isMobile ? "flex-col py-6" : null}
      ` }, CONTAINERS.map((container) => {
        return (react_1.default.createElement("li", { key: container },
            react_1.default.createElement(react_scroll_1.Link, { to: container, smooth: true, offset: -40, className: "\n                pb-1 \n                px-1 \n                font-light \n                uppercase \n                cursor-pointer \n                navlink-effect \n                hover:text-sky-600" }, container)));
    })));
}
exports.default = NavLinks;
