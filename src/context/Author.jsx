import { createContext, useEffect, useState } from "react";
import { createAuthor, deleteAuthor, getAllAuthors, updateAuthor } from "../services/Author";

export const AuthorContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthorProvider = ({ children }) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getAllAuthors();
            setAuthors(data);
        })();
    }, []);

    const onAdd = async (dataAuthor) => {
        try {
            const data = await createAuthor(dataAuthor);
            setAuthors([...authors, data]);
            alert("Thêm tác giả thành công!");
        } catch (error) {
            console.log(error);
        }
    };

    const onDelete = async (id) => {
        try {
            if (window.confirm("Bạn có muốn xóa không?")) {
                await deleteAuthor(id);
                alert("Xóa thành công!");
                setAuthors(authors.filter((author) => author.id !== id));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onEdit = async (formData, id) => {
        try {
            const data = await updateAuthor(formData, id);
            const newAuthors = authors.map((author) =>
                author.id === id ? data : author
            );
            setAuthors(newAuthors);
            alert("Sửa tác giả thành công!");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthorContext.Provider value={{ authors, onAdd, onDelete, onEdit }}>
            {children}
        </AuthorContext.Provider>
    );
};

export default AuthorProvider;
