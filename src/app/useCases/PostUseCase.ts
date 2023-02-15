import { IPostUseCase } from "../useCases/IPostUseCase"
import { IPostRepository } from "../repositories/IPostRepository"

export class PostUseCase implements IPostUseCase {
    constructor(
        private postRepository: IPostRepository
    ) { }
    async findAll(): Promise<any> {
        const posts = await this.postRepository.findAll()
        if(posts) return posts
        throw new Error("No records found!");
    }
    async findOne(id: number): Promise<any> {
        const post = await this.postRepository.findOne(id)
        if(post) return post
        throw new Error("Post not found!");
    }
    async create(data: any): Promise<any> {
        const post = await this.postRepository.create(data)
        if(post) return post
        throw new Error("Invalid Post creation request!");
    }
    async update(data: number): Promise<any> {
        const post = await this.postRepository.update(data)
        if(post) return post
        throw new Error("Invalid Post update request!");
    }
    async delete(id: number): Promise<any> {
        const postIsDeleted = await this.postRepository.delete(id)
        if(postIsDeleted) return postIsDeleted
        throw new Error("Post not found!");
    }

}