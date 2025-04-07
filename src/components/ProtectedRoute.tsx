import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/auth/store";
import { fetchUser } from "../store/auth/authSlice";
import { Loader } from "lucide-react";

const AdminRoute = () => {
  const { user, token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUser()); // Fetch user nếu có token nhưng Redux chưa có user
    }
  }, [token, user, dispatch]);

  if (!token) return <Navigate to="/admin/login" />;
  if (!user) return <Loader className="animate-spin h-6 w-6 mx-auto" />;

  return ["admin", "s.admin"].includes(user.role ) ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default AdminRoute;
