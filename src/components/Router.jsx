import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../pages/Layout/MainLayout";
import AuthFailed from "../pages/AuthFailed"
import Business from "../pages/Business"
import BusinessDetails from "../pages/BusinessDetails"
import Profile from "../pages/Profile"
import Error403 from "../pages/Error/403";
import Error404 from "../pages/Error/404";

const BASE_URL = import.meta.env.VITE_BASE_URL;
export default function Router() {
  return (
    <Routes>
      <Route path="/403" element={<Error403 />} />
      <Route
        path="/"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />

      <Route
        path="/authfailed"
        element={
          <MainLayout>
            <AuthFailed />
          </MainLayout>
        }
      />

      <Route
        path="/business"
        element={
          <MainLayout>
            <Business />
          </MainLayout>
        }
      />

      <Route
        path="/businessdetail/:id"
        element={
          <MainLayout>
            <BusinessDetails />
          </MainLayout>
        }
      />
        <Route
        path="/profile"
        element={
          <MainLayout>
            <Profile />
          </MainLayout>
        }
      />



      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
