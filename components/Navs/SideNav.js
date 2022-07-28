"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
function SideNav({ showSideNav, setShowSideNav, children, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `
          bg-white 
          text-neutral-900 
          absolute 
          top-0 
          right-0 
          px-6 
          py-3 
          min-w-[50vw] 
          h-screen 
          flex 
          flex-col 
          items-center 
          justify-start 
          z-50
          ease-linear 
          duration-500 
          ${showSideNav ? "translate-x-0" : "translate-x-[100vw]"} 
        ` },
            react_1.default.createElement("button", { type: "button", className: "self-start", onClick: () => setShowSideNav(false) },
                react_1.default.createElement(fa_1.FaTimes, { className: "text-2xl" })),
            children),
        react_1.default.createElement("div", { className: `
          absolute 
          top-0 
          right-0 
          h-screen 
          w-screen 
          bg-neutral-900/70 
          z-40 
          ${showSideNav ? "block" : "hidden"}
        `, onClick: () => setShowSideNav(false) })));
}
exports.default = SideNav;
