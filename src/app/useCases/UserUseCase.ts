import { IUserUseCase } from "../useCases/IUserUseCase"
import { IUserRepository } from "../repositories/IUserRepository"

export class UserUseCase implements IUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) { }
    async findAll(): Promise<any> {
        const users = await this.userRepository.findAll()
        if (users) return users
        throw new Error("No records found!");
    }

    async findOne(id: number): Promise<any> {
        const user = await this.userRepository.findOne(id)
        if (user) return user
        throw new Error("User not found!");
    }

    async create(data: any): Promise<any> {
        const user = await this.userRepository.create(data)
        if (user) return user
        throw new Error("Invalid User creation request!");
    }

    async update(data: any): Promise<any> {
        const userExist = await this.userRepository.findOne(parseInt(data.id))
        if (!userExist) throw new Error("User not found!");
        const user = await this.userRepository.update(data)
        if (user) return user
        throw new Error("Invalid User update request!");
    }

    async delete(id: number): Promise<Boolean> {
        const userExist = await this.userRepository.findOne(id)
        if (!userExist) throw new Error("User not found!");
        const userIsDeleted = await this.userRepository.delete(id)
        if (userIsDeleted) return userIsDeleted
        throw new Error("User not deleted!");
    }
}