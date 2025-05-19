
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Logo from './assets/logo.png';
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function Navbar() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Dashboard";
    // if (!getUser()) {
    //   navigate("/login");
    // }
  }, []);

  return (
    <nav className="navbar" >
      <div className="flex items-center justify-between bg-gray-800 p-4" style={{ width: "100%" }}>
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Bcdts Logo" width="50" height="50" />
      
        </div>
        <ArrowLeftOutlined style={{ fontSize: "18px", color: "black" }} />
      </div>
      <form className="form-inline ml-auto"></form>
    </nav>
  );
}
