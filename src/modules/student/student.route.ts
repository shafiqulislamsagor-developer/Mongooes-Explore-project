import express from 'express';
import { studentController } from './student.controller';

export const StudentRouter = express.Router();

StudentRouter.post('/create-student', studentController.createStudent)