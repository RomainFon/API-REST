import express, { Request, Response } from 'express';
import env from './config/env';
import  { Database } from './config/database';
import bodyParser from 'body-parser';

const app = express();

const db = new Database();
db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

require('./controllers/index')(app);

app.get('*', (req: Request, res: Response) => {
    res.status(404).json({ message: "Route not found" })
});

app.listen(env.port, () => {
    console.log(`API listening on port ${env.port}`);
});

