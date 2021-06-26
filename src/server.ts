import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes";

import "./database";

// @types/express - bibliotecas de tipagem - devem ser instaladas com o comando "yarn add @types/express -D" desta forma os 3 pontinhos embaixo do from "expresse" desaparece e está tudo ok para continuar.
const app = express();

app.use(express.json());

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

/**
 * o browser só consegue acessar requisições GET. Ele não consegue acessar requisições POST.
 */
/**
 * Tipos de parametros que podemos utilizar em nossas requisições:
 * 1- Routes Params => parametros que fazem parte da nossa rota, e.g. http://localhost:3000/produtos/1234...
 * 
 * 2- Query Params => parametros que fazem parte de uma query, buscar alguma coisa, e.g. http://localhost:3000/produtos?name=teclado&description=tecladobom.... a "?" marca a query, e o "&" o refinamento da busca. Query Params são parametros não obrigatórios. Eles não vem explicito na rota, como os Routes Params.
 * 
 * 3- Body Params => utilizados nos metodos POST, PUT, PATCH, eles veem no corpo da requisição. Não se utiliza Body Params para o metodo GET - está errado. Se eu quero inserir algo com a minha requisição, eu envio um objeto: 
 * {
 * "name": "teclado",
 * "description": "teclado bom"
 * }
app.get("./test", (request, response) => {
    // Request => Entrando
   // Response => Saindo
    return response.send("Olá NLW");
});
app.post("./test-post", (request, response) => {
    return response.send("Olá NLW método Post");
});
*/

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    };

    return response.status(500).json({
        status: "error",
        message: "Internal Sever Error"
    })
});

// http://localhost:3000 - porta que vai estar o projeto
app.listen(3000,() => console.log("Server is running at 3000"));