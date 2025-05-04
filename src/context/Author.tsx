import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IAuthor } from "../interfaces/Authors";
import {
  createAuthor,
  deleteAuthor,
  getAllAuthors,
  updateAuthor,
} from "../services/Author";

type Props = {
  children: React.ReactNode;
};

export const AuthorContext = createContext({} as any);

const AuthorProvider = ({ children }: Props) => {
  const [authors, setAuthors] = useState<IAuthor[]>([]);

  const getAllAuthor = async () => {
      try {
        const data = await getAllAuthors();
        setAuthors(data);
      } catch (error) {
        toast.error("Lỗi khi tải danh sách tác giả!");
        console.error(error);
      }
    }

  const onAdd = async (dataAuthor: IAuthor) => {
    try {
      const data = await createAuthor(dataAuthor);
      setAuthors([...authors, data]);
      toast.success(data.message);
    } catch (error) {
      toast.error("Lỗi khi thêm tác giả!");
      console.error(error);
    }
  };

  const onDelete = async (id: number) => {
    try {
      if (window.confirm("Bạn có muốn xóa tác giả này không?")) {
        const data = await deleteAuthor(id);
        setAuthors(authors.filter((author) => author.id !== id));
        toast.success(data.message);
      }
    } catch (error) {
      toast.error("Lỗi khi xóa tác giả!");
      console.error(error);
    }
  };

  const onEdit = async (formData: IAuthor, id: number | string) => {
    try {
      const data = await updateAuthor(formData, id);
      setAuthors(authors.map((author) => (author.id === id ? data : author)));
      toast.success(data.message);
    } catch (error) {
      toast.error("Lỗi khi sửa tác giả!");
      console.error(error);
    }
  };

  return (
    <AuthorContext.Provider value={{ authors, getAllAuthor, onAdd, onDelete, onEdit }}>
      {children}
    </AuthorContext.Provider>
  );
};

export default AuthorProvider;
