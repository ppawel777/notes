import { lazy } from 'react';
import { Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";

const Login = lazy(() => import('../pages/Login'));
const NotFound = lazy(() => import('../pages/NotFound'));

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><MainLayout /></PrivateRoute>} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesComponent;
