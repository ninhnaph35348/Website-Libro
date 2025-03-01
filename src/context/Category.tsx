import { createContext, useEffect, useState } from "react";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from "../services/Category";
import { ICategories } from "../interfaces/Categories";

type Props = {
  children: React.ReactNode;
};

export const CategoryContext = createContext({} as any);

const CategoryProvider = ({ children }: Props) => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getAllCategories();
      setCategories(data);
    })();
  }, []);

  const onAdd = async (dataCategory: ICategories) => {
    try {
      await createCategory(dataCategory); // Gọi API thêm danh mục
      const updatedCategories = await getAllCategories(); // Fetch danh sách mới
      setCategories(updatedCategories); // Cập nhật lại danh mục
      alert("Thêm danh mục thành công!");
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = async (id: number | string) => {
    try {
      if (window.confirm("Bạn có muốn xóa không?")) {
        await deleteCategory(id);
        const updatedCategories = await getAllCategories();
        setCategories(updatedCategories);
        alert("Xóa danh mục thành công!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onEdit = async (formData: ICategories, id: number | string) => {
    try {
      await updateCategory(formData, id);
      const updatedCategories = await getAllCategories();
      setCategories(updatedCategories);
      alert("Sửa danh mục thành công!");
    } catch (error) {
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
