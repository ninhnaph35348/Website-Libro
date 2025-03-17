import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IOrder } from "../../../interfaces/Orders";
import { getOrderById } from "../../../services/Order";

interface IData {
    data: IOrder
}
const DetailOrder = () => {
    const [order, setOrder] = useState<IOrder | null>(null);
    // const [quantity, setQuantity] = useState<number>(1);
    const navigate = useNavigate();
    const { code } = useParams<{ code: string }>();

    useEffect(() => {
        (async () => {
            if (code) {
                const data: IData = await getOrderById(code);
                setOrder(data.data);
            }
        })();
    }, [code]);


    if (!order) {
        return (
            <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
                <h2 className="text-xl font-bold mb-4">Không tìm thấy đơn hàng</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
                >
                    Quay lại
                </button>
            </div>
        );
    }

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Chi Tiết Đơn Hàng</h2>
            <div className="border p-4 rounded-md bg-gray-50">
                <p><strong>ID:</strong> {order.id}</p>
                <p><strong>Mã đơn hàng:</strong> {order.code_order}</p>
                <p><strong>Khách hàng:</strong> {order.user_name || "Khách lẻ"}</p>
                <p><strong>Email:</strong> {order.user_email || "Không có"}</p>
                <p><strong>Số điện thoại:</strong> {order.user_phone || "Không có"}</p>
                <p><strong>Địa chỉ:</strong> {order.user_address || "Không có"}</p>
                <p><strong>Tổng tiền:</strong> {Number(order.total_price).toLocaleString()} VND</p>
                <p><strong>Trạng thái:</strong> {order.status}</p>
                <p><strong>Ghi chú:</strong> {order.note || "Không có ghi chú"}</p>
            </div>
            <button
                onClick={() => navigate(-1)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
                Quay lại danh sách
            </button>
        </div>
    );
};

export default DetailOrder;
