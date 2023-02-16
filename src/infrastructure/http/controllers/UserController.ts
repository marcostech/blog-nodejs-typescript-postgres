import { IUserUseCase } from "../../../app/useCases/IUserUseCase";
import { IUserController } from "./IUserController";
import { Request, Response } from 'express'

export class UserController implements IUserController {
    constructor(
        private userUseCase: IUserUseCase
    ) { }
    async findAll(request: Request, response: Response): Promise<any> {
        try {
            const users = await this.userUseCase.findAll()
            return response.send(users).sendStatus(200)
        } catch (error) {
            return response.json({ message: "Error on request." }).sendStatus(400)
        }
    }
    async findOne(request: Request, response: Response): Promise<any> {
        try {
            const user = await this.userUseCase.findOne(parseInt(request.params.id))
            return response.send(user).sendStatus(200)
        } catch (error) {
            return response.json({ message: "Error on request." }).sendStatus(400)
        }
    }
    async create(request: Request, response: Response): Promise<any> {
        try {
            const user = await this.userUseCase.create(request.body)
            return response.send(user).sendStatus(200)
        } catch (error) {
            return response.json({ message: "Error on request." }).sendStatus(400)
        }
    }
    async update(request: Request, response: Response): Promise<any> {
        try {
            const user = await this.userUseCase.update(request.body)
            return response.send(user).sendStatus(200)
        } catch (error) {
            return response.json({ message: "Error on request." }).sendStatus(400)
        }
    }

    async delete(request: Request, response: Response): Promise<any> {
        try {
            const userDeleted = await this.userUseCase.delete(parseInt(request.params.id))
            return response.send(userDeleted).sendStatus(200)
        } catch (error) {
            return response.json({ message: "Error on request." }).sendStatus(400)
        }
    }
}