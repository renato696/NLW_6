import { Request, Response, NextFunction } from "express";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    
    // receber o token
    const token = request.headers.authorization;
    
    // validar se token está preenchido
    if(!token) {
        return response.status(401).end();
    }

    return next();


    // validar se token é valido

    // recuperar informações do usuário

}