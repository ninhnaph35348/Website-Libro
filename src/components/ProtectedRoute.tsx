import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/auth/store";    

const AdminRoute = () => {
  const { user, token } = useSelector((state: RootState) => state.auth);

  if (!user || user.role !== "admin") {
    return <Navigate to="/admin/login" />;
  }

  return <Outlet />;
};

export default AdminRoute;
