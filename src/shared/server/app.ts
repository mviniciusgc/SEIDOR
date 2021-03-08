import 'reflect-metadata';
import 'express-async-errors';
import '@shared/container';
import { routes } from '../routes'
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);

export { app };