import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IOrder } from "../../../interfaces/Orders";
import { getOrderDetailById } from "../../../services/Order";
import { OrderStatusContext } from "../../../context/OrderStatus";
import { OrderContext } from "../../../context/Order";
import { format } from 'date-fns';

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
    const formattedDate = format(new Date(order.created_at), 'dd/MM/yyyy HH:mm:ss');

    const infoLeft = [
        { label: "Mã hóa đơn", value: order.code_order },
        { label: "Thời gian", value: formattedDate },
        { label: "Thanh toán", value: order.payment_method },
        {
            label: "Trạng thái",
            value: (
                <select
                    className="border p-1 rounded"
                    value={
                        orderstatus.find(
                            (status: any) => status.name === order.status
                        )?.id || ""
                    }
                    onChange={(e) =>
                        handleStatusChange(
                            order.code_order as any,
                            Number(e.target.value) as any
                        )
                    }
                >
                    {orderstatus
                        .filter(
                            (status: any) =>
                                status.id >=
                                (orderstatus.find((s: any) => s.name === order.status)
                                    ?.id || 0)
                        )
                        .map((status: any) => (
                            <option key={status.id} value={status.id}>
                                {status.name}
                            </option>
                        ))}
                </select>
            )
        }



    ];

    const infoRight = [
        { label: "Số điện thoại", value: order.user_phone || "Không có" },
        { label: "Email", value: order.user_email || "Không có" },
        { label: "Địa chỉ", value: order.user_address || "Không có" },
        { label: "Nhận hàng", value: order.shipping_address || "Không có" },
    ];
    const total = [
        { label: "Tổng số lượng", value: totalQty || "Không có" },
        {
            label: "Tổng tiền hàng",
            value: order.total_price
                ? Number(order.total_price).toLocaleString()
                : "0",
        },
        { label: "Phí ship", value: "30.000" },
        { label: "Mã giản giá", value: order.voucher || "Không có" },
        {
            label: "Khách cần trả",
            value: order.total_price
                ? Number(order.total_price).toLocaleString()
                : "0",
        },
        { label: "Khách đã trả", value: 0 },
    ];
    const handleStatusChange = async (orderId: number, newStatus: number) => {
        try {
            await onEdit({ order_status_id: newStatus }, orderId);
            const data: IData = await getOrderDetailById(code!); // Reload lại đơn hàng sau khi update
            setOrder(data.data);
        } catch (error) {
            alert("Cập nhật thất bại! Vui lòng thử lại.");
            console.error(error);
        }
    };
    // const priceProdcut = 

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-lg rounded-xl max-w-6xl space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Chi Tiết Đơn Hàng</h2>

            {/* Thông tin đơn hàng */}
            <div className="grid grid-cols-3 gap-6 text-sm">
                {/* Cột trái */}
                <div className="space-y-2">
                    {infoLeft.map((item, idx) => (
                        <div key={idx} className="flex">
                            <span className="w-32 font-medium">{item.label}:</span>
                            <span className={item.label === "Mã hóa đơn" ? "font-semibold text-black" : ""}>
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Cột phải */}
                <div className="space-y-2">
                    {infoRight.map((item, idx) => (
                        <div key={idx} className="flex">
                            <span className="w-32 font-medium">{item.label}:</span>
                            <span>{item.value}</span>
                        </div>
                    ))}
                </div>

                {/* Ghi chú */}
                <div>
                    <div className="h-full p-3 border rounded bg-gray-50 text-gray-600 italic">
                        📝 {order.note || "Không có ghi chú"}
                    </div>
                </div>
            </div>


            {/* Danh sách sản phẩm */}
            <div className="overflow-auto rounded-lg shadow-sm text-sm">
                <table className="min-w-full table-auto border border-gray-200">
                    <thead className="bg-blue-100 text-gray-700">
                        <tr>
                            <th className="p-3 border whitespace-nowrap">Mã hàng</th>
                            <th className="p-3 border whitespace-nowrap text-left">Tên hàng</th>
                            <th className="p-3 border whitespace-nowrap text-right">Số lượng</th>
                            <th className="p-3 border whitespace-nowrap text-right">Đơn giá</th>
                            <th className="p-3 border whitespace-nowrap text-right">Giảm giá</th>
                            <th className="p-3 border whitespace-nowrap text-right">Giá bán</th>
                            <th className="p-3 border whitespace-nowrap text-right">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.items.map((item, index) => (
                            <tr key={index} className={`hover:bg-green-50 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                                <td className="p-3 border whitespace-nowrap text-blue-600"><Link to={`/admin/product/${item.code}`}>{item.code}</Link></td>
                                <td className="p-3 border">{item.title}</td>
                                <td className="p-3 border text-right">{item.quantity}</td>
                                <td className="p-3 border text-right">{Number(item.price).toLocaleString()}</td>
                                <td className="p-3 border text-right">0</td>
                                <td className="p-3 border text-right">{Number(item.price).toLocaleString()}</td>
                                <td className="p-3 border text-right font-semibold text-blue-600">{(item.total_line || item.price as any * item.quantity).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Tổng hợp đơn */}
            <div className="bg-gray-50 rounded-lg p-6 text-sm text-right space-y-2 shadow-sm flex flex-col items-end">
                {total.map((item, idx) => (
                    <div key={idx} className="flex">
                        <span className="w-32 font-medium">{item.label}:</span>
                        <strong className="w-32 text-right">
                            {item.value}
                        </strong>
                    </div>
                ))}
            </div>

            {/* Nút quay lại */}
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

export default DetailOrder;
