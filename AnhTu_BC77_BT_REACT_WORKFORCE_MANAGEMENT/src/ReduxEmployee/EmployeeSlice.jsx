import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi";

export const fetchEmployee = createAsyncThunk(
  "employees/fetchEmployee",
  async () => {
    const response = await axios.get(`${BASE_URL}/LayDanhSachNhanVien`);
    return response.data;
  }
);

export const createEmployee = createAsyncThunk(
  "employees/createEmployee",
  async (employee) => {
    const response = await axios.post(`${BASE_URL}/ThemNhanVien`, employee);
    return response.data;
  }
);

export const updateEmployee = createAsyncThunk(
  "employees/updateEmployee",
  async (employee, { rejectWithValue }) => {
    try {
      if (!employee.maNhanVien) {
        throw new Error("Employee ID is required for updating");
      }

      const response = await axios.put(
        `${BASE_URL}/CapNhatThongTinNhanVien?maNhanVien=${employee.maNhanVien}`,
        employee
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async (employeeId) => {
    const response = await axios.delete(`${BASE_URL}/XoaNhanVien`, {
      params: { maSinhVien: employeeId },
    });
    return employeeId;
  }
);

const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    list: [],
    selectedEmployee: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedEmployee: (state, action) => {
      state.selectedEmployee = action.payload;
    },
    clearSelectedEmployee: (state, action) => {
      state.selectedEmployee = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployee.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchEmployee.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (emp) => emp.maNhanVien === action.payload.maNhanVien
        );
        if (index !== -1) {
          state.list[index] = action.payload;
        }
        state.selectedEmployee = null;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (emp) => emp.maNhanVien !== action.payload
        );
      });
  },
});
export const { setSelectedEmployee, clearSelectedEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
