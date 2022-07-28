"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
const external_links_1 = require("../../data/external-links");
const NAV_LINKS = [
    {
        href: `mailto:${external_links_1.email}`,
        hoverColor: "hover:text-yellow-500",
        icon: react_1.default.createElement(fa_1.FaEnvelope, { className: "text-2xl" }),
        defaultText: "Email",
        hoverText: external_links_1.email,
    },
    {
        href: external_links_1.linkedIn,
        hoverColor: "hover:text-[#0e76a8]",
        icon: react_1.default.createElement(fa_1.FaLinkedin, { className: "text-2xl" }),
        defaultText: "LinkedIn",
        hoverText: "yamakenth",
    },
    {
        href: external_links_1.gitHub,
        hoverColor: "hover:text-black",
        icon: react_1.default.createElement(fa_1.FaGithubSquare, { className: "text-2xl" }),
        defaultText: "GitHub",
        hoverText: "yamakenth",
    },
    {
        href: external_links_1.resume,
        hoverColor: "hover:text-[#1fa463]",
        icon: react_1.default.createElement(fa_1.FaFileAlt, { className: "text-2xl" }),
        defaultText: "Resume",
        hoverText: "Open in Google Drive",
    },
];
function SocialNavLinks({ isMobile, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null, isMobile ? react_1.default.createElement(HorizonatalNavWithNoText, null) : react_1.default.createElement(VerticalNavWithText, null)));
}
exports.default = SocialNavLinks;
function VerticalNavWithText() {
    return (react_1.default.createElement("ul", { className: "flex flex-col items-center justify-between gap-4 text-xl" }, NAV_LINKS.map((link) => (react_1.default.createElement("li", { key: link.defaultText },
        react_1.default.createElement("a", { href: link.href, target: "_blank", rel: "noreferrer", className: `
              flex gap-2 
              items-center 
              transition-all 
              duration-500 
              group
              ${link.hoverColor} 
            ` },
            link.icon,
            react_1.default.createElement("span", { className: "flex gap-2 items-center group-hover:hidden" }, link.defaultText),
            react_1.default.createElement("span", { className: "\n                hidden \n                group-hover:flex \n                gap-2 \n                items-center \n                group-hover:underline" },
                link.hoverText,
                react_1.default.createElement(fa_1.FaExternalLinkAlt, null))))))));
}
function HorizonatalNavWithNoText() {
    return (react_1.default.createElement("ul", { className: "flex justify-between gap-5 pt-14" }, NAV_LINKS.map((link) => (react_1.default.createElement("li", { key: link.defaultText },
        react_1.default.createElement("a", { href: link.href, target: "_blank", rel: "noreferrer" }, link.icon))))));
}
