import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { IUser } from "../../interfaces/User";

// Lấy thông tin user đăng nhập từ token (API /me)
export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  const response = await axiosInstance.get("/me");
  console.log("Dữ liệu user từ API /me:", response.data);
  return response.data.user;  // Trả về user từ API
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

// Cập nhật thông tin người dùng
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData: IUser, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put("/me", userData);  // Đúng route
      return response.data.user; 
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Cập nhật thất bại"
      );
    }
  }
);
export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async ({ currentPassword, newPassword }: { currentPassword: string; newPassword: string }, { rejectWithValue }) => {
    try {
      // Replace with your API call to update the password
      const response = await axiosInstance.post("/update-password", { currentPassword, newPassword });
      return response.data; // Return the updated user data or success message
    } catch (err) {
      return rejectWithValue("Đổi mật khẩu thất bại. Vui lòng thử lại.");
    }
  }
);
export const updateAvatar = createAsyncThunk(
  "auth/updateAvatar",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/update-avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data; // Return the updated user data with new avatar URL
    } catch (err) {
      return rejectWithValue("Cập nhật avatar thất bại.");
    }
  }
);

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;  // Gửi token
  }
  return config;
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
        if (action.payload) {
          state.user = action.payload;
        } else {
          // Có thể xử lý trạng thái khi không có user, ví dụ: thông báo người dùng chưa đăng nhập
          state.user = null;
        }
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;  // Xóa lỗi cũ
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;  // Cập nhật lại user với dữ liệu mới
      })
      .addCase(updateUser.rejected, (state, action) => {
        console.log("Lỗi khi cập nhật người dùng:", action.payload);  // Debug lỗi
        state.loading = false;
        state.error = action.payload || "Cập nhật người dùng thất bại"; // Đảm bảo luôn có error
      });
  },
});


export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
