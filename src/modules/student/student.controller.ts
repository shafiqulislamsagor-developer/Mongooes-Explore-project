import { Request, Response } from "express";
import { StudentService } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const { student: studentData } = req.body;
        const result = await StudentService.createStudentIntoDB(studentData)
        res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: result
        })
    } catch (err) {
        console.error(err);
    }
}



export const studentController = { createStudent }