import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers";

const store = configureStore({ reducer: themeReducer });

export default store;
