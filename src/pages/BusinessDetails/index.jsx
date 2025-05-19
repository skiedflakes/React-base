// Dashboard.js
import React, { useState, useEffect } from "react";
import Case from "../../components/Case";
import Media from "./assets/Media.png"
import { ArrowRightOutlined, InfoCircleOutlined } from "@ant-design/icons";

const sampleData = [
  { id: 1, name: "Renewal 2025", registration: "2024231235", status: "Pending" },
  { id: 2, name: "New 2024", registration: "2024231235", status: "Completed" }
];

export default function Dashboard() {
  useEffect(() => {
    document.title = "eBPLS";
  
  }, []);

  return (
    <Case>
      <section className="section">
          <div className="row justify-center">
            <div className="col-12 pt-2 pl-5 pr-5">
              <span style={{fontSize:18, color:"black",}}>Business A</span>
              <div className="row justify-center pt-2">
                 <img src={Media} alt="Bcdts Logo" width="100%" height="200" />
                 
              </div>
                <p style={{paddingBottom:15,paddingTop:5,color:"black",}}>
                  808851 | Brgy Mansilingan
                </p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporv
                  
                </p>

                <h1 style={{color:"black",fontSize:16, marginTop:30 }}>Business History</h1>
                {sampleData.map((business) => (
                            <div 
                              key={business.id} 
                              className="flex items-center p-3 rounded-lg mb-2 mt-3" 
                              style={{ 
                                height: "90px", 
                                border: "2px solid #D5DCF8", 
                                backgroundColor: "#D5DCF8", 
                                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", 
                                padding: "12px 16px",
                                gap: "16px"
                              }}
                              onClick={() => console.log(`Clicked on ${business.name}`)}
                            >
                              <div className="flex items-center justify-center bg-blue-100 rounded-full" 
                                  style={{ width: "36px", height: "36px" }}>
                                <InfoCircleOutlined style={{ color: "black", fontSize: 16 }} />
                              </div>

                              <div className="flex-1">
                                <h2 className="font-bold" style={{ color: "black", fontSize: 12, marginBottom: "4px" }}>
                                  {business.name}
                                </h2>
                                <p style={{ color: "black", fontSize: 12, marginBottom: "2px" }}>
                                  Permit No: {business.registration}
                                </p>
                                <p style={{ color: "black", fontSize: 12 }}>
                                  Status: {business.status}
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
