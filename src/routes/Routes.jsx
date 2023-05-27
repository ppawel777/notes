import { lazy } from 'react';
import { Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";

const HeroesList = lazy(() => import('../pages/HeroesList'));
const Heroes = lazy(() => import('../pages/Heroes'));
const LocationList = lazy(() => import('../pages/LocationList'));
const Location = lazy(() => import('../pages/Location'));
const EpisodeList = lazy(() => import('../pages/EpisodeList'));
const Episode = lazy(() => import('../pages/Episode'));
const Login = lazy(() => import('../pages/Login'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Home = lazy(() => import('../pages/Home'));

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="heroes" element={<PrivateRoute><HeroesList /></PrivateRoute>} />
        <Route path="heroes/:id" element={<PrivateRoute><Heroes /></PrivateRoute>} />
        <Route path="locations" element={<PrivateRoute><LocationList /></PrivateRoute>} />
        <Route path="locations/:id" element={<PrivateRoute><Location /></PrivateRoute>} />
        <Route path="episodes" element={<PrivateRoute><EpisodeList /></PrivateRoute>} />
        <Route path="episodes/:id" element={<PrivateRoute><Episode /></PrivateRoute>} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesComponent;
