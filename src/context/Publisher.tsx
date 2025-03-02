import { createContext, useEffect, useState } from "react";
import {
  createPublisher,
  deletePublisher,
  getAllPublishers,
  updatePublisher,
} from "../services/Publisher";
import { IPublishers } from "../interfaces/Publishers";

type Props = {
  children: React.ReactNode;
};

export const PublisherContext = createContext({} as any);

const PublisherProvider = ({ children }: Props) => {
  const [publishers, setPublishers] = useState<IPublishers[]>([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getAllPublishers();
      setPublishers(data);
    })();
  }, [reload]);

  const onAdd = async (dataPublisher: IPublishers) => {
    try {
      const data = await createPublisher(dataPublisher);
      setPublishers([...publishers, data]);
      alert("Thêm nhà xuất bản thành công!");
      setReload((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (id: number) => {
    try {
      if (window.confirm("Bạn có muốn xóa không?")) {
        await deletePublisher(id);
        alert("Xóa nhà xuất bản thành công!");
        setPublishers(publishers.filter((publisher) => publisher.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onEdit = async (formData: IPublishers, id: number | string) => {
    try {
      const data = await updatePublisher(formData, id);
      const newPublishers = publishers.map((publisher) =>
        publisher.id === id ? data : publisher
      );
      setPublishers(newPublishers);
      alert("Sửa nhà xuất bản thành công!");
      setReload((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PublisherContext.Provider value={{ publishers, onAdd, onDelete, onEdit }}>
      {children}
    </PublisherContext.Provider>
  );
};

export default PublisherProvider;
