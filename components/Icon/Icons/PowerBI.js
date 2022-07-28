"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function PowerBI() {
    return (react_1.default.createElement("svg", { width: "70", height: "70", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("filter", { id: "filter0_f" },
                react_1.default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                react_1.default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                react_1.default.createElement("feGaussianBlur", { stdDeviation: "0.4", result: "effect1_foregroundBlur" })),
            react_1.default.createElement("filter", { id: "filter1_f" },
                react_1.default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                react_1.default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                react_1.default.createElement("feGaussianBlur", { stdDeviation: "4", result: "effect1_foregroundBlur" })),
            react_1.default.createElement("linearGradient", { id: "paint0_linear", x1: "46.6667", y1: "-8.97795e-07", x2: "88.8653", y2: "89.4466", gradientUnits: "userSpaceOnUse" },
                react_1.default.createElement("stop", { stopColor: "#E6AD10" }),
                react_1.default.createElement("stop", { offset: "1", stopColor: "#C87E0E" })),
            react_1.default.createElement("linearGradient", { id: "paint1_linear", x1: "31.9974", y1: "24", x2: "67.4859", y2: "92.8262", gradientUnits: "userSpaceOnUse" },
                react_1.default.createElement("stop", { stopColor: "#F6D751" }),
                react_1.default.createElement("stop", { offset: "1", stopColor: "#E6AD10" })),
            react_1.default.createElement("linearGradient", { id: "paint2_linear", x1: "11.9974", y1: "48", x2: "31.6083", y2: "94.4775", gradientUnits: "userSpaceOnUse" },
                react_1.default.createElement("stop", { stopColor: "#F9E589" }),
                react_1.default.createElement("stop", { offset: "1", stopColor: "#F6D751" })),
            react_1.default.createElement("clipPath", { id: "clip0" },
                react_1.default.createElement("rect", { width: "96", height: "96", fill: "white" }))),
        react_1.default.createElement("g", { clipPath: "url(#clip0)" },
            react_1.default.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "12", y: "0", width: "72", height: "96" },
                react_1.default.createElement("path", { d: "M52 4C52 1.79086 53.7909 0 56 0H80C82.2091 0 84 1.79086 84 4V92C84 94.2091 82.2091 96 80 96H16C13.7909 96 12 94.2091 12 92V52C12 49.7909 13.7909 48 16 48H32.0001V28C32.0001 25.7909 33.791 24 36.0001 24H52V4Z", fill: "white" })),
            react_1.default.createElement("g", { mask: "url(#mask0)" },
                react_1.default.createElement("path", { d: "M84 0L84 96H52L52 0H84Z", fill: "url(#paint0_linear)" }),
                react_1.default.createElement("g", { filter: "url(#filter0_f)" },
                    react_1.default.createElement("path", { d: "M64 28.4V96.4H32V24.4H60C62.2091 24.4 64 26.1909 64 28.4Z", fill: "black", fillOpacity: "0.2" })),
                react_1.default.createElement("g", { filter: "url(#filter1_f)" },
                    react_1.default.createElement("path", { d: "M64 30V98H32V26H60C62.2091 26 64 27.7909 64 30Z", fill: "black", fillOpacity: "0.18" })),
                react_1.default.createElement("path", { d: "M64 28V96H32V24H60C62.2091 24 64 25.7909 64 28Z", fill: "url(#paint1_linear)" }),
                react_1.default.createElement("path", { d: "M12 48V96H44V52C44 49.7909 42.2091 48 40 48H12Z", fill: "url(#paint2_linear)" })))));
}
exports.default = PowerBI;
