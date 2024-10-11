import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { StudentRouter } from './modules/student/student.route';

app.use(express.json());
app.use(cors());

app.use('/api/v1/students', StudentRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
