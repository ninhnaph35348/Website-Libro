import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

// Lấy thông tin user đăng nhập từ token (API /me)
export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  const response = await axiosInstance.get("/me"); 
  return response.data.user;
});

// Đăng nhập
export const login = createAsyncThunk("auth/login", async (credentials, { dispatch }) => {
  const response = await axiosInstance.post("/login", credentials);
  localStorage.setItem("token", response.data.token);
  dispatch(fetchUser()); // Gọi API lấy user ngay sau khi login
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: { 
    user: null, 
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
