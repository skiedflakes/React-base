import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Router from "./components/Router";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import { useNavigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router />
    </>
  );
}
