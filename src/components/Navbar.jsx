
import { useEffect, useState } from "react";

import { useNavigate,useLocation  } from "react-router-dom";
import Logo from './assets/logo.png';
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function Navbar() {
  const navigate = useNavigate();
 const location = useLocation(); // Get current path

  useEffect(() => {
    document.title = "Dashboard";
    // if (!getUser()) {
    //   navigate("/login");
    // }
  }, []);

  const handleBack = () => {
    navigate(-1); // Go back
  };

  const isBusinessRoute = location.pathname === "/business";

  return (
  <div>

<div className="flex justify-center items-center mt-4">
  <img src={Logo} alt="Bcdts Logo" width="50" height="50" />
</div>


    <nav className="navbar" >
      <div className="flex items-center justify-between bg-gray-800 p-4" style={{ width: "100%" }}>


          {!isBusinessRoute && (
          <ArrowLeftOutlined
            onClick={handleBack}
            style={{ fontSize: "18px", color: "black", cursor: "pointer" }}
          />
        )}
      </div>
      <form className="form-inline ml-auto"></form>
    </nav>
  
  </div>

  );
}
