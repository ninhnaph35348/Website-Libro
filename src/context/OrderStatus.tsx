import { createContext, useEffect, useState } from "react";
import { IOrderStatus } from "../interfaces/OrderStatus";
import { getAllOrderstatus } from "../services/OrderStatus";

type Props = {
    children: React.ReactNode;
};

export const OrderStatusContext = createContext({} as any);

const OrderStatusProvider = ({ children }: Props) => {
    const [orderstatus, setOrderStatus] = useState<IOrderStatus[]>([]);
    // const [reload, setReload] = useState(false);

    useEffect(() => {
        (async () => {
            const data = await getAllOrderstatus();
            setOrderStatus(data);
        })();
    }, []);


    // const onStatus = async (id: number) => {
    //     try {
    //         if (window.confirm("Bạn có muốn xóa không?")) {
    //             await deleteOrderStatus(id);
    //             alert("Đổi trạng thái thành công!");
    //             setOrderStatus(orderstatuss.filter((orderstatus) => orderstatus.id !== id));
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const onEdit = async (formData: IOrderStatus, id: number | string) => {
    //     try {
    //         const data = await updateOrderStatus(formData, id);
    //         const newOrderStatuss = orderstatuss.map((orderstatus) =>
    //             orderstatus.id === id ? data : orderstatus
    //         );
    //         setOrderStatuss(newOrderStatuss);
    //         alert("Sửa thể loại thành công!");
    //         setReload((prev) => !prev);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <OrderStatusContext.Provider value={{ orderstatus }}>
            {children}
        </OrderStatusContext.Provider>
    );
};

export default OrderStatusProvider;