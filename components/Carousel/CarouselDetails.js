"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
function CarouselDetails({ name, summary, features, technologies, demoLink, repoLink, }) {
    return (react_1.default.createElement("div", { className: "\n        col-span-full \n        md:col-span-4 \n        xl:col-span-3 \n        h-[33rem] \n        xxs:h-[28rem] \n        xs:h-[24rem] \n        sm:h-[18rem] \n        md:h-[24rem] \n        xl:h-auto" },
        react_1.default.createElement("div", { className: "h-full flex flex-col justify-between items-center" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h3", { className: "underline font-bold mb-2" }, name),
                react_1.default.createElement("p", { className: "mb-1" },
                    react_1.default.createElement("span", { className: "font-bold" }, "Summary:\u00A0"),
                    summary),
                react_1.default.createElement("p", { className: "mb-1" },
                    react_1.default.createElement("span", { className: "font-bold" }, "Features:\u00A0"),
                    features),
                react_1.default.createElement("p", { className: "mb-1" },
                    react_1.default.createElement("span", { className: "font-bold" }, "Technologies Used:\u00A0"),
                    technologies)),
            react_1.default.createElement("div", { className: "flex justify-center items-center" },
                react_1.default.createElement("a", { href: demoLink, target: "_blank", rel: "noreferrer", className: "btn btn-secondary" },
                    react_1.default.createElement(fa_1.FaEye, null),
                    "\u00A0Demo"),
                react_1.default.createElement("a", { href: repoLink, target: "_blank", rel: "noreferrer", className: "btn btn-secondary" },
                    react_1.default.createElement(fa_1.FaGithub, null),
                    "\u00A0Repo")))));
}
exports.default = CarouselDetails;
