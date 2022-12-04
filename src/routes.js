import {Router} from 'express';
import UsersControllers from './controllers/UsersControllers';

const router = Router();

router.post("/user", UsersControllers.createUser);

router.get("/", UsersControllers.findAllUsers);

export {router};