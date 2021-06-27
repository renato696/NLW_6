import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";



export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const { user_id } = request;
    console.log(user_id);

    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne(user_id)

    //verificar se usuario é admin
    const admin = true;

    if(admin) {
        return next();
    }

    return response.status(401).json({
        error: "User is not an admin - Unauthorized"
    });
}