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
const fa_1 = require("react-icons/fa");
const react_scroll_1 = require("react-scroll");
const NavLinks_1 = __importDefault(require("../components/Navs/NavLinks"));
const SideNav_1 = __importDefault(require("../components/Navs/SideNav"));
const SocialNavLinks_1 = __importDefault(require("../components/Navs/SocialNavLinks"));
const NAME = "Ken Yamada";
function Header() {
    const [scrolled, setScrolled] = (0, react_1.useState)(false);
    const [showSideNav, setShowSideNav] = (0, react_1.useState)(false);
    function handleLogoClick() {
        react_scroll_1.animateScroll.scrollToTop();
    }
    window.addEventListener("scroll", () => {
        window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    });
    return (react_1.default.createElement("header", { id: "header", className: `
        fixed 
        top-0 
        left-0 
        w-full 
        z-50 
        ${!scrolled ? "text-neutral-50" : "bg-neutral-50 drop-shadow-md"}
      ` },
        react_1.default.createElement("div", { className: "container py-2 flex justify-between items-center" },
            react_1.default.createElement("h1", { className: "font-semibold tracking-widest cursor-pointer", onClick: handleLogoClick }, NAME),
            react_1.default.createElement("nav", null,
                react_1.default.createElement("div", { className: "hidden md:block" },
                    react_1.default.createElement(NavLinks_1.default, { isMobile: false })),
                react_1.default.createElement("button", { type: "button", onClick: () => setShowSideNav(true), className: "md:hidden flex justify-center items-center" },
                    react_1.default.createElement(fa_1.FaBars, { className: "text-2xl" }))),
            react_1.default.createElement("div", { className: "md:hidden fixed top-0 right-0" },
                react_1.default.createElement(SideNav_1.default, { setShowSideNav: setShowSideNav, showSideNav: showSideNav },
                    react_1.default.createElement(NavLinks_1.default, { isMobile: true }),
                    react_1.default.createElement(SocialNavLinks_1.default, { isMobile: true }))))));
}
exports.default = Header;
