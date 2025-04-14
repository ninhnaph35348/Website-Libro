import React, { createContext, useContext, useState, useEffect } from "react";
import instance from "../config/axios";

// Tạo context cho chi tiết đơn hàng
interface OrderDetailContextProps {
  orderDetails: any | null;
  setOrderDetails: React.Dispatch<React.SetStateAction<any | null>>;
  fetchOrderDetails: (code_order: string) => void;
}

const OrderDetailContext = createContext<OrderDetailContextProps | undefined>(undefined);

export const useOrderDetail = () => {
  const context = useContext(OrderDetailContext);
  if (!context) {
    throw new Error("useOrderDetail must be used within an OrderDetailProvider");
  }
  return context;
};

// Tạo provider cho context
export const OrderDetailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState<any | null>(null);

  const fetchOrderDetails = async (code_order: string) => {
    try {
      const response = await instance.get(`/order_detail/${code_order}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setOrderDetails(response.data);
    } catch (err) {
      console.error("Error fetching order details:", err);
    }
  };

  return (
    <OrderDetailContext.Provider value={{ orderDetails, setOrderDetails, fetchOrderDetails }}>
      {children}
    </OrderDetailContext.Provider>
  );
};
