import { createContext, useEffect, useState } from "react";
import {

createCover,
deleteCover,
getAllCover,
updateCover,
} from "../services/Cover";
import { ICover } from "../interfaces/Cover";

type Props = {
children: React.ReactNode;
};

export const CoverContext = createContext({} as any);

const CoverProvider = ({ children }: Props) => {
const [covers, setCovers] = useState<ICover[]>([]);
const [reload, setReload] = useState(false);

useEffect(() => {
    (async () => {
        const data = await getAllCover();
        setCovers(data);
    })();
}, [reload]);

const onAdd = async (dataCover: ICover) => {
    try {
        const data = await createCover(dataCover);
        setCovers([...covers, data]);
        alert("Thêm thể loại thành công!");
        setReload((prev) => !prev);
    } catch (error) {
        console.log(error);
    }
};

const onDelete = async (id: number) => {
    try {
        if (window.confirm("Bạn có muốn xóa không?")) {
            await deleteCover(id);
            alert("Xóa thể loại thành công!");
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
        alert("Sửa thể loại thành công!");
        setReload((prev) => !prev);
    } catch (error) {
        console.log(error);
    }
};

return (
    <CoverContext.Provider value={{ covers, onAdd, onDelete, onEdit }}>
        {children}
    </CoverContext.Provider>
);
};

export default CoverProvider;