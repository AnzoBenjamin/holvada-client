import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./store/auth-context";

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Navigate to={"/login"} />;
  } else return <>{children}</>;
};
