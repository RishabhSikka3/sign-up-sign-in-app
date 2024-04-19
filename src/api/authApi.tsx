// /api/authApi.tsx
import axios, { AxiosError } from "axios";

const API_URL = "https://reqres.in/api";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

export interface ErrorResponse {
  error: string; // Define the structure of error response here
}

export interface AuthResponse {
  token: string;
}

export async function loginUser(userData: LoginRequest): Promise<AuthResponse> {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    throw new Error(axiosError.response?.data.error || "An error occurred");
  }
}

export async function registerUser(
  userData: RegisterRequest
): Promise<AuthResponse> {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    throw new Error(axiosError.response?.data.error || "An error occurred");
  }
}
