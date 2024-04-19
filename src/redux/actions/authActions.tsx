// src/redux/actions/authActions.ts
import { Dispatch } from "redux";
import {
  loginUser,
  registerUser,
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "../../api/authApi";

export const ActionTypes = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGOUT: "LOGOUT",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAILURE: "REGISTER_FAILURE",
};

export const loginSuccess = (email: string, token: string) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: { email, token },
});

export const loginFailure = (error: string) => ({
  type: ActionTypes.LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: ActionTypes.LOGOUT,
});

export const registerSuccess = (email: string, token: string) => ({
  type: ActionTypes.REGISTER_SUCCESS,
  payload: { email, token },
});

export const registerFailure = (error: string) => ({
  type: ActionTypes.REGISTER_FAILURE,
  payload: error,
});

export const performLogin =
  (userData: LoginRequest) => async (dispatch: Dispatch) => {
    try {
      const response: AuthResponse = await loginUser(userData);
      dispatch(loginSuccess(userData.email, response.token));
    } catch (error: unknown) {
      // Specify that error is of type unknown
      if (error instanceof Error) {
        // Type guard to check if error is an Error
        dispatch(loginFailure(error.message));
      } else {
        dispatch(loginFailure("An unknown error occurred"));
      }
    }
  };

export const performRegistration =
  (userData: RegisterRequest) => async (dispatch: Dispatch) => {
    try {
      const response: AuthResponse = await registerUser(userData);
      dispatch(registerSuccess(userData.email, response.token));
    } catch (error: unknown) {
      // Specify that error is of type unknown
      if (error instanceof Error) {
        // Type guard to check if error is an Error
        dispatch(registerFailure(error.message));
      } else {
        dispatch(registerFailure("An unknown error occurred"));
      }
    }
  };
