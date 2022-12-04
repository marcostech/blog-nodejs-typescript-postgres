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
    async findAllUsers(req,res) {
        try {
            const users = await prisma.user.findMany();
            return res.json(users);
        } catch (error) {
            return res.json(error);
        }
    }
}