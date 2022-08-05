import { Navigate } from "react-router-dom";
import { useAuth } from "./authProvider";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  console.log('RequireAuth', auth)
  if (!auth.isUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
