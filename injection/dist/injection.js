"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listener_1 = __importDefault(require("./listener"));
(0, listener_1.default)('log', (payload) => {
    console.log(payload);
});
console.log('Injection script loaded!');
