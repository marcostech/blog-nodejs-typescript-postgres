import { UserUseCase } from "../../app/useCases/UserUseCase"
import { UserRepositoryInMemory } from "../../infrastructure/repositories/UserRepositoryInMemory"
import { users } from "../db.json"

const userRepositoryInMemory = new UserRepositoryInMemory(users)
const userUseCase = new UserUseCase(userRepositoryInMemory)

it('sample teste', async () => {
    const sampleTeste = await userUseCase.findAll()
    expect(sampleTeste[0].id).toBe(5)
})