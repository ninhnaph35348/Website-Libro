import { createContext, useEffect, useState } from "react";
import {

createGenre,
deleteGenre,
getAllGenre,
updateGenre,
} from "../services/Genre";
import { IGenre } from "../interfaces/Genre";

type Props = {
children: React.ReactNode;
};

export const GenreContext = createContext({} as any);

const GenreProvider = ({ children }: Props) => {
const [genres, setGenres] = useState<IGenre[]>([]);
const [reload, setReload] = useState(false);

useEffect(() => {
    (async () => {
        const data = await getAllGenre();
        setGenres(data);
    })();
}, [reload]);

const onAdd = async (dataGenre: IGenre) => {
    try {
        const data = await createGenre(dataGenre);
        setGenres([...genres, data]);
        alert("Thêm thể loại thành công!");
        setReload((prev) => !prev);
    } catch (error) {
        console.log(error);
    }
};

const onDelete = async (id: number) => {
    try {
        if (window.confirm("Bạn có muốn xóa không?")) {
            await deleteGenre(id);
            alert("Xóa thể loại thành công!");
            setGenres(genres.filter((genre) => genre.id !== id));
        }
    } catch (error) {
        console.log(error);
    }
};

const onEdit = async (formData: IGenre, id: number | string) => {
    try {
        const data = await updateGenre(formData, id);
        const newGenres = genres.map((genre) =>
            genre.id === id ? data : genre
        );
        setGenres(newGenres);
        alert("Sửa thể loại thành công!");
        setReload((prev) => !prev);
    } catch (error) {
        console.log(error);
    }
};

return (
    <GenreContext.Provider value={{ genres, onAdd, onDelete, onEdit }}>
        {children}
    </GenreContext.Provider>
);
};

export default GenreProvider;