
import 'express-async-errors'; 
import '@shared/container';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import { routes } from '../routes';

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    return response.status(500).json({ status: 'error', message: 'Internal Server Error' });
})

export { app };