import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    
    // receber o token
    const authToken = request.headers.authorization;
    
    // validar se token está preenchido
    if(!authToken) {
        return response.status(401).end();
    };

    // validar se token é valido
    const [,token] = authToken.split(" ");

    try {
        const decode = verify(token, "3f843693dbbfbaaed40b216f68f8a024");
        return next();
    }catch(err) {
        return response.status(401).end();
    };

    // recuperar informações do usuário


}