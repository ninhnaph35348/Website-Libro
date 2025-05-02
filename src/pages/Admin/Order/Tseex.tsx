import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { OrderContext } from "../../../context/Order";
import { OrderStatusContext } from "../../../context/OrderStatus";
import { IOrder } from "../../../interfaces/Orders";
import { getOrderDetailById } from "../../../services/Order";
import { Tooltip } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IData {
  data: IOrder;
}

const DetailOrder = () => {
  const [order, setOrder] = useState<IOrder | null>(null);
  const { onEdit } = useContext(OrderContext);
  const { orderstatus, getAllStatus } = useContext(OrderStatusContext);
  const navigate = useNavigate();
  const { code } = useParams<{ code: string }>();

  useEffect(() => {
    getAllStatus();
  }, []);

  useEffect(() => {
    (async () => {
      if (code) {
        const data: IData = await getOrderDetailById(code);
        setOrder(data.data);
      }
    })();
  }, [code]);

  const handleStatusChange = async (orderId: number, newStatus: number) => {
    try {
      await onEdit({ order_status_id: newStatus }, orderId);
      const data: IData = await getOrderDetailById(code!);
      setOrder(data.data);
    } catch (error) {
      toast.error("Cập nhật thất bại! Vui lòng thử lại.");
      console.error(error);
    }
  };

  if (!order) {
    return (
      <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg text-center">
        <h2 className="text-xl font-bold mb-4">Không tìm thấy đơn hàng</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Quay lại
        </button>
      </div>
    );
  }

  const totalQty = order.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = order.items.reduce((sum, item) => {
    const itemTotal =
      item.total_line || Number(item.price) * Number(item.quantity);
    return sum + itemTotal;
  }, 0);
  const shippingFee = 30000;
  const voucherDiscount = Number(order.voucher_discount) || 0;
  let discountValue = 0;

  if (order.voucher_discount_type === "percent") {
    discountValue = (totalAmount * voucherDiscount) / 100;
  } else if (order.voucher_discount_type === "fixed") {
    discountValue = voucherDiscount;
  }

  const finalAmount = Number(order.total_price);

  const orderInfo = [
    { label: "Mã hóa đơn", value: order.code_order },
    { label: "Thời gian", value: order.created_at },
    { label: "Thanh toán", value: order.payment_method },
    {
      label: "Trạng thái",
      value: (
        <select
          className="border p-1 rounded"
          value={
            orderstatus.find((status: any) => status.name === order.status)
              ?.id || ""
          }
          onChange={(e) =>
            handleStatusChange(
              Number(order.code_order),
              Number(e.target.value)
            )
          }
        >
          {orderstatus
            .filter(
              (status: any) =>
                status.id >=
                (orderstatus.find((s: any) => s.name === order.status)?.id || 0)
            )
            .map((status: any) => (
              <option key={status.id} value={status.id}>
                {status.name}
              </option>
            ))}
        </select>
      ),
    },
  ];

  const userInfo = [
    { label: "Người đặt", value: order.user_name || "Không có" },
    { label: "SĐT", value: order.user_phone || "Không có" },
    { label: "Email", value: order.user_email || "Không có" },
    { label: "Địa chỉ", value: order.user_address || "Không có" },
  ];

  const shippingInfo = [
    { label: "Người nhận", value: order.shipping_name || "Không có" },
    { label: "SĐT nhận", value: order.shipping_phone || "Không có" },
    { label: "Email nhận", value: order.shipping_email || "Không có" },
    { label: "Địa chỉ nhận", value: order.shipping_address || "Không có" },
  ];

  const total = [
    {
      label: "Tổng tiền hàng",
      value: `${totalAmount.toLocaleString()} đ`,
    },
    {
      label: "Mã giảm giá",
      value: order.voucher || "Không có",
    },
    {
      label: "Tiền được giảm",
      value:
        order.voucher_discount_type === "percent"
          ? `- ${voucherDiscount}%`
          : `- ${discountValue.toLocaleString()} đ`,
    },
    {
      label: "Phí ship",
      value: `+ ${shippingFee.toLocaleString()} đ`,
    },
    {
      label: "Thành tiền",
      value: `${finalAmount.toLocaleString()} đ`,
    },
  ];

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-lg rounded-xl max-w-6xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Chi Tiết Đơn Hàng
      </h2>

      {/* Thông tin */}
      <div className="grid grid-cols-4 gap-6 text-sm">
        <InfoSection title="🧾 Thông tin đơn hàng" items={orderInfo} isOrder />
        <InfoSection title="👤 Người đặt" items={userInfo} />
        <InfoSection title="🚚 Người nhận" items={shippingInfo} />
        <div>
          <div className="font-semibold mb-1 text-gray-800">📝 Ghi chú</div>
          <div className="p-3 border rounded bg-gray-50 text-gray-600 italic">
            {order.note || "Không có ghi chú"}
          </div>
        </div>
      </div>

      {/* Sản phẩm */}
      <div className="overflow-auto rounded-lg shadow-sm text-sm">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              {["Mã Hàng", "Tên Hàng", "Số Lượng", "Loại Bìa", "Đơn Giá", "Giảm Giá", "Giá Bán", "Thành Tiền"].map((label) => (
                <th key={label} className="p-3 border whitespace-nowrap">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr
                key={index}
                className={`hover:bg-green-50 ${index % 2 === 0 ? "bg-gray-50" : ""}`}
              >
                <td className="p-3 border text-blue-600">
                  <Link to={`/admin/product/${item.code}`}>{item.code}</Link>
                </td>
                <td className="p-3 border">{item.title}</td>
                <td className="p-3 border text-right">{item.quantity}</td>
                <td className="p-3 border text-right">{item.cover}</td>
                <td className="p-3 border text-right">{Number(item.price).toLocaleString()}</td>
                <td className="p-3 border text-right">0</td>
                <td className="p-3 border text-right">{Number(item.price).toLocaleString()}</td>
                <td className="p-3 border text-right font-semibold text-blue-600">
                  {(item.total_line || item.price * item.quantity).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tổng */}
      <div className="bg-gray-50 rounded-lg p-6 text-sm text-right space-y-2 shadow-sm flex flex-col items-end">
        {total.map((item, idx) => (
          <div key={idx} className="flex">
            <span className="w-32 font-medium">{item.label}:</span>
            <strong className="w-32 text-right">{item.value}</strong>
          </div>
        ))}
      </div>

      {/* Quay lại */}
      <div className="text-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        >
          Quay lại danh sách
        </button>
      </div>
    </div>
  );
};

// Reusable info section
const InfoSection = ({
  title,
  items,
  isOrder = false,
}: {
  title: string;
  items: { label: string; value: React.ReactNode }[];
  isOrder?: boolean;
}) => (
  <div className="space-y-2">
    <div className="font-semibold mb-1 text-gray-800">{title}</div>
    {items.map((item, idx) => (
      <div key={idx} className="flex items-start">
        <span className="w-24 font-medium">{item.label}:</span>
        {typeof item.value === "string" && item.label === "Mã hóa đơn" ? (
          <Tooltip title={item.value}>
            <span className="truncate max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis block cursor-pointer">
              {item.value}
            </span>
          </Tooltip>
        ) : typeof item.value === "string" ? (
          <span className="truncate max-w-[200px] whitespace-nowrap overflow-hidden">
            {item.value}
          </span>
        ) : (
          item.value
        )}
      </div>
    ))}
  </div>
);

export default DetailOrder;
