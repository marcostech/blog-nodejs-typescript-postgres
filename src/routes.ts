import { Router } from 'express';
import { userController } from "./infrastructure/http/composers/UserComposer"
import { postController } from "./infrastructure/http/composers/PostComposer"

const router = Router();
//User router
router.get("/users", async (req, res) => { userController.findAll(res) });

router.get("/user/find/:id", async (req, res) => { userController.findOne(req, res) });

router.post("/user/create", async (req, res) => { userController.create(req, res) });

router.put("/user/update", async (req, res) => { userController.update(req, res) });

router.delete("/user/delete/:id", async (req, res) => { userController.delete(req, res) });

//Post router
router.get("/posts", async (req, res) => { postController.findAll(res) });

router.get("/post/find/:id", async (req, res) => { postController.findOne(req, res) });

router.post("/post/create", async (req, res) => { postController.create(req, res) });

router.put("/post/update", async (req, res) => { postController.update(req, res) });

router.delete("/post/delete/:id", async (req, res) => { postController.delete(req, res) });

export { router };