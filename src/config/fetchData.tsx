import { api } from "./api";


// Define the payload and response types
export interface LoginPayload {
  Email: string;
  Password: string;
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
};
