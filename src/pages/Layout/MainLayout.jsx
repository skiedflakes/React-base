import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="main-wrapper container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
