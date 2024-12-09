import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../ReduxEmployee/EmployeeSlice";

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});
