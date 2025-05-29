// Dashboard.js
import React, { useState, useEffect } from "react";
import Case from "../../components/Case";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "./spinner.css"; // Custom CSS file
import { useNavigate, useParams,useLocation } from "react-router-dom";

export default function AuthFailed() {
    const navigate = useNavigate();
    const { token } = useParams()
    
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

        const formData = new FormData();
        formData.append('partner_code', 'BACOLOD_CITY_SSO');
        formData.append('partner_secret', '458f1eed529d4828963519d25f54f423')
        formData.append('scope', 'SSO_AUTHENTICATION');
        formData.append('exchange_code', token);

        const getAccessToken = await fetch('https://oauth.e.gov.ph/api/token',{
          method : 'POST',
          body: formData
        })  .then(response => response.json())
        .then(data => data.access_token)
        .catch(error => {
          console.error('Error:', error);
          navigate("/authfailed", { replace: true });
        });

        const accessToken = await getAccessToken

        const authSso = await fetch("https://oauth.e.gov.ph/api/partner/sso_authentication", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
            "Cookie" : 'cross-site-cookie=bar'
          },
        }).then(response => response.json());

        userdata.firstname = authSso.data.first_name
        userdata.lastname = authSso.data.last_name
        userdata.middlename = authSso.data.middle_name

        if(!authSso.ok){
          navigate("/authfailed", { replace: true });
        }

        localStorage.setItem('egovUserData',JSON.stringify(authSso.data))

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
                const fullName = `${userdata.firstname} ${middleInitial ? middleInitial.toUpperCase() + "." : ""} ${userdata.lastname}`;

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
  }, []);

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
