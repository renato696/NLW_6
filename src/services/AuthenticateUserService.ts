import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

import { compare } from "bcriptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
};

class AuthenticateUserService {

    async execute({email password}: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        //Verificar se email existe
        const user = await usersRepositories.findOne({
            email
        });

        if(!user) {
            throw new Error("Email/Passoword incorrect!")
        };

        //verificar se senha está correta
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Email/Passoword incorrect!")
        };

        //se senha correta, gerar token
        const token = sign(
            {
                email: user.email
            }, 
            "3f843693dbbfbaaed40b216f68f8a024", 
            {
                subject: user.id,
                expiresIn: "1d"
            }
        );
    return token;
    }

}

export { AuthenticateUserService };