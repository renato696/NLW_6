import { Request, Response, NextFunction } from "express";



export function ensureAdmin(resquest: Request, response: Response, next: NextFunction) {
    //verificar se usuario é admin
    const admin = true;

    if(admin) {
        return next();
    }

    return response.status(401).json({
        error: "User is not an admin - Unauthorized"
    });
}