import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAdminById } from "../../../services/UserAdmin";
import { IUser } from "../../../interfaces/User";
import { LoaderPinwheel } from "lucide-react";

const UserAdminDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getAdminById(id as string);
      setUser(data);
    })();
  }, [id]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderPinwheel className="animate-spin w-12 h-12 text-gary-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="p-10 w-full mx-auto bg-white shadow-xl rounded-lg max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">Thông tin</h2>
        <div className="flex flex-col items-center">
          <img
            src={`http://127.0.0.1:8000/storage/${user.avatar}`}
            alt={user.fullname}
            className="w-40 h-40 object-cover rounded-full mb-6 shadow-md"
          />

          <h3 className="text-2xl font-semibold">{user.fullname}</h3>
          <p className="text-gray-600 text-lg">@{user.username}</p>
        </div>
        <div className="mt-6 text-lg space-y-3  grid justify-items-stretch ">
          <p className="justify-self-center">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="justify-self-center">
            <strong>Số điện thoại:</strong> {user.phone || "Chưa cập nhật"}
          </p>
          <p className="justify-self-center">
            <strong>Địa chỉ:</strong> {user.address || "Chưa có địa chỉ"}
          </p>
          <p className="justify-self-center">
            <strong>Ngày sinh:</strong> {user.birth_date || "Chưa có thông tin"}
          </p>
          <p className="justify-self-center">
            <strong>Trạng thái:</strong>{" "}
            <span
              className={
                user.status === "active" ? "text-green-500" : "text-red-500"
              }
            >
              {user.status === "active" ? "Hoạt động" : "Không hoạt động"}
            </span>
          </p>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-600 text-white px-6 py-3 text-lg rounded-lg shadow-md hover:bg-gray-700"
          >
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAdminDetail;
