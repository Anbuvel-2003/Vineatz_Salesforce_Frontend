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
export interface UserPayload {
  first_Name: string;
  last_Name: string;
  Mobile_Number: string;
  Email: string;
  Password: string;
  Address: string;
}
export interface updateUserPayload {
  first_Name: string;
  last_Name: string;
  Mobile_Number: string;
  Email: string;
  Address: string;
}
export interface updateEmployeePayload {
  Employee_Name: string;
  Employee_Email: string;
  Employee_Mobilenumber: string;
  Employee_Alternative_Mobilenumber: string;
  Employee_Address: string;
  Employee_Bike_Number: string;
  Employee_Driving_License_Number: string;
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
export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}
export interface GetEmployeesResponse {
  success: boolean;
  data: EmployeePayload[];
  pagination: PaginationMeta;
}
export interface GetAdminResponse {
  success: boolean;
  data: EmployeePayload[];
  pagination: PaginationMeta;
}
export interface LeadResponse {
  success: boolean;
  data: any[];
  totalPages: number;
  pagination: PaginationMeta;
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
  GetEmployee: async (page = 1, limit = 10): Promise<GetEmployeesResponse> => {
    const url = `/employee?page=${page}&limit=${limit}`;
    return api.getMethod(url);
  },
  updateEmployee: async (
    payload: updateEmployeePayload,
    id: string
  ): Promise<any> => {
    const url = `/employee/${id}`;
    return api.putMethod(url, payload);
  },
  DeleteEmployee: async (id: string): Promise<any> => {
    const url = `/employee/${id}`;
    return api.deleteMethod(url);
  },
  GetAdmin: async (page = 1, limit = 10): Promise<GetAdminResponse> => {
    const url = `/user?page=${page}&limit=${limit}`;
    return api.getMethod(url);
  },
  CreateAdmin: async (payload: UserPayload): Promise<any> => {
    const url = `/user`;
    return api.postMethod(url, payload);
  },
  UpdateAdmin: async (payload: updateUserPayload, id: string): Promise<any> => {
    const url = `/user/${id}`;
    return api.putMethod(url, payload);
  },
  DeleteAdmin: async (id: string): Promise<any> => {
    const url = `/user/${id}`;
    return api.deleteMethod(url);
  },
  GetLeads: async (
    page = 1,
    limit = 10,
    search = "",
    sortBy = "",
    sortOrder = "asc",
    status: string[] = []
  ): Promise<LeadResponse> => {
    let query = `/lead?page=${page}&limit=${limit}`;
    if (search) query += `&search=${search}`;
    if (sortBy)
      query += `&sortBy=${
        sortBy == "ProductID"
          ? "Application_Id"
          : sortBy == "ProductName"
          ? "Application_Name"
          : sortBy
      }&order=${sortOrder}`;
    if (status.length > 0) query += `&status=${status.join(",")}`;
    console.log(sortBy, "sortBy");
    console.log(query, "query");
    return api.getMethod(query);
  },
  GetReject: async (
    page = 1,
    limit = 10,
    search = "",
    sortBy = "",
    sortOrder = "asc",
    status: string[] = []
  ): Promise<LeadResponse> => {
    let query = `/lead/reject?page=${page}&limit=${limit}`;
    if (search) query += `&search=${search}`;
    if (sortBy)
      query += `&sortBy=${
        sortBy == "ProductID"
          ? "Application_Id"
          : sortBy == "ProductName"
          ? "Application_Name"
          : sortBy
      }&order=${sortOrder}`;
    if (status.length > 0) query += `&status=${status.join(",")}`;
    console.log(sortBy, "sortBy");
    console.log(query, "query");
    return api.getMethod(query);
  },
  AddNotes: async (id: string, payload: any): Promise<any> => {
    const url = `/lead/${id}/Notes`;
    return api.postMethod(url, payload);
  },
  Deletenotes: async (id: string, noteid: string): Promise<any> => {
    const url = `/lead/${id}/Notes/${noteid}`;
    return api.deleteMethod(url);
  },
  GetNotes: async (id: string): Promise<any> => {
    const url = `/lead/${id}`;
    console.log("sssssssssss", url);
    return api.getMethod(url);
  },
  UpdateLead: async (id: string, payload: any): Promise<any> => {
    const url = `/lead/${id}`;
    return api.putMethod(url, payload);
  },
  Updatereject: async (id: string, payload: any): Promise<any> => {
    const url = `/lead/reject/${id}`;
    return api.putMethod(url, payload);
  },
  Getallreject: async (): Promise<any> => {
    const url = `/lead/reject`;
    return api.getMethod(url);
  },
  Sentemail: async (payload: any): Promise<any> => {
    const url = `/user/sendotp`;
    return api.postMethod(url, payload);
  },
  otpverify: async (payload: any,accesstoken:string): Promise<any> => {
    const url = `/user/verifyotp`;
    return api.postMethod(url, payload,accesstoken);
  },
};
