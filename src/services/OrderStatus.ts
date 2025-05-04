// import axiosInstance from "../config/axios";
// // import { IOrderStatus } from "../interfaces/OrderStatus";



// export const getAllOrderstatus = async () => {
//   try {
//     const token = localStorage.getItem("token");  // Lấy token từ localStorage
//     if (!token) {
//       throw new Error("Token không tồn tại");  // Nếu không có token, yêu cầu đăng nhập lại
//     }

//     const response = await axiosInstance.get("/status", {
//       headers: {
//         Authorization: `Bearer ${token}`,  // Sử dụng token trong header
//       },
//     });

//     return response.data;  // Dữ liệu trả về từ API

//   } catch (error: any) {
//     // Kiểm tra lỗi chi tiết
//     if (error.response) {
//       // Nếu có phản hồi từ server (dữ liệu lỗi từ server)
//       console.error("Lỗi từ server:", error.response.data);
//       console.error("Mã lỗi:", error.response.status);
//     } else if (error.request) {
//       // Nếu không có phản hồi từ server
//       console.error("Không nhận được phản hồi từ server:", error.request);
//     } else {
//       // Nếu có lỗi trong quá trình cấu hình yêu cầu
//       console.error("Lỗi khi cấu hình yêu cầu:", error.message);
//     }

//     throw new Error("Lỗi khi lấy trạng thái đơn hàng");
//   }
// };
import instance from "../config/axios";
// import { IOrderStatus } from "../interfaces/OrderStatus";

export const getAllOrderstatus = async () => {
  try {
    const { data } = await instance.get("status");
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};





// export const getOrderstatusById = async (id: number | string) => {
//   try {
//     const { data } = await instance.get(`orderstatuss/${id}`);
//     return data;
//   } catch (error) {
//     throw new Error("Lỗi");
//   }
// };

// export const createOrderstatus = async (orderstatusData: IOrderStatus) => {
//   try {
//     const { data } = await instance.post("orderstatuss", orderstatusData);
//     return data;
//   } catch (error) {
//     throw new Error("Lỗi");
//   }
// };

// export const updateOrderstatus = async (
//   orderstatusData: IOrderStatus,
//   id: number | string
// ) => {
//   try {
//     const { data } = await instance.put(`orderstatuss/${id}`, orderstatusData);
//     return data;
//   } catch (error) {
//     throw new Error("Lỗi");
//   }
// };

// export const deleteOrderstatus = async (id: number | string) => {
//   try {
//     const { data } = await instance.put(`orderstatuss/${id}`);
//     return data;
//   } catch (error) {
//     throw new Error("Lỗi");
//   }
// };
