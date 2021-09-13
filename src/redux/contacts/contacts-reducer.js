import { createReducer } from "@reduxjs/toolkit";
import { signOut } from "../auth/auth-actions";
import {
  addAsyncContactSuccess,
  getAsyncContactsSuccess,
  deleteAsyncContactSuccess,
} from "./contacts-actions";

const item = createReducer([], {
  [getAsyncContactsSuccess]: (_, { payload }) => payload,
  [addAsyncContactSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteAsyncContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [signOut]: () => [],
});

export default item;
