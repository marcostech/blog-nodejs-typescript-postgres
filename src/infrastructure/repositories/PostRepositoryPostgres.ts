import { IPostRepository } from "../../app/repositories/IPostRepository";
import { prisma } from "../../../prisma/prisma";

export class PostRepositoryPostgres implements IPostRepository {
    async findAll(): Promise<any> {
        const posts = await prisma.post.findMany({
            select: {
                id: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        if (posts) return posts
        throw new Error("DB error.");
    }
    async findOne(id: number): Promise<any> {
        const post = await prisma.post.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        if (post) return post
        return null
    }
    async create(data: any): Promise<any> {
        const post = await prisma.post.create({
            data: data,
            select: {
                id: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        if (post) return post
        throw new Error("DB error.");
    }
    async update(data: any): Promise<any> {
        const posts = await prisma.post.update({
            where: {
                id: data.id
            },
            data: data,
            select: {
                id: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        if (posts) return posts
        throw new Error("DB error.");
    }
    async delete(id: number): Promise<any> {
        const post = await prisma.post.delete({
            where: {
                id
            }
        })
        if (post) return true
        return false
    }

}