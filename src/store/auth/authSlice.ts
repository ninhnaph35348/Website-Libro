import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

// Lấy thông tin user đăng nhập từ token (API /me)
export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  const response = await axiosInstance.get("/me");
  return response.data.user;
});

// Đăng nhập
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/login", credentials);
      localStorage.setItem("token", response.data.token);
      dispatch(fetchUser()); // Gọi API lấy user ngay sau khi login
      return response.data;
    } catch (error: any) {
      // Trả về lỗi từ API
      return rejectWithValue(
        error.response?.data?.message || "Đăng nhập thất bại"
      );
    }
  }
);

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
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null; // Xóa lỗi cũ
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        console.log("Lỗi từ API:", action.payload); // Debug lỗi
        state.loading = false;
        state.error = action.payload || "Đăng nhập thất bại"; // Đảm bảo luôn có error
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;