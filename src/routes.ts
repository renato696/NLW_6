import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserControllers";
import { CreateTagController } from "./controllers/CreateTagController";

const router = Router();

const createUserController = new CreateUserController();
const creatTagControler = new CreateTagController();

router.post("/users", createUserController.handle);
router.post("/tags", creatTagControler.handle);

export { router };