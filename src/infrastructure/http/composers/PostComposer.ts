import { PostUseCase } from "../../../app/useCases/PostUseCase"
import { PostRepositoryPostgres } from "../../repositories/PostRepositoryPostgres"
import { UserRepositoryPostgres } from "../../repositories/UserRepositoryPostgres"
import { PostController } from "../controllers/PostController"

const postRepositoryPostgres = new PostRepositoryPostgres()
const userRepositoryPostgres = new UserRepositoryPostgres()
const postUseCase = new PostUseCase(postRepositoryPostgres, userRepositoryPostgres)
const postController = new PostController(postUseCase)

export { postController }