import { api } from "./api";

// Define the payload and response types
export interface LoginPayload {
  Email: string;
  Password: string;
}
export interface Employeedata {
  Employee_Id: string;
  Employee_Name: string;
  Employee_Email: string;
  Employee_Mobilenumber: string;
  Employee_Alternative_Mobilenumber: string;
  Employee_Address: string;
  Role: string;
  Employee_Bike_Number: string;
  Employee_Driving_License_Number:string;
  createdAt:string;
  Employee_Password: string;
  Employee_joining_date: string;
  TeamId:string;
  Teamname:string;
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
export interface ApplicationPayload {
  Application_Description: string;
  Application_Name: string;
  Application_lunch_date: string;
  Application_url: string;
}
export interface TeamleadPayload {
  Name: string;
  Email: string;
  Mobilenumber: string;
  Alternative_Mobilenumber: string;
  Address: string;
  Bike_Number: string;
  Driving_License_Number: string;
  Password: string;
  joining_date: string;
}
export interface UserPayload {
  first_Name: string;
  last_Name: string;
  Mobile_Number: string;
  Email: string;
  Password: string;
  Address: string;
}
export interface Teampayload {
  Team_Name: string;
  Team_Description: string;
  Teamlead_Id?: string;
  Teamleadname?: string;
  Teammembers_ID: string[];
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
  data: Employeedata[];
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
export interface TeamLeadResponse {
  success: boolean;
  data: any[];
  totalPages: number;
  pagination: PaginationMeta;
}
export interface GetTeamResponse {
  success: boolean;
  data: any[];
  totalPages: number;
  pagination: PaginationMeta;
}
export interface ApplicationResponse {
 success: boolean;
 data:any[];
 totalPages:number;
 pagination:PaginationMeta;
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
  CreateApplication: async (payload:ApplicationPayload): Promise<any> => {
    const url = `/Application`;
    return api.postMethod(url, payload);
  },
  Createteamlead: async (payload: TeamleadPayload): Promise<any> => {
    const url = `/teamlead`;
    return api.postMethod(url, payload);
  },
  Createteam:async(payload:Teampayload):Promise<any> =>{
    const url = `/team`;
    return api.postMethod(url,payload)
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
  GetEmployee: async (
    page = 1,
    limit = 10,
    search = "",
    sortBy = "",
    sortOrder = "asc",
    status: string[] = []
  ): Promise<GetEmployeesResponse> => {
    let query = `/employee?page=${page}&limit=${limit}&role=employee`;
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
  GetTeam: async (
    page = 1,
    limit = 10,
    search = "",
    sortBy = "",
    sortOrder = "asc",
    status: string[] = []
  ): Promise<GetTeamResponse> => {
    let query = `/team?page=${page}&limit=${limit}&role=employee`;
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
   Getteamlead: async (
    page = 1,
    limit = 10,
    search = "",
    sortBy = "",
    sortOrder = "asc",
    status: string[] = []
  ): Promise<GetEmployeesResponse> => {
    let query = `/employee?page=${page}&limit=${limit}&role=teamlead`;
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
  
  GetApplication: async (
    page = 1,
    limit = 10,
    search = "",
    sortBy = "",
    sortOrder = "asc",
    status: string[] = []
  ): Promise<ApplicationResponse> => {
    let query = `/application?page=${page}&limit=${limit}`;
    if (search) query += `&search=${search}`;
    if (sortBy)
      query += `&sortBy=${sortBy == "Product Id" ? "Application_ID":"Application_Name"
      }&order=${sortOrder}`;
      console.log("log data",sortBy);
      
    if (status.length > 0) query += `&status=${status.join(",")}`;
    return api.getMethod(query);
  },
  GetTeamLeads: async (
    page = 1,
    limit = 10,
    search = "",
    sortBy = "",
    sortOrder = "asc",
    status: string[] = []
  ): Promise<TeamLeadResponse> => {
    let query = `/teamlead?page=${page}&limit=${limit}`;
    if (search) query += `&search=${search}`;
    if (status.length > 0) query += `&status=${status.join(",")}`;
    if (sortBy) query += `&sortBy=${sortBy}&order=${sortOrder}`;
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
  Gettotalemployee: async (): Promise<any> => {
    const url = `/totalemployeelist`;
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
  otpverify: async (payload: any, accesstoken: string): Promise<any> => {
    const url = `/user/verifyotp`;
    return api.postMethod(url, payload, accesstoken);
  },
  // Newpassword: async (payload: any): Promise<any> => {
  //   const url = `/user/newpassword`;
  //   return api.postMethod(url, payload);
  // },
};
