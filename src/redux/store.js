import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import item from "./contacts/contacts-reducer";
import filter from "./contacts/filter-reducer";
import error from "./contacts/contacts-errors";
import { authReducer } from "./auth/auth-reducer";
import storage from "redux-persist/lib/storage";

const authConfig = {
  key: "auth",
  storage,
  blacklist: ["isLoading", "error"],
};

const contacts = combineReducers({
  item,
  filter,
  error,
});

export const store = configureStore({
  reducer: {
    contacts,
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger, thunk),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
