export type Guardian = {
  fatherName: string;
  motherName: string;
  fatherOccupation: string;
  motherOccupation: string;
  fatherContactNumber: string;
  motherContactNumber: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNumber: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  email: string;
  avatar?: string;
  dateOfBirth?: string;
  contactNumber: string;
  emergancyNumber: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
};
