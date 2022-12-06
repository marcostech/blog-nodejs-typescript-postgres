import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async createUser(req, res) {
        try {
            const { name, email } = req.body;
            let user = await prisma.user.findUnique({ where: { email } });
            if (user) {
                return res.json({ error: "Email já em uso por um um usuário." })
            }
            user = await prisma.user.create({
                data: {
                    name,
                    email
                },
            });
            return res.json(user);
        } catch (err) {
            return res.json(err);
        }
    },

    async findAllUsers(req, res) {
        try {
            const users = await prisma.user.findMany();
            return res.json(users);
        } catch (error) {
            return res.json(error);
        }
    },

    async findUser(req, res) {
        const { id } = req.params;
        try {
            const user = await prisma.user.findUnique({ where: { id: Number(id) } });
            if (!user) {
                return res.json({ message: "Usuário não encontrado." });
            }
            return res.json(user);
        } catch (error) {
            return res.json(error);
        }
    },

    async updateUser(req, res) {
        const { id } = req.params;
        const { name, email } = req.body;
        try {
            let user = await prisma.user.findUnique({ where: { id: Number(id) } });
            if (!user) {
                return res.json({ message: "Usuário não encontrado." });
            }
            user = await prisma.user.update({
                where: { id: Number(id) },
                data: { name, email }
            });
            return res.json(user);
        } catch (error) {
            return res.json(error);
        }
    },

    async deleteUser(req, res) {
        const { id } = req.params;
        try {
            const user = await prisma.user.findUnique({ where: { id: Number(id) } });
            if (!user) {
                return res.json({ message: "Usuário não encontrado." });
            }
            await prisma.user.delete({ where: { id: Number(id) } })
            return res.json({ message: "Usuário deletado." });
        } catch (error) {
            return res.json(error);
        }
    }
}