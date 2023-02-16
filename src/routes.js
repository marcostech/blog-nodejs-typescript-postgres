import { Router } from 'express';
import { userController } from "../src/infrastructure/http/composers/UserComposer"

import PostControllers from './controllers/PostControllers';

const router = Router();
//User router
router.get("/users", userController.findAll());

router.get("/user/:id", userController.findOne());

router.post("/user", userController.create());

router.put("/user/:id", userController.update());

router.delete("/user/:id", userController.delete());

//Post router
router.post("/post/user/:id", PostControllers.createPost);

router.get("/post/user/:id", PostControllers.findPost);

router.get("/posts", PostControllers.findAllPosts);

router.put("/post/user/:id", PostControllers.updatePost);

router.delete("/post/user/:id", PostControllers.deletePost);

export { router };