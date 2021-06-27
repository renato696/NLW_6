import { Request, Response, NextFunction } from "express";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    
    // receber o token
    const token = request.headers.authorization;
    console.log(token);

    return next();
    // validar se token está preenchido

    // validar se token é valido

    // recuperar informações do usuário

}