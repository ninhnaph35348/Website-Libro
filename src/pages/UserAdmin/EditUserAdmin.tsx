import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AdminUserContext } from "../../context/UserAdmin";
import { useForm } from "react-hook-form";
import { getAdminById } from "../../services/UserAdmin";
import { IUser } from "../../interfaces/User";

const EditUserAdmin = () => {
  const { onEdit } = useContext(AdminUserContext);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IUser>();
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    (async () => {
      try {
        const user = await getAdminById(param.id as string | number);
        if (!user) {
          console.error("Không tìm thấy user");
          return;
        }
        reset({
          fullname: user.fullname || "",
          email: user.email || "",
          role: user.role || "user",
          username: user.username || "",
          address: user.address || "",
          phone: user.phone || "",
          birth_date: user.birth_date || "",
        });
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu user:", error);
      }
    })();
  }, [param.id, reset]);

  const onSubmit = async (user: IUser) => {
    if (!user.avatar) {
      user.avatar = getValues("avatar"); // ✅ Giữ nguyên avatar nếu không đổi
    }
    console.log("Dữ liệu gửi đi:", user);
    await onEdit(user, param.id);
    navigate("..");
  };

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Sửa Thông Tin Người Dùng</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full border p-2 mb-2"
          type="text"
          placeholder="Tên đăng nhập"
          {...register("username", {
            required: "Tên đăng nhập không được để trống",
          })}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
        <input
          className="w-full border p-2 mb-2"
          type="text"
          placeholder="Tên đầy đủ"
          {...register("fullname", { required: "Tên không được để trống" })}
        />
        {errors.fullname && (
          <p className="text-red-500">{errors.fullname.message}</p>
        )}

        <input
          className="w-full border p-2 mb-2"
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email không được để trống" })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          className="w-full border p-2 mb-2"
          type="text"
          placeholder="Địa chỉ"
          {...register("address", { required: "Địa chỉ không được để trống" })}
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}

        <input
          className="w-full border p-2 mb-2"
          type="text"
          placeholder="Số điện thoại"
          {...register("phone", {
            required: "Số điện thoại không được để trống",
          })}
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

        <input
          className="w-full border p-2 mb-2"
          type="date"
          placeholder="Ngày sinh"
          {...register("birth_date")}
        />
        {/* {errors.birth_date && (
          <p className="text-red-500">{errors.birth_date.message}</p>
        )} */}

        <select
          className="w-full border p-2 mb-2"
          {...register("role", { required: "Vai trò không được để trống" })}
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        {errors.role && <p className="text-red-500">{errors.role.message}</p>}

        <div className="flex items-center gap-[2px]">
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-2 rounded text-sm shadow-md"
          >
            Cập nhật
          </button>
          <Link
            to=".."
            className="bg-gray-600 text-white px-3 py-2 text-sm rounded shadow-md hover:bg-gray-700"
          >
            Quay lại
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditUserAdmin;
