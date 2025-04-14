import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../../context/Product";
import { CategoryContext } from "../../../context/Category";
import { AuthorContext } from "../../../context/Author";
import { PublisherContext } from "../../../context/Publisher";
import { LanguageContext } from "../../../context/Language";
import { IProduct } from "../../../interfaces/Products";
import { GenreContext } from "../../../context/Genre";
import { getProductById } from "../../../services/Product";

const EditProduct = () => {
  const { onEdit } = useContext(ProductContext);
  const { categories, getAllCategory } = useContext(CategoryContext);
  const { authors, getAllAuthor } = useContext(AuthorContext);
  const { publishers, getAllPublisher } = useContext(PublisherContext);
  const { languages, getAllLanguagies } = useContext(LanguageContext);
  const { genres, getAllGenries } = useContext(GenreContext);

  useEffect(() => {
    getAllCategory();
    getAllAuthor();
    getAllPublisher();
    getAllLanguagies();
    getAllGenries();
  }, []);

  const { id } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProduct>();

  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [additionalImages, setAdditionalImages] = useState<File[]>([]);

  // 🛠 Fetch sản phẩm theo ID khi vào trang
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id as string);
        if (response?.data) {
          const product = response.data;

          // ✅ Reset form với dữ liệu từ API
          reset({
            title: product.title,
            code: product.code,
            description: product.description,
            book_count: product.book_count,
            published_year: product.published_year,
            supplier_name: product.supplier_name,
            author_id:
              authors.find((a: any) => a.name === product.author)?.id || "",
            publisher_id:
              publishers.find((p: any) => p.name === product.publisher)?.id ||
              "",
            language_id:
              languages.find((l: any) => l.name === product.language)?.id || "",
            category_id:
              categories.find((c: any) => c.name === product.category)?.id ||
              "",
          });

          // ✅ Cập nhật danh sách thể loại đã chọn từ API
          setSelectedGenres(
            genres
              .filter((g: any) => product.genres.includes(g.name))
              .map((g: any) => g.id)
          );

          setImages(product.image ? [product.image] : []);
          setAdditionalImages(product.images ? product.images : []);
        }
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, reset, genres]);

  // 🖼 Xử lý chọn ảnh
  const handleImageChange = (
    e: ChangeEvent<HTMLInputElement>,
    setImageFunc: React.Dispatch<React.SetStateAction<File[]>>
  ) => {
    if (e.target.files) {
      setImageFunc(Array.from(e.target.files));
    }
  };

  // ❌ Xóa ảnh
  // const handleRemoveImage = (index: number, setImageFunc: React.Dispatch<React.SetStateAction<File[]>>, imagesList: File[]) => {
  //     const updatedImages = [...imagesList];
  //     updatedImages.splice(index, 1); // Xoá đúng ảnh dựa vào index
  //     setImageFunc(updatedImages);
  // };

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  // 🛠 Xử lý chọn/bỏ chọn thể loại
  const handleGenreChange = (genreId: string) => {
    setSelectedGenres(
      (prevGenres) =>
        prevGenres.includes(genreId)
          ? prevGenres.filter((id) => id !== genreId) // Bỏ chọn nếu đã có
          : [...prevGenres, genreId] // Thêm nếu chưa có
    );
  };

  // 🚀 Submit form
  const onSubmit = async (formData: IProduct) => {
    try {
      const updatedData = {
        ...formData,
        genres: selectedGenres,
        image: images.length > 0 ? images[0] : null,
        images: additionalImages.length > 0 ? additionalImages : [],
      };
      console.log(updatedData);

      await onEdit(updatedData, id as string);
      navigate("/admin/product");
    } catch (error) {
      console.error("❌ Lỗi khi cập nhật sản phẩm:", error);
    }
  };

  if (loading) {
    return <div className="text-center">Đang tải dữ liệu...</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Chỉnh sửa sản phẩm
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-6"
      >
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          {/* Nhập thông tin */}
          {[
            { name: "title", label: "Tiêu đề" },
            { name: "code", label: "Mã", readOnly: true },
            { name: "supplier_name", label: "Tên nhà cung cấp" },
            { name: "published_year", label: "Năm sản xuất" },
            { name: "book_count", label: "Số trang" },
            { name: "description", label: "Mô tả", type: "textarea" },
          ].map(({ name, label, type, readOnly }) => (
            <div key={name}>
              <label className="block text-gray-700 font-medium mb-1">
                {label}
              </label>
              {type === "textarea" ? (
                <textarea
                  rows={5}
                  {...register(name as keyof IProduct)}
                  className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <input
                  {...register(name as keyof IProduct)}
                  readOnly={readOnly}
                  className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
              {errors[name as keyof IProduct] && (
                <span className="text-red-500 text-sm">
                  {errors[name as keyof IProduct]?.message}
                </span>
              )}
            </div>
          ))}
          {/* Thể loại (cho phép chọn nhiều) */}
          {/* Thể loại (Checkbox) */}
          {/* Thể loại (Checkbox) */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Thể loại
            </label>
            <div className="flex flex-wrap gap-3">
              {genres.map((genre: any) => (
                <label key={genre.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={genre.id}
                    checked={selectedGenres.includes(genre.id)}
                    onChange={() => handleGenreChange(genre.id)}
                    className="w-4 h-4"
                  />
                  <span>{genre.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          {/* Dropdown chọn danh mục, tác giả, nhà xuất bản, ngôn ngữ */}
          {[
            { name: "author_id", label: "Tác giả", options: authors },
            {
              name: "publisher_id",
              label: "Nhà xuất bản",
              options: publishers,
            },
            { name: "language_id", label: "Ngôn ngữ", options: languages },
            { name: "category_id", label: "Danh mục", options: categories },
          ].map(({ name, label, options }) => (
            <div key={name}>
              <label className="block text-gray-700 font-medium mb-1">
                {label}
              </label>
              <select
                {...register(name as keyof IProduct)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">Chọn {label}</option>
                {options.map((option: any) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          ))}

          {/* Ảnh chính */}
          <h3 className="text-xl font-semibold">Ảnh chính</h3>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setImages)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          {images.length > 0 && (
            <div className="relative w-32 h-32">
              <img
                src={
                  images[0] instanceof File
                    ? URL.createObjectURL(images[0])
                    : `http://127.0.0.1:8000/storage/${images[0]}`
                }
                alt="Ảnh chính"
                className="w-32 h-32 object-cover rounded-lg border"
              />
              <button
                type="button"
                onClick={() => setImages([])}
                className="absolute top-0 right-0 bg-red-500 text-white px-2 py-0.5 rounded-full"
              >
                X
              </button>
            </div>
          )}

          {/* Ảnh bổ sung */}
          <h3 className="text-xl font-semibold">Hình ảnh bổ sung</h3>
          <div className="space-x-2">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleImageChange(e, setAdditionalImages)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <p className="text-[9px]">Bạn chỉ có thể thay đổi toàn bộ ảnh</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {additionalImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={
                    image instanceof File
                      ? URL.createObjectURL(image)
                      : `http://127.0.0.1:8000/storage/${image}`
                  }
                  alt={`Ảnh ${index}`}
                  className="w-24 h-24 object-cover rounded-lg border"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full text-center col-span-2 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Quay lại
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
