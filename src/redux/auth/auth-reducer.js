import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  resetError,
  signInError,
  signInRequest,
  signInSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
  signOut,
} from "./auth-actions";

export const userReducer = createReducer(
  {
    email: "",
    name: "",
    token: "",
  },
  {
    [signUpSuccess]: (state, { payload }) => ({
      email: payload.user.email,
      name: payload.user.name,
      token: payload.token,
    }),
    [signInSuccess]: (state, { payload }) => ({
      email: payload.user.email,
      name: payload.user.name,
      token: payload.token,
    }),
    [signOut]: (state) => ({
      email: "",
      name: "",
      token: "",
    }),
  }
);

export const errorReducer = createReducer("", {
  [signUpError]: (_, { payload }) => payload,
  [signInError]: (_, { payload }) => payload,
  [resetError]: () => "",
});

export const loaderReducer = createReducer(false, {
  [signUpRequest]: () => true,
  [signUpSuccess]: () => false,
  [signUpError]: () => false,
  [signInRequest]: () => true,
  [signInSuccess]: () => false,
  [signInError]: () => false,
});

export const authReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  isLoading: loaderReducer,
});
