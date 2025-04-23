import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { IUser } from "../../interfaces/User";

// Lấy thông tin user đăng nhập từ token (API /me)
export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  const response = await axiosInstance.get("/me");
//  console.log("Dữ liệu user từ API /me:", response.data);
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
      console.log(userData);
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
  async (
    {
      currentPassword,
      newPassword,
      newPasswordConfirmation,
    }: {
      currentPassword: string;
      newPassword: string;
      newPasswordConfirmation: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.put("/change-password", {
        old_password: currentPassword,
        new_password: newPassword,
        confirm_new_password: newPasswordConfirmation,
      });
      return response.data;
    } catch (err: any) {
      // Lấy thông báo lỗi cụ thể từ backend nếu có
      const message = err.response?.data?.message || "Đổi mật khẩu thất bại. Vui lòng thử lại.";
      return rejectWithValue(message);
    }
  }
);


export const updateAvatar = createAsyncThunk(
  "auth/updateAvatar",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      // Thêm _method vào FormData giống như trong updateProduct
      formData.append("_method", "PUT");

      const response = await axiosInstance.post("/update-profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Dữ liệu trả về sau khi cập nhật avatar:", response.data);
      return response.data; // Trả về dữ liệu người dùng cập nhật với avatar mới
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
      // Xử lý login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user; // Lưu thông tin người dùng vào state
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Đăng nhập thất bại";
      })
      // Xử lý fetchUser
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.user = null;
      })
      // Xử lý updateUser
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Cập nhật người dùng thất bại";
      })
      // Xử lý updateAvatar
      .addCase(updateAvatar.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        console.log("Dữ liệu trả về sau khi cập nhật avatar:", action.payload);
        state.loading = false;
        state.user = action.payload;
      })
      
      .addCase(updateAvatar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Cập nhật avatar thất bại.";
      });
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
