import { Schema, model, connect } from 'mongoose';


export type Guardian = {
    fatherName: string;
    motherName: string;
    fatherOccupation: string;
    motherOccupation: string;
    fatherContactNumber: string;
    motherContactNumber: string;
}


export type Student = {
    id: string;
    name: {
        firstName: string;
        middleName: string;
        lastName: string
    };
    gender: "male" | "female";
    email: string;
    avatar?: string;
    dateOfBirth: string;
    contactNumber: string | number;
    emergancyNumber: string | number;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian
}