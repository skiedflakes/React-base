// Dashboard.js
import React, { useState, useEffect } from "react";
import Case from "../../components/Case";
import { ArrowRightOutlined, DownOutlined, SettingOutlined } from "@ant-design/icons";
import { useParams ,useNavigate} from "react-router-dom";
const sampleData = [
  { id: 1, name: "Construction Company", registration: "808851", address: "Brgy Mansilingan" },
  { id: 2, name: "Coffee Shop", registration: "901221", address: "Brgy Estefania" }
];

export default function Dashboard() {
const navigate = useNavigate();
const storedUser = JSON.parse(localStorage.getItem("userdata"));
const [businessData, setBussinessData] = useState([]); 

  useEffect(() => {
    document.title = "eBPLS";

    // Simulated fetch to check authentication
    const getBusiness = async () => {
    try {
      
        const response = await fetch("http://localhost:5000/api/sso/taxpayer-business", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${storedUser.token}`,
          },
        });

        if (response.ok) {
              const data = await response.json();
            
              if (data.success) {
          
                 setBussinessData(data.data)
              } else {
                 navigate("/authfailed", { replace: true });
              }
            } else {
               navigate("/authfailed", { replace: true });
            }
          } catch (error) {
           navigate("/authfailed", { replace: true });
          }
        };

    getBusiness();
  }, [0]);


  return (
    <Case>
      <section className="section">
          <div className="row justify-center">
            <div className="col-12 pt-2 pl-5 pr-5">
              <div
                className="flex items-center justify-between pl-4 pr-4 mb-4 rounded-lg"
                style={{ height: "50px", border: "2px solid #505FA4" }}>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center">A</div>
                  <span style={{fontSize:18, color:"#505FA4" }}>{storedUser.fullName}</span>
                </div>
                <DownOutlined className="text-gray-500" />
              </div>

                <h1 style={{color:"black",fontSize:16, }}>Business Available</h1>
                  {businessData.map((business) => (
                    <div 
                      key={business.BUSINESSID} 
                      className="flex justify-between items-center p-3 rounded-lg mb-2 mt-3" 
                      style={{ 
                        height: "90px", 
                        border: "2px solid #D5DCF8", 
                        backgroundColor: "#D5DCF8", 
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" 
                      }}
                     onClick={() => navigate(`/businessdetail/${business.BUSINESSID}`)}>
                      <div>
                        <h2 className="font-bold" style={{ color: "black", fontSize: 14 }}>
                          {business.TRADENAME}
                        </h2>
                        <p style={{ color: "black", fontSize: 14 }}>
                          {business.BUSINESSID} | BRGY. {business.BRGYNAME}
                        </p>
                      </div>
                        <ArrowRightOutlined style={{ color: "black", fontSize: 16 }} />
                    </div>
                  ))}
              </div>
            </div>
      </section>
    </Case>
  );
}
