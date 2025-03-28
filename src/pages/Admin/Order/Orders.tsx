import { useContext, useState } from "react";
import { OrderContext } from "../../../context/Order";
import { OrderStatusContext } from "../../../context/OrderStatus";
import { Link } from "react-router-dom";
import { IOrder } from "../../../interfaces/Orders";

const Orders = () => {
    const { orders, onEdit } = useContext(OrderContext);
    const { orderstatus } = useContext(OrderStatusContext);
    const [searchTerm, setSearchTerm] = useState("");

    if (!orders || !Array.isArray(orders)) {
        return <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">Đang tải đơn hàng...</div>;
    }

    const handleStatusChange = async (orderId: number, newStatus: number|string) => {
        try {
            await onEdit({ order_status_id: newStatus }, orderId);
        } catch (error) {
            alert("Cập nhật thất bại! Vui lòng thử lại.");
            console.error(error);
        }
    };
    

    // Lọc danh sách đơn hàng theo mã đơn hàng
    const filteredOrders = orders.filter((order: IOrder) =>
        order.code_order?.toLowerCase().includes(searchTerm.toLowerCase())
    );//
    
    
    
    

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Danh Sách Đơn Hàng</h2>
            {/* Ô nhập để tìm kiếm theo mã đơn hàng */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Nhập mã đơn hàng..."
                    className="border p-2 rounded w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <table className="w-full border-collapse border border-gray-200 mt-4">
                <thead>
                    <tr className="bg-gray-100 text-center">
                        <th className="border p-2">STT</th>
                        <th className="border p-2">Mã Đơn Hàng</th>
                        <th className="border p-2">Khách Hàng</th>
                        <th className="border p-2">Giá Trị</th>
                        <th className="border p-2">Trạng Thái</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map((order: IOrder, index: number) => (
                        <tr key={order.id ?? index}>
                            <td className="border p-2 text-center">{ index + 1 }</td>
                            <td className="border p-2">
                                <Link className="text-blue-400 hover:text-blue-600" to={`${order.id}`}>
                                    {order.code_order}
                                </Link>
                            </td>
                            <td className="border p-2">{order.user_name || "Khách lẻ"}</td>
                            <td className="border p-2">{Number(order.total_price).toLocaleString()} VND</td>
                            <td className="border p-2 text-center">
                                <select className="border p-1 rounded" value={orderstatus.find((status: any) => status.id === order.order_status_id)?.id || ""} onChange={(e) => handleStatusChange(order.id, e.target.value)}>
                                        {orderstatus.filter((status: any) => status.id >= (orderstatus.find((s: any) => s.id === order.order_status_id)?.id || 0))
                                                    .map((status: any) => (
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
