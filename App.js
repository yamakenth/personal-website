"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const About_1 = __importDefault(require("./containers/About"));
const Contact_1 = __importDefault(require("./containers/Contact"));
const Footer_1 = __importDefault(require("./containers/Footer"));
const Header_1 = __importDefault(require("./containers/Header"));
const Home_1 = __importDefault(require("./containers/Home"));
const Projects_1 = __importDefault(require("./containers/Projects"));
const Skills_1 = __importDefault(require("./containers/Skills"));
function App() {
    return (react_1.default.createElement("div", { id: "app", className: `
        text-neutral-900 
        bg-[url("./assets/img/background/bg-sakura.jpeg")] 
        sm:bg-[url("./assets/img/background/bg-sakura-sm.jpeg")] 
        lg:bg-[url("./assets/img/background/bg-sakura-lg.jpeg")] 
        bg-no-repeat 
        bg-contain
      ` },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(Home_1.default, null),
        react_1.default.createElement(About_1.default, null),
        react_1.default.createElement(Skills_1.default, null),
        react_1.default.createElement(Projects_1.default, null),
        react_1.default.createElement(Contact_1.default, null),
        react_1.default.createElement(Footer_1.default, null)));
}
exports.default = App;
