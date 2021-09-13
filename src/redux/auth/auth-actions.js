import { createAction } from "@reduxjs/toolkit";

const signUpRequest = createAction("auth/signUpRequest");
const signUpSuccess = createAction("auth/signUpSuccess");
const signUpError = createAction("auth/signUpError");
export { signUpRequest, signUpSuccess, signUpError };

const signInRequest = createAction("auth/signInRequest");
const signInSuccess = createAction("auth/signInSuccess");
const signInError = createAction("auth/signInError");
export { signInRequest, signInSuccess, signInError };

export const signOut = createAction("auth/signOut");

export const resetError = createAction("auth/resetError");
