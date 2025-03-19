import { useContext } from "react";
import { OrderContext } from "../../../context/Order";
import { OrderStatusContext } from "../../../context/OrderStatus";
import { Link } from "react-router-dom";
import { IOrder } from "../../../interfaces/Orders";

const Orders = () => {
    const { orders, onEdit } = useContext(OrderContext);
    const { orderstatus } = useContext(OrderStatusContext);

    if (!orders || !Array.isArray(orders)) {
        return <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">Đang tải đơn hàng...</div>;
    }

    const handleStatusChange = async (orderId: number, newStatus: string) => {
        try {
            await onEdit({ order_status_id: newStatus }, orderId);
            alert("Cập nhật trạng thái thành công!");
        } catch (error) {
            alert("Cập nhật thất bại! Vui lòng thử lại.");
            console.error(error);
        }
    };

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Danh Sách Đơn Hàng</h2>
            <table className="w-full border-collapse border border-gray-200 mt-4">
                <thead>
                    <tr className="bg-gray-100 text-center">
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Mã Đơn Hàng</th>
                        <th className="border p-2">Khách Hàng</th>
                        <th className="border p-2">Giá Trị</th>
                        <th className="border p-2">Trạng Thái</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order: IOrder) => (
                        <tr key={order.id}>
                            <td className="border p-2 text-center">{order.id}</td>
                            <td className="border p-2">
                                <Link className="text-blue-400 hover:text-blue-600" to={`/edit/${order.id}`}>
                                    {order.code_order}
                                </Link>
                            </td>
                            <td className="border p-2">{order.user_name || "Khách lẻ"}</td>
                            <td className="border p-2">{Number(order.total_price).toLocaleString()} VND</td>
                            <td className="border p-2 text-center">
                                <select
                                    className="border p-1 rounded"
                                    value={
                                        orderstatus.find((status: any) => status.name === order.status)?.id || ""
                                    }
                                    onChange={(e) => handleStatusChange(order.code_order, Number(e.target.value) as any)}
                                >
                                    {orderstatus.map((status: any) => (
                                        <option key={status.id} value={status.id}>
                                            {status.name}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
