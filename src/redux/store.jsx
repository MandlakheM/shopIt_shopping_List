import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { reducer } from "./reducer";

const rootReducer = combineReducers({ shopping: reducer });
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger),
});

export default store;
