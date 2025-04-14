import { createContext, useState } from "react";
import { IVnPay } from "../interfaces/VnPay";
import {
    createVnPay,
} from "../services/VnPay";

type Props = {
    children: React.ReactNode;
};

export const VnPayContext = createContext({} as any);

const VnPayProvider = ({ children }: Props) => {
    const [vnpays, setVnPays] = useState<IVnPay[]>([]);

    const addVnPay = async (dataVnPay: IVnPay) => {
        try {
            const data = await createVnPay(dataVnPay);
            setVnPays([...vnpays, data]);
            // alert("Thêm thể loại thành công!");
            return data
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <VnPayContext.Provider value={{ vnpays, addVnPay }}>
            {children}
        </VnPayContext.Provider>
    );
};

export default VnPayProvider;