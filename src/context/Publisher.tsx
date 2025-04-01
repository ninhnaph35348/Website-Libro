import { createContext, useState } from "react";
import {
  createPublisher,
  deletePublisher,
  getAllPublishers,
  updatePublisher,
} from "../services/Publisher";
import { IPublishers } from "../interfaces/Publishers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
};

export const PublisherContext = createContext({} as any);

const PublisherProvider = ({ children }: Props) => {
  const [publishers, setPublishers] = useState<IPublishers[]>([]);

  const getAllPublisher = async () => {
      try {
        const data = await getAllPublishers();
        setPublishers(data);
      } catch (error) {
        toast.error("Lỗi khi tải danh sách nhà xuất bản!");
        console.error(error);
      }
    }

  const onAdd = async (dataPublisher: IPublishers) => {
    try {
      const data = await createPublisher(dataPublisher);
      setPublishers([...publishers, data]);
      toast.success("Thêm nhà xuất bản thành công!");
    } catch (error) {
      toast.error("Lỗi khi thêm nhà xuất bản!");
      console.error(error);
    }
  };

  const onDelete = async (id: number) => {
    try {
      if (window.confirm("Bạn có muốn xóa không?")) {
        await deletePublisher(id);
        setPublishers(publishers.filter((publisher) => publisher.id !== id));
        toast.success("Xóa nhà xuất bản thành công!");
      }
    } catch (error) {
      toast.error("Lỗi khi xóa nhà xuất bản!");
      console.error(error);
    }
  };

  const onEdit = async (formData: IPublishers, id: number | string) => {
    try {
      const data = await updatePublisher(formData, id);
      setPublishers(publishers.map((publisher) => (publisher.id === id ? data : publisher)));
      toast.success("Sửa nhà xuất bản thành công!");
    } catch (error) {
      toast.error("Lỗi khi sửa nhà xuất bản!");
      console.error(error);
    }
  };

  return (
    <PublisherContext.Provider value={{ publishers, getAllPublisher, onAdd, onDelete, onEdit }}>
      {children}
    </PublisherContext.Provider>
  );
};

export default PublisherProvider;
