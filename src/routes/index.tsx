import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import { Login } from "../pages/Login";
import { PageNotFound } from "../pages/PageNotFound";
import { SignUp } from "../pages/SignUp";
import { PrivateRoutes } from "./route";

export const ServerRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/notfound" element={<PageNotFound />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
};
