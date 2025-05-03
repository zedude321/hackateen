export enum UserRole {
  Admin = "admin",
  Teacher = "teacher",
  Student = "student",
}

export interface IUser {
  username: string;
  password: string;
  role: UserRole;
  phone_number?: string;
  email: string;
  classes?: string[];
  _id: string;
}
