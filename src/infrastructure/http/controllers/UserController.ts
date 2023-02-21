import { IUserUseCase } from "../../../app/useCases/IUserUseCase";
import { IUserController } from "./IUserController";
import { Request, Response } from 'express'

export class UserController implements IUserController {
    constructor(
        private userUseCase: IUserUseCase
    ) { }
    async findAll(response: Response): Promise<any> {
        try {
            const users = await this.userUseCase.findAll()
            return response.status(200).send(users)
        } catch (error: any) {
            console.log(error);
            
            return response.status(400).json({ message: error.message })
        }
    }
    async findOne(request: Request, response: Response): Promise<any> {
        try {
            const user = await this.userUseCase.findOne(parseInt(request.params.id))
            return response.status(200).send(user)
        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
    async create(request: Request, response: Response): Promise<any> {
        try {
            const user = await this.userUseCase.create(request.body)
            return response.status(200).send(user)
        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
    async update(request: Request, response: Response): Promise<any> {
        try {
            const user = await this.userUseCase.update(request.body)
            return response.status(200).send(user)
        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }

    async delete(request: Request, response: Response): Promise<any> {
        try {
            const userDeleted = await this.userUseCase.delete(parseInt(request.params.id))
            return response.status(200).send(userDeleted)
        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}