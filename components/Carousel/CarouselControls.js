"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
function CarouselControls({ curSlide, setCurSlide, projectLength, }) {
    function getNextSlide() {
        setCurSlide(curSlide === projectLength - 1 ? 0 : curSlide + 1);
    }
    function getPrevSlide() {
        setCurSlide(curSlide === 0 ? projectLength - 1 : curSlide - 1);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "\n          group \n          md:hover:bg-neutral-900/40 \n          absolute \n          top-0 \n          left-0 \n          h-full \n          w-fit \n          rounded-l-xl \n          flex \n          justify-center \n          items-center" },
            react_1.default.createElement("button", { type: "button", onClick: getPrevSlide },
                react_1.default.createElement(fa_1.FaCaretLeft, { className: "\n              text-5xl \n              text-neutral-500/60 \n              md:group-hover:text-neutral-50/80" }))),
        react_1.default.createElement("div", { className: "\n          group \n          md:hover:bg-neutral-900/40 \n          absolute \n          top-0 \n          right-0 \n          h-full \n          w-fit \n          rounded-r-xl \n          flex \n          justify-center \n          items-center" },
            react_1.default.createElement("button", { type: "button", onClick: getNextSlide },
                react_1.default.createElement(fa_1.FaCaretRight, { className: "\n              text-5xl \n              text-neutral-500/60 \n              md:group-hover:text-neutral-50/80" })))));
}
exports.default = CarouselControls;
