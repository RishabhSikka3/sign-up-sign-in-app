// src/redux/reducers/authReducer.ts
import { ActionTypes } from "../actions/authActions";

interface AuthState {
  email: string | null;
  token: string | null;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  email: null,
  token: null,
  isAuthenticated: false,
  error: null,
};

export const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
        isAuthenticated: true,
        error: null,
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case ActionTypes.LOGOUT:
      return {
        ...initialState,
      };
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
        isAuthenticated: true,
        error: null,
      };
    case ActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
