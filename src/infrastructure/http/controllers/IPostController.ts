import { Request, Response } from 'express'

export interface IPostController{
    findAll(response: Response): Promise<any>
    findOne(request: Request, response: Response): Promise<any>
    create(request: Request, response: Response): Promise<any>
    update(request: Request, response: Response): Promise<any>
    delete(request: Request, response: Response): Promise<any>
}