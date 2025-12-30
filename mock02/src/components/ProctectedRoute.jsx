
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth, children }) => {
  console.log("ProtectedRoute isAuth:", isAuth);
  console.log("LocalStorage auth:", localStorage.getItem("isAuth"));

  if (!isAuth && localStorage.getItem("isAuth") !== "true") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
