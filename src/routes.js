import { Router } from 'express';
import UsersControllers from './controllers/UsersControllers';
import PostControllers from './controllers/PostControllers';

const router = Router();
//User router
router.get("/users", UsersControllers.findAllUsers);

router.get("/user/:id", UsersControllers.findUser);

router.post("/user", UsersControllers.createUser);

router.put("/user/:id", UsersControllers.updateUser);

router.delete("/user/:id", UsersControllers.deleteUser);

//Post router
router.post("/post/user/:id", PostControllers.createPost);

router.get("/posts", PostControllers.findAllPosts);

router.put("/post/user/:id", PostControllers.updatePost);

router.delete("/post/user/:id", PostControllers.deletePost);

export { router };