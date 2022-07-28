"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
const react_scroll_1 = require("react-scroll");
const external_links_1 = require("../data/external-links");
const DESCRIPTION = "Hello! My name is Ken and I'm a self-taught full-stack web developer.";
function Home() {
    return (react_1.default.createElement("section", { id: "home", className: "bg-gradient-to-b from-black/70 via-black/50 to-neutral-100/30" },
        react_1.default.createElement("div", { className: "\n          container \n          h-[21rem] \n          xxs:h-96 \n          xs:h-[26rem] \n          sm:h-80 \n          md:h-[50vw] \n          xl:h-screen \n          py-3 \n          flex \n          flex-col \n          items-center \n          justify-end \n          sm:justify-center \n          sm:-translate-x-[15%]" },
            react_1.default.createElement("div", { className: "\n            flex \n            flex-col \n            justify-center \n            items-center \n            gap-2 \n            xl:gap-6 \n            border-2 \n            xl:border-3 \n            border-solid \n            rounded-2xl \n            border-neutral-50/50 \n            p-2 \n            xl:p-8" },
                react_1.default.createElement("h4", { className: "text-neutral-50 text-center w-72 xl:w-96" }, DESCRIPTION),
                react_1.default.createElement("div", { className: "flex justify-center items-center" },
                    react_1.default.createElement("a", { href: external_links_1.resume, target: "_blank", rel: "noreferrer", className: "btn btn-primary" },
                        "Resume\u00A0",
                        react_1.default.createElement(fa_1.FaExternalLinkAlt, null)),
                    react_1.default.createElement(react_scroll_1.Link, { to: "projects", smooth: true, offset: -40, className: "btn btn-secondary" }, "Projects"))))));
}
exports.default = Home;
