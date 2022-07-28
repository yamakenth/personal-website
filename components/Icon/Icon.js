"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icons_1 = __importDefault(require("./Icons"));
function Icon({ name }) {
    const Icon = Icons_1.default[name];
    return react_1.default.createElement(Icon, null);
}
exports.default = Icon;
