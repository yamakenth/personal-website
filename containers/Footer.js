"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
const SOURCE_CODE = "https://github.com/yamakenth/personal-website";
const COPYRIGHT = `Copyright © ${new Date().getFullYear()} yamakenth`;
function Footer() {
    return (react_1.default.createElement("footer", { id: "footer", className: "bg-neutral-100" },
        react_1.default.createElement("div", { className: "container flex justify-center items-center py-8" },
            react_1.default.createElement("p", { className: "flex justify-start text-sm" },
                COPYRIGHT,
                react_1.default.createElement("a", { href: SOURCE_CODE, target: "_blank", rel: "noreferrer", className: "flex gap-1 items-center ml-2" },
                    react_1.default.createElement(fa_1.FaGithub, null))))));
}
exports.default = Footer;
