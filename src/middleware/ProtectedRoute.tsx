// src/components/shared/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were trying to go to
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
