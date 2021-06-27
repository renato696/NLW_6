import { getCustomRepositoriy } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
};

class CreateComplimentService {

    async execute ({tag_id, user_sender, user_receiver, message} : IComplimentRequest) {
        const complimentsRepositories = getCustomRepositoriy(ComplimentsRepositories);
        const usersRepositories = getCustomRepositoriy(UsersRepositories);

        if(user_sender === user_receiver) {
            throw new Error("Invalid - Same Sender and Receiver")
        };

        const userReceiverExists = await usersRepositories.findOne(user_receiver);

        if (!userReceiverExists) {
            throw new Error("User Receiver does not exist!");
        };

        const compliment = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        });

        await complimentsRepositories.save(compliment);

        return compliment;

    };

}

export { CreateComplimentService };