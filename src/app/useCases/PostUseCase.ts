import { IPostUseCase } from "../useCases/IPostUseCase"
import { IPostRepository } from "../repositories/IPostRepository"
import { IUserRepository } from "../repositories/IUserRepository";

export class PostUseCase implements IPostUseCase {
    constructor(
        private postRepository: IPostRepository,
        private userRepository: IUserRepository
    ) { }
    async findAll(): Promise<any> {
        const posts = await this.postRepository.findAll()
        if (posts) return posts
        throw new Error("No records found!");
    }
    async findOne(id: number): Promise<any> {
        const post = await this.postRepository.findOne(id)
        if (post) return post
        throw new Error("Post not found!");
    }
    async create(data: any): Promise<any> {
        const user = await this.userRepository.findOne(parseInt(data.user_id))
        if(!user) throw new Error("User not found!")

        const post = await this.postRepository.create(data)
        if (post) return post
        throw new Error("Invalid Post creation request!");
    }
    async update(data: any): Promise<any> {
        const postExist = await this.postRepository.findOne(parseInt(data.id))
        if (!postExist) throw new Error("Post not found!");

        const user = await this.userRepository.findOne(parseInt(data.user_id))
        if(!user) throw new Error("User not found!")
        
        const post = await this.postRepository.update(data)
        if (post) return post
        throw new Error("Invalid Post update request!");
    }
    async delete(id: number): Promise<any> {
        const postExist = await this.postRepository.findOne(id)
        if (!postExist) throw new Error("Post not found!");
        const postIsDeleted = await this.postRepository.delete(id)
        if (postIsDeleted) return postIsDeleted
        throw new Error("Post not deleted!");
    }

}