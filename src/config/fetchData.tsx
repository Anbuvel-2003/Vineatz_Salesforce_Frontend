import { api } from "./api";

// Define the payload and response types
export interface LoginPayload {
  Email: string;
  Password: string;
}
export interface EmployeePayload {
  Employee_Name: string;
  Employee_Email: string;
  Employee_Mobilenumber: string;
  Employee_Alternative_Mobilenumber: string;
  Employee_Address: string;
  Employee_Bike_Number: string;
  Employee_Driving_License_Number: string;
  Employee_Password: string;
  Employee_joining_date: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  data: any;
  success: boolean;
  message?: string;
}

// Exported API functions
export const authApi = {
  LoginApi: async (payload: LoginPayload): Promise<LoginResponse> => {
    const url = `/user/login`;
    return api.postMethod(url, payload);
  },
  NotificationApi: async (): Promise<any> => {
    const url = `/notification`;
    return api.getMethod(url);
  },
  CreateEmployee: async (payload: EmployeePayload): Promise<any> => {
    const url = `/employee`;
    return api.postMethod(url, payload);
  },
};
