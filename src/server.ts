import express from "express";

// @types/express - bibliotecas de tipagem - devem ser instaladas com o comando "yarn add @types/express -D" desta forma os 3 pontinhos embaixo do from "expresse" desaparece e está tudo ok para continuar.
const app = express();

/**
 * Metodos para utilizarmos com o http:
 * GET => buscar uma informação, e.g. listagem de produtos, listagem de usuarios.
 * 
 * POST => inserir ou criar uma informação dentro da API, e.g. criacao de usuario, criacao de tag.
 * 
 * PUT => alterar uma informação, e.g. alterar dados do usuario, email, senha...
 * 
 * DELETE => remover uma informacao, e.g. remover produto, usuario.
 * 
 * PATCH => alterar uma informação específica, e.g. alterar somente a senha do usuario, o avatar do usuario.
 */

app.get();

// http://localhost:3000 - porta que vai estar o projeto
app.listen(3000,() => console.log("Server is running at 3000"));