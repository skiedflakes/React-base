// Dashboard.js
import React, { useState, useEffect } from "react";
import Case from "../../components/Case";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "./spinner.css"; // Custom CSS file
import { useNavigate } from "react-router-dom";

export default function AuthFailed() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "eBPLS";

    // Simulated fetch to check authentication



     const getSSOData = async () => {
    try {
      
        const userdata = {
          firstname: "EDBERT",
          lastname: "GARCIA",
          middlename: "na",
        };
        const response = await fetch("http://localhost:5000/api/sso/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userdata),
        });

        if (response.ok) {
              const data = await response.json();
              if (data.success) {
                 const middleInitial = userdata.middlename ? userdata.middlename.trim().charAt(0) : "";
                const fullName = `${userdata.firstname} ${middleInitial ? middleInitial + "." : ""} ${userdata.lastname}`;

                  const userWithToken = { ...userdata, token: data.token, fullName:fullName };

               // Save combined object to localStorage as JSON string
                 localStorage.setItem("userdata", JSON.stringify(userWithToken));
                navigate("/business", { replace: true });
              } else {
                localStorage.clear();
                navigate("/authfailed", { replace: true });
              }
            } else {
              localStorage.clear();
            navigate("/authfailed", { replace: true });
            }
          } catch (error) {
            localStorage.clear();
            navigate("/authfailed", { replace: true });
          }
        };

    const checkAuth = async () => {
    try {
      
        const userdata = {
          firstname: "EDBERT",
          lastname: "GARCIA",
          middlename: "na",
        };
        const response = await fetch("http://localhost:5000/api/sso/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userdata),
        });

        if (response.ok) {
              const data = await response.json();
              if (data.success) {
                 const middleInitial = userdata.middlename ? userdata.middlename.trim().charAt(0) : "";
                const fullName = `${userdata.firstname} ${middleInitial ? middleInitial + "." : ""} ${userdata.lastname}`;

                  const userWithToken = { ...userdata, token: data.token, fullName:fullName };

               // Save combined object to localStorage as JSON string
                 localStorage.setItem("userdata", JSON.stringify(userWithToken));
                navigate("/business", { replace: true });
              } else {
                localStorage.clear();
                navigate("/authfailed", { replace: true });
              }
            } else {
              localStorage.clear();
            navigate("/authfailed", { replace: true });
            }
          } catch (error) {
            localStorage.clear();
            navigate("/authfailed", { replace: true });
          }
        };

    checkAuth();
  }, [0]);

  return (
    <Case>
      <section className="section">
        <div className="col-12">
          <div className="row justify-center">
             
          </div>
             <div className="row justify-center mt-4">
                 <div className="spinner"></div>
              </div>
              <div className="row justify-center mt-4">
                   <p className="mt-4 text-xl text-[#505FA4] font-semibold">Authenticating...</p>
              </div>
        </div>
      </section>
    </Case>
  );
}
