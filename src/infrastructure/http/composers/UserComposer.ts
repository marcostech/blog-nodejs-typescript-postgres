import { UserUseCase } from "../../../app/useCases/UserUseCase"
import { UserRepositoryPostgres } from "../../repositories/UserRepositoryPostgres"
import { UserController } from "../controllers/UserController"

const userRepositoryPostgres = new UserRepositoryPostgres()
const userUseCase = new UserUseCase(userRepositoryPostgres)
const userController = new UserController(userUseCase)
export { userController }