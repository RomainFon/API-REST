import express, { Request, Response } from 'express';
import env from './config/env';
import  { Database } from './config/database';

const app = express();

const db = new Database();
db.connect();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});

app.listen(env.port, () => {
    console.log(`API listening on port ${env.port}`);
});

