import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IGenre } from "../interfaces/Genre";
import {
  createGenre,
  deleteGenre,
  getAllGenre,
  updateGenre,
} from "../services/Genre";


type Props = {
  children: React.ReactNode;
};

export const GenreContext = createContext({} as any);

const GenreProvider = ({ children }: Props) => {
  const [genres, setGenres] = useState<IGenre[]>([]);

  const getAllGenries = async () => {
    const data = await getAllGenre();
    setGenres(Array.isArray(data) ? data : Object.values(data) || []);
  }

  const onAdd = async (dataGenre: IGenre) => {
    try {
      const data = await createGenre(dataGenre);
      setGenres([...genres, data]);
      toast.success("Thêm thể loại thành công!");
    } catch (error) {
      toast.error("Lỗi khi thêm thể loại!");
      console.error(error);
    }
  };

  const onDelete = async (id: number) => {
    try {
      if (window.confirm("Bạn có muốn xóa không?")) {
        await deleteGenre(id);
        setGenres(genres.filter((genre) => genre.id !== id));
        toast.success("Xóa thể loại thành công!");
      }
    } catch (error) {
      toast.error("Lỗi khi xóa thể loại!");
      console.error(error);
    }
  };

  const onEdit = async (formData: IGenre, id: number | string) => {
    try {
      const data = await updateGenre(formData, id);
      setGenres(genres.map((genre) => (genre.id === id ? data : genre)));
      toast.success("Sửa thể loại thành công!");
    } catch (error) {
      toast.error("Lỗi khi sửa thể loại!");
      console.error(error);
    }
  };

  return (
    <GenreContext.Provider value={{ genres, getAllGenries, onAdd, onDelete, onEdit }}>
      {children}
    </GenreContext.Provider>
  );
};

export default GenreProvider;