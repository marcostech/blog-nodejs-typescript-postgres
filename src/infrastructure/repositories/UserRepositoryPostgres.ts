import { IUserRepository } from "../../app/repositories/IUserRepository";
import { prisma } from "../../../prisma/prisma"

export class UserRepositoryPostgres implements IUserRepository {
    async findAll(): Promise<any> {
        const users = await prisma.user.findMany()
        if (users) return users
        throw new Error("DB error.");
    }
    async findOne(id: number): Promise<any> {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })
        if (user) return user
        return null
    }
    async create(data: any): Promise<any> {
        const userEmail = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        })
        if(userEmail) throw new Error("Email already been used!")
        const user = await prisma.user.create({
            data: data
        })
        if (user) return user
        throw new Error("DB error.");
    }
    async update(data: any): Promise<any> {
        const userEmail = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        })
        if(userEmail) throw new Error("Email already been used!")
        const users = await prisma.user.update({
            where: {
                id: data.id
            },
            data: data
        })
        if (users) return users
        throw new Error("DB error.");
    }
    async delete(id: number): Promise<Boolean> {
        const user = await prisma.user.delete({
            where: {
                id
            }
        })
        if (user) return true
        return false
    }

}