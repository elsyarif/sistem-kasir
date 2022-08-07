import { Navigate } from "react-router-dom";
import { useAuth } from "./authProvider";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  if (!auth.isUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
