"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SocialNavLinks_1 = __importDefault(require("../components/Navs/SocialNavLinks"));
function Contact() {
    return (react_1.default.createElement("section", { id: "contact", className: "bg-neutral-100" },
        react_1.default.createElement("div", { className: "container py-16 flex flex-col items-center justify-between gap-10" },
            react_1.default.createElement("h2", { className: "self-start" }, "Contact"),
            react_1.default.createElement(SocialNavLinks_1.default, { isMobile: false }))));
}
exports.default = Contact;
