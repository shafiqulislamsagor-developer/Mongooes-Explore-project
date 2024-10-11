import { Schema, model, connect } from 'mongoose';
import { Student } from './student/student.interface';



const studentSchema = new Schema<Student>({
    id: { type: String },
    name: {
        firstName: {
            type: String,
            required: true
        },
        middleName: { type: String },
        lastName: {
            type: String,
            required: true,
        }
    },
    gender: ["female", "male"],
    dateOfBirth: { type: String },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
    emergancyNumber: { type: String, required: true },
    bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
        fatherName: { type: String, required: true },
        motherName: { type: String, required: true },
        fatherOccupation: { type: String, required: true },
        motherOccupation: { type: String, required: true },
        fatherContactNumber: { type: String, required: true },
        motherContactNumber: { type: String, required: true },

    },
    localGuardian: {
        name: { type: String, required: true },
        occupation: { type: String, required: true },
        contactNumber: { type: String, required: true },
        address: { type: String, required: true },
    },
    profileImage: { type: String },
    isActive: ['active', 'blocked']
})