import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserControllers";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const createUserController = new CreateUserController();
const creatTagControler = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

router.post("/tags", ensureAdmin, creatTagControler.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);


export { router };