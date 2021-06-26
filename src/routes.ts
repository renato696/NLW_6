import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserControllers";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const creatTagControler = new CreateTagController();

router.post("/tags", ensureAdmin, creatTagControler.handle);
router.post("/users", createUserController.handle);


export { router };