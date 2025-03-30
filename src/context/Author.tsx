import { createContext, useEffect, useState } from "react";
import {
  createAuthor,
  deleteAuthor,
  getAllAuthors,
  updateAuthor,
} from "../services/Author";
import { IAuthor } from "../interfaces/Authors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
};

export const AuthorContext = createContext({} as any);

const AuthorProvider = ({ children }: Props) => {
  const [authors, setAuthors] = useState<IAuthor[]>([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllAuthors();
        setAuthors(data);
      } catch (error) {
        toast.error("Lỗi khi tải danh sách tác giả!");
        console.error(error);
      }
    })();
  }, [reload]);

  const onAdd = async (dataAuthor: IAuthor) => {
    try {
      const data = await createAuthor(dataAuthor);
      setAuthors([...authors, data]);
      toast.success("Thêm tác giả thành công!");
      setReload((prev) => !prev);
    } catch (error) {
      toast.error("Lỗi khi thêm tác giả!");
      console.error(error);
    }
  };

  const onDelete = async (id: number) => {
    try {
      if (window.confirm("Bạn có muốn xóa tác giả này không?")) {
        await deleteAuthor(id);
        setAuthors(authors.filter((author) => author.id !== id));
        toast.success("Xóa tác giả thành công!");
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
      toast.success("Sửa tác giả thành công!");
      setReload((prev) => !prev);
    } catch (error) {
      toast.error("Lỗi khi sửa tác giả!");
      console.error(error);
    }
  };

  return (
    <AuthorContext.Provider value={{ authors, onAdd, onDelete, onEdit }}>
      {children}
    </AuthorContext.Provider>
  );
};

export default AuthorProvider;
