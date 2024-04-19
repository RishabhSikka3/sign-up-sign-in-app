// /api/dataApi.tsx
import axios, { AxiosError } from "axios";

const API_URL = "https://reqres.in/api";

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export async function getUsers(page: number = 1): Promise<UsersResponse> {
  try {
    const response = await axios.get(`${API_URL}/users?page=${page}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    const responseData = axiosError.response?.data;
    if (responseData && typeof responseData === "object") {
      if ("error" in responseData) {
        throw new Error(String(responseData.error));
      } else {
        throw new Error("An error occurred");
      }
    } else {
      throw new Error("An error occurred");
    }
  }
}
