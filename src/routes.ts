import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserControllers";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAuthenticated} from "./middlewares/ensureAuthenticated";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";


const router = Router();

const createUserController = new CreateUserController();
const creatTagControler = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();

router.post("/tags", ensureAuthenticated, ensureAdmin, creatTagControler.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/users/compliments/send", listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", listUserReceiveComplimentsController.handle);

export { router };