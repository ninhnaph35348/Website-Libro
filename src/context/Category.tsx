import { createContext, useEffect, useState } from "react";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from "../services/Category";
import { ICategories } from "../interfaces/Categories";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
};

export const CategoryContext = createContext({} as any);

const CategoryProvider = ({ children }: Props) => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        toast.error("Lỗi khi tải danh mục!");
        console.error(error);
      }
    })();
  }, [reload]);

  const onAdd = async (dataCategory: ICategories) => {
    try {
      const data = await createCategory(dataCategory);
      setCategories([...categories, data]);
      toast.success("Thêm danh mục thành công!");
      setReload((prev) => !prev);
    } catch (error) {
      toast.error("Lỗi khi thêm danh mục!");
      console.error(error);
    }
  };

  const onDelete = async (id: number) => {
    try {
      if (window.confirm("Bạn có muốn xóa không?")) {
        await deleteCategory(id);
        setCategories(categories.filter((category) => category.id !== id));
        toast.success("Xóa danh mục thành công!");
      }
    } catch (error) {
      toast.error("Lỗi khi xóa danh mục!");
      console.error(error);
    }
  };

  const onEdit = async (formData: ICategories, id: number | string) => {
    try {
      const data = await updateCategory(formData, id);
      setCategories(categories.map((category) => (category.id === id ? data : category)));
      toast.success("Sửa danh mục thành công!");
      setReload((prev) => !prev);
    } catch (error) {
      toast.error("Lỗi khi sửa danh mục!");
      console.error(error);
    }
  };

  return (
    <CategoryContext.Provider value={{ categories, onAdd, onDelete, onEdit }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
