import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ILanguage } from "../interfaces/Language";
import {
  createLanguage,
  deleteLanguage,
  getAllLanguage,
  updateLanguage,
} from "../services/Language";

type Props = {
  children: React.ReactNode;
};

export const LanguageContext = createContext({} as any);

const LanguageProvider = ({ children }: Props) => {
  const [languages, setLanguages] = useState<ILanguage[]>([]);

  const getAllLanguagies = async () => {
      const data = await getAllLanguage();
      setLanguages(data);
    }

  const onAdd = async (dataLanguage: ILanguage) => {
    try {
      const data = await createLanguage(dataLanguage);
      setLanguages([...languages, data]);
      toast.success("Thêm ngôn ngữ thành công")
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (id: number) => {
    try {
      if (window.confirm("Bạn có muốn xóa không?")) {
        await deleteLanguage(id);
        toast.success("Xóa ngôn ngữ thành công!");
        setLanguages(languages.filter((language) => language.id !== id));
      }
    } catch (error) {
      console.log(error);
      toast.error("Lỗi khi xóa ngôn ngữ!");
    }
  };

  const onEdit = async (formData: ILanguage, id: number | string) => {
    try {
      const data = await updateLanguage(formData, id);
      const newLanguages = languages.map((language) =>
        language.id === id ? data : language
      );
      setLanguages(newLanguages);
      toast.success("Sửa ngôn ngữ thành công!");
    } catch (error) {
      console.log(error);
      toast.error("Lỗi khi sửa ngôn ngữ!");
    }
  };

  return (
    <LanguageContext.Provider value={{ languages, getAllLanguagies, onAdd, onDelete, onEdit }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
