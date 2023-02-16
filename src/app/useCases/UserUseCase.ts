import { IUserUseCase } from "../useCases/IUserUseCase"
import { IUserRepository } from "../repositories/IUserRepository"

export class UserUseCase implements IUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) { }
    async findAll(): Promise<any> {
        const posts = await this.userRepository.findAll()
        if(posts) return posts
        throw new Error("No records found!");
    }
    async findOne(id: number): Promise<any> {
        const post = await this.userRepository.findOne(id)
        if(post) return post
        throw new Error("User not found!");
    }
    async create(data: any): Promise<any> {
        const post = await this.userRepository.create(data)
        if(post) return post
        throw new Error("Invalid User creation request!");
    }
    async update(data: any): Promise<any> {
        const post = await this.userRepository.update(data)
        if(post) return post
        throw new Error("Invalid User update request!");
    }
    async delete(id: number): Promise<any> {
        const postIsDeleted = await this.userRepository.delete(id)
        if(postIsDeleted) return postIsDeleted
        throw new Error("User not found!");
    }

}