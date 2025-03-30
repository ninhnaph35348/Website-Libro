import { createContext, useEffect, useState } from "react";
import {
  createLanguage,
  deleteLanguage,
  getAllLanguage,
  updateLanguage,
} from "../services/Language";
import { ILanguage } from "../interfaces/Language";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
};

export const LanguageContext = createContext({} as any);

const LanguageProvider = ({ children }: Props) => {
  const [languages, setLanguages] = useState<ILanguage[]>([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getAllLanguage();
      setLanguages(data);
    })();
  }, [reload]);

  const onAdd = async (dataLanguage: ILanguage) => {
    try {
      const data = await createLanguage(dataLanguage);
      setLanguages([...languages, data]);
      toast.success("Thêm ngôn ngữ thành công")
      setReload((prev) => !prev);
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
      setReload((prev) => !prev);
    } catch (error) {
      console.log(error);
      toast.error("Lỗi khi sửa ngôn ngữ!");
    }
  };

  return (
    <LanguageContext.Provider value={{ languages, onAdd, onDelete, onEdit }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
