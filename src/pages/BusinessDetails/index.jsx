// BusinessDetails.js
import React, { useState, useEffect } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import Case from "../../components/Case";
import Media from "./assets/Media.png"
import { ArrowRightOutlined, InfoCircleOutlined } from "@ant-design/icons";
const sampleData = [
  { id: 1, name: "Renewal 2025", registration: "2024231235", status: "Pending" },
  { id: 2, name: "New 2024", registration: "2024231235", status: "Completed" }
];

export default function BusinessDetails() {
  const storedUser = JSON.parse(localStorage.getItem("userdata"));
  const { id } = useParams();
  const [businessDetailData, setBusinessDetailData] = useState([]); 
  const navigate = useNavigate();


  useEffect(() => {
    document.title = "eBPLS";
 
    // Simulated fetch to check authentication
    const getBusinessdetail = async () => {
    try {
          const businessid = {ban:id};

        const response = await fetch("http://localhost:5000/api/sso/business-with-history", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${storedUser.token}`,
        
          },
               body: JSON.stringify(businessid),
        });

        if (response.ok) {
              const data = await response.json();
        
              if (data.success) {
                setBusinessDetailData(data.data)
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

    getBusinessdetail();
  }, [0]);


  return (
    <Case>
      <section className="section">
          <div className="row justify-center">
            <div className="col-12 pt-2 pl-5 pr-5">
              <span style={{fontSize:18, color:"black",}}>  {businessDetailData?.business?.TRADENAME}</span>
              <div className="row justify-center pt-2">
                 <img src={Media} alt="Bcdts Logo" width="100%" height="200" />
                 
              </div>
                <p style={{paddingBottom:15,paddingTop:5,color:"black",}}>
                  {businessDetailData?.business?.BUSINESSID} | Brgy {businessDetailData?.business?.BRGYNAME}
                </p>
                 <p> {businessDetailData?.business?.BUSINESSADDRESS}
                  
                </p>

                <h1 style={{color:"black",fontSize:16, marginTop:30 }}>Business History</h1>
                {businessDetailData?.history?.map((business) => (
                            <div 
                              key={business.APPLICATIONNO} 
                              className="flex items-center p-3 rounded-lg mb-2 mt-3" 
                              style={{ 
                                height: "90px", 
                                border: "2px solid #D5DCF8", 
                                backgroundColor: "#D5DCF8", 
                                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", 
                                padding: "12px 16px",
                                gap: "16px"
                              }}
                              onClick={() => console.log(`Clicked on ${business?.name}`)}
                            >
                              <div className="flex items-center justify-center bg-blue-100 rounded-full" 
                                  style={{ width: "36px", height: "36px" }}>
                                <InfoCircleOutlined style={{ color: "black", fontSize: 16 }} />
                              </div>

                              <div className="flex-1">
                                <h2 className="font-bold" style={{ color: "black", fontSize: 12, marginBottom: "4px" }}>
                                  Year {business?.YEARAPPLIED}
                                </h2>
                                <p style={{ color: "black", fontSize: 12, marginBottom: "2px" }}>
                                  Permit No: {business?.PERMITNO?business?.PERMITNO:'N/A'}
                                </p>
                                <p style={{ color: "black", fontSize: 12 }}>
                                  Status: {business?.PERMITNO!=''?'Completed':'Pending'}
                                </p>
                              </div>
                            </div>
                          ))}

              </div>
            </div>
      </section>
    </Case>
  );
}
