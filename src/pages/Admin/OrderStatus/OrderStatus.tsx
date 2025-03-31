import { useContext, useEffect } from "react";
import { OrderStatusContext } from "../../../context/OrderStatus";
import { IOrderStatus } from "../../../interfaces/OrderStatus";

const OrderStatus = () => {
    const { orderstatus, getAllStatus } = useContext(OrderStatusContext);

    useEffect(() => {
        getAllStatus();
    }, []);

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Danh sách trạng thái đơn hàng</h2>
            <table className="w-full border-collapse border border-gray-200 mt-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">STT</th>
                        <th className="border p-2">Tên</th>
                    </tr>
                </thead>
                <tbody>
                    {orderstatus.map((orderstatus: IOrderStatus ,index:number) => (
                        <tr key={orderstatus.id ?? index}>
                            <td className="border p-2 text-center">{index + 1}</td>
                            <td className="border p-2">{orderstatus.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderStatus;
