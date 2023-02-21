import { IPostUseCase } from "../../../app/useCases/IPostUseCase";
import { IPostController } from "./IPostController";
import { Request, Response } from 'express'

export class PostController implements IPostController {
    constructor(
        private postUseCase: IPostUseCase
    ) { }
    async findAll(response: Response): Promise<any> {
        try {
            const posts = await this.postUseCase.findAll()
            return response.status(200).send(posts)
        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
    async findOne(request: Request, response: Response): Promise<any> {
        try {
            const post = await this.postUseCase.findOne(parseInt(request.params.id))
            return response.status(200).send(post)
        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
    async create(request: Request, response: Response): Promise<any> {
        try {
            const post = await this.postUseCase.create(request.body)
            return response.status(200).send(post)
        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
    async update(request: Request, response: Response): Promise<any> {
        try {
            const post = await this.postUseCase.update(request.body)
            return response.status(200).send(post)
        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }

    async delete(request: Request, response: Response): Promise<any> {
        try {
            const postDeleted = await this.postUseCase.delete(parseInt(request.params.id))
            return response.status(200).send(postDeleted)
        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}