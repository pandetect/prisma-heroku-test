import express from 'express';
import {PrismaClient} from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 8080;

app.get('/', async (req: express.Request, res: express.Response) => {

    try {
        const users = await prisma.user.findMany({});
        res.json(users);
    } catch (e) {
        console.error(e);
    }
});

app.listen(port, async () => {
    console.log(`Started on http://localhost:${port}`);

    await prisma.$connect();
});