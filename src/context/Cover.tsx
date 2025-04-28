import { createContext, useState } from "react";
import { ICover } from "../interfaces/Cover";
import {
    createCover,
    deleteCover,
    getAllCover,
    updateCover,
} from "../services/Cover";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
    children: React.ReactNode;
};

export const CoverContext = createContext({} as any);

const CoverProvider = ({ children }: Props) => {
    const [covers, setCovers] = useState<ICover[]>([]);

    const getAllCovers = async () => {
        try {
            const data = await getAllCover();
            setCovers(data);
        } catch (error) {
            console.log("Lỗi khi lấy danh sách biến thể sản phẩm:", error);
        }
    };

    const onAdd = async (dataCover: ICover) => {
        try {
            const data = await createCover(dataCover);
            setCovers([...covers, data]);
            toast.success("Thêm thể loại thành công!");
        } catch (error) {
            console.log(error);
        }
    };

    const onDelete = async (id: number) => {
        try {
            if (window.confirm("Bạn có muốn xóa không?")) {
                await deleteCover(id);
                toast.success("Xóa thể loại thành công!");
                setCovers(covers.filter((cover) => cover.id !== id));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onEdit = async (formData: ICover, id: number | string) => {
        try {
            const data = await updateCover(formData, id);
            const newCovers = covers.map((cover) =>
                cover.id === id ? data : cover
            );
            setCovers(newCovers);
            toast.success("Sửa thể loại thành công!");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <CoverContext.Provider value={{ covers, getAllCovers, onAdd, onDelete, onEdit }}>
            {children}
        </CoverContext.Provider>
    );
};

export default CoverProvider;