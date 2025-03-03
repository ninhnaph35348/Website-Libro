import { createContext, useEffect, useState } from "react";
import { createPublisher, deletePublisher, getAllPublishers, updatePublisher } from "../services/Publisher";

export const PublisherContext = createContext(null);

const PublisherProvider = ({ children }) => {
    const [publishers, setPublishers] = useState([]);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                const data = await getAllPublishers();
                setPublishers(data);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách nhà xuất bản:", error);
            }
        })();
    }, [reload]);

   const onAdd = async (dataPublisher) => {
    try {
        const newPublisher = await createPublisher(dataPublisher);
        setPublishers([...publishers,newPublisher]); 
        alert("Thêm nhà xuất bản thành công!");
        setReload(prev=> !prev)
    } catch (error) {
        console.error("Lỗi khi thêm nhà xuất bản:", error);
    }
};

    

    const onDelete = async (id) => {
        try {
            if (window.confirm("Bạn có muốn xóa không?")) {
                await deletePublisher(id);
                alert("Xóa nhà xuất bản thành công!");
                setPublishers((prev) => prev.filter((publisher) => publisher.id !== id)); 
            }
        } catch (error) {
            console.error("Lỗi khi xóa nhà xuất bản:", error);
        }
    };

    const onEdit = async (formData, id) => {
        try {
            const data = await updatePublisher(formData, id);
            setPublishers((publishers) => 
                publishers.map((publisher) => (publisher.id === id ? data : publisher))
            ); 
            alert("Sửa nhà xuất bản thành công!");
            setReload(prev=> !prev)
        } catch (error) {
            console.error("Lỗi khi sửa nhà xuất bản:", error);
        }
    };

    return (
        <PublisherContext.Provider value={{ publishers, onAdd, onDelete, onEdit }}>
            {children}
        </PublisherContext.Provider>
    );
};

export default PublisherProvider;
// 
