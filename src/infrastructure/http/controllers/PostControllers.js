import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    async createPost(req, res) {
        const { content } = req.body;
        const { id } = req.params;
        try {
            const user = await prisma.user.findUnique({ where: { id: Number(id) } });
            if (!user) {
                return res.json({ message: "Não foi possivel criar post, usuário inexistente." })
            }
            const post = await prisma.post.create({
                data: {
                    content: content,
                    user_id: user.id,
                },
                include: {
                    author: true,
                }
            })
            return res.json(post);
        } catch (error) {
            return res.json(error);
        }
    },

    async findAllPosts(req, res) {
        try {
            const posts = await prisma.post.findMany();
            return res.json(posts);
        } catch (error) {
            return res.json(error);
        }
    },

    async updatePost(req, res) {
        const { id } = req.params;
        const { content } = req.body;

        try {
            const post = await prisma.post.findUnique({ where: { id: Number(id) } });
            if (!post) {
                return res.json({ message: "Post não encontrado." });
            }
            await prisma.post.update({
                where: { id: Number(id) },
                data: { content }
            }
            )
            return res.json({ message: "Post Atualizado" });
        } catch (error) {
            return res.json(error);
        }
    },

    async deletePost(req, res) {
        const { id } = req.params;
        try {
            const post = await prisma.post.findUnique({ where: { id: Number(id) } });
            if (!post) {
                return res.json({ message: "Post não encontrado." })
            }
            await prisma.post.delete({ where: { id: Number(id) } });
            return res.json({ message: "Post deletado." });
        } catch (error) {
            return res.json(error.message);
        }
    },
}