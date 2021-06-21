import express from "express";

// @types/express - bibliotecas de tipagem - devem ser instaladas com o comando "yarn add @types/express -D" desta forma os 3 pontinhos embaixo do from "expresse" desaparece e está tudo ok para continuar.
const app = express();

// http://localhost:3000 - porta que vai estar o projeto
app.listen(3000,() => console.log("Server is running at 3000"));