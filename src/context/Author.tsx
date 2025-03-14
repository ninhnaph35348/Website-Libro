import { createContext, useEffect, useState } from "react";
import { createAuthor, deleteAuthor, getAllAuthors, updateAuthor } from "../services/Author";
import { IAuthor } from "../interfaces/Authors";

type Props = {
    children: React.ReactNode
}
export const AuthorContext = createContext({} as any);

const AuthorProvider = ({ children }: Props) => {
    const [authors, setAuthors] = useState<IAuthor[]>([]);
    const [reload, setReload] = useState(false); // 👈 Thêm state reload

    useEffect(() => {
        (async () => {
            const data = await getAllAuthors();
            setAuthors(data);
        })();
    }, [reload]);

    const onAdd = async (dataAuthor:IAuthor) => {
        try {
            const data = await createAuthor(dataAuthor);
            setAuthors([...authors, data]);
            alert("Thêm tác giả thành công!");
            setReload((prev) => !prev); // 👈 Set lại state reload
        } catch (error) {
            console.log(error);
        }
    };

    const onDelete = async (id: number | string) => {
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

    const onEdit = async (formData:IAuthor, id: number | string) => {
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
