// src/types/authTypes.ts
import { ActionTypes } from "../actions/authActions";

interface LoginSuccessAction {
  type: typeof ActionTypes.LOGIN_SUCCESS;
  payload: { email: string; token: string };
}

interface LoginFailureAction {
  type: typeof ActionTypes.LOGIN_FAILURE;
  payload: string;
}

interface LogoutAction {
  type: typeof ActionTypes.LOGOUT;
}

interface RegisterSuccessAction {
  type: typeof ActionTypes.REGISTER_SUCCESS;
  payload: { email: string; token: string };
}

interface RegisterFailureAction {
  type: typeof ActionTypes.REGISTER_FAILURE;
  payload: string;
}

export type AuthAction =
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction
  | RegisterSuccessAction
  | RegisterFailureAction;
