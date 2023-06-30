import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import AdminPanel from "./AdminPanel";

const ProtectedRoute = ({ component: Component, token, ...rest }) => {
  // Check if the user is authenticated (token exists)
  const isAuthenticated = !!token;
  return (
    <Routes>
      <Route
        {...rest}
        element={isAuthenticated ? <AdminPanel /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default ProtectedRoute;
