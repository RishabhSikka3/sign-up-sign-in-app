// src/components/AppRoutes.tsx
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";
import Dashboard from "./dashboard/Dashboard";
import ProtectedRoute from "../middleware/ProtectedRoute";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
