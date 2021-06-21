"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// @types/express - bibliotecas de tipagem - devem ser instaladas com o comando "yarn add @types/express -D" desta forma os 3 pontinhos embaixo do from "expresse" desaparece e está tudo ok para continuar.
var app = express_1.default();
// http://localhost:3000 - porta que vai estar o projeto
app.listen(3000, function () { return console.log("Server is running at 3000"); });
