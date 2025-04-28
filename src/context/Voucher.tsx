import { createContext, useState } from "react";
import { IVoucher } from "../interfaces/Voucher";
import {
  createVoucher,
  getAllVoucher,
  statusVoucher,
  updateVoucher,
} from "../services/Voucher";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
};

export const VoucherContext = createContext({} as any);

const VoucherProvider = ({ children }: Props) => {
  const [vouchers, setVouchers] = useState<IVoucher[]>([]);

  const getAllVouchers = async () => {
    try {
      const data = await getAllVoucher();
      setVouchers(data);
    } catch (error) {
      console.log("Lỗi khi lấy danh sách biến thể sản phẩm:", error);
    }
  };

  const onAdd = async (dataVoucher: IVoucher) => {
    try {
      const data = await createVoucher(dataVoucher);
      setVouchers([...vouchers, data]);
      toast.success("Thêm thể loại thành công!");
    } catch (error) {
      console.log(error);
    }
  };

  const onEdit = async (formData: IVoucher, id: number | string) => {
    try {
      const data = await updateVoucher(formData, id);
      const newVouchers = vouchers.map((voucher) =>
        voucher.id === id ? data : voucher
      );
      setVouchers(newVouchers);
      toast.success("Sửa thể loại thành công!");
    } catch (error) {
      console.log(error);
    }
  };

  const onStatus = async (code: string | number, newStatus: "in_stock" | "out_stock") => {
    try {
      const formData = new FormData();
      formData.append("status", newStatus);
      formData.append("_method", "put"); // Laravel-style update

      await statusVoucher(formData, code); // Gửi lên API

      await getAllVouchers(); // Cập nhật lại danh sách
      toast.success("Cập nhật trạng thái thành công!");
    } catch (error) {
      console.error("❌ Lỗi khi cập nhật trạng thái sản phẩm:", error);
    }
  };


  return (
    <VoucherContext.Provider value={{ vouchers, onStatus, getAllVouchers, onAdd, onEdit }}>
      {children}
    </VoucherContext.Provider>
  );
};

export default VoucherProvider;