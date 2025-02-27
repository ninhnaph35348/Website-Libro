import { createContext, useEffect, useState } from "react";
import { createLanguage, deleteLanguage, getAllLanguages, updateLanguage } from "../services/Language";

export const LanguageContext = createContext(null);

const LanguageProvider = ({ children }) => {
    const [languages, setLanguages] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const data = await getAllLanguages();
                setLanguages(data);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách ngôn ngữ:", error);
            }
        })();
    }, [reload]);

    const onAdd = async (dataLanguage) => {
        try {
            const data = await createLanguage(dataLanguage);
            if (data) {
                setLanguages([...languages,data])// ✅ Cập nhật state ngay lập tức
                alert("Thêm ngôn ngữ thành công!");
                setReload(prev=> !prev)
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onDelete = async (id) => {
        try {
            if (window.confirm("Bạn có muốn xóa không?")) {
                await deleteLanguage(id);
                setLanguages((prev) => prev.filter((language) => language.id !== id)); 
                alert("Xóa ngôn ngữ thành công!");
            }
        } catch (error) {
            console.error("Lỗi khi xóa ngôn ngữ:", error);
        }
    };

    const onEdit = async (data, id) => {
        try {
            const updatedLanguage = await updateLanguage(data, id);
            setLanguages((languages) =>
                languages.map((language) => (language.id === id ? updatedLanguage : language))
            );
            alert("Cập nhật ngôn ngữ thành công!");
            setReload(prev=> !prev)
        } catch (error) {
            console.error("Lỗi khi cập nhật ngôn ngữ:", error);
        }
    };

    return (
        <LanguageContext.Provider value={{ languages, onAdd, onDelete, onEdit }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
