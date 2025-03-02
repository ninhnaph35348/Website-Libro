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

// eslint-disable-next-line react/prop-types
const CategoryProvider = ({ children }: Props) => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [reload, setReload] = useState(false); // 👈 Thêm state reload
  useEffect(() => {
    (async () => {
      const data = await getAllCategories();
      setCategories(data);
    })();
  }, [reload]); // 👈 Thêm reload vào dependency array

  const onAdd = async (dataCategory: ICategories) => {
    try {
      const data = await createCategory(dataCategory);
      setCategories([...categories, data]);
      alert("Thêm danh mục thành công!");
      setReload((prev) => !prev); // 👈 Set lại state reload
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (id: number) => {
    try {
      if (window.confirm("Bạn có muốn xóa không?")) {
        await deleteCategory(id);
        alert("Xóa danh mục thành công!");
        setCategories(categories.filter((category) => category.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onEdit = async (formData: ICategories, id: number | string) => {
    try {
      const data = await updateCategory(formData, id);
      const newCategories = categories.map((category) =>
        category.id === id ? data : category
      );
      setCategories(newCategories);
      alert("Sửa danh mục thành công!");
      setReload((prev) => !prev); // 👈 Set lại state reload
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CategoryContext.Provider value={{ categories, onAdd, onDelete, onEdit }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
