// Dashboard.js
import React, { useState, useEffect } from "react";
import Case from "../../components/Case";
import { ExclamationCircleOutlined } from "@ant-design/icons";



export default function AuthFailed() {
  useEffect(() => {
    document.title = "eBPLS";
  
  }, []);

  return (
    <Case>
      <section className="section">
        <div className="col-12">
          <div className="row justify-center">
                 <ExclamationCircleOutlined style={{ fontSize: "80px", color: "#505FA4", marginTop:200 }}/>
                   
          </div>
             <div className="row justify-center mt-4">
                <span style={{fontSize: "80", fontWeight:'bold', color: "#505FA4",}} >Authentication Failed</span>
              </div>
              <div className="row justify-center mt-4">
                  <p >
                    Please contact our support team at <br />
                    <a href="mailto:email@example.com" className="text-blue-500">email@example.com</a> or call <br />
                    <a href="tel:+639123456789" className="text-blue-500">+63 912 345 6789</a> for assistance.
                  </p>
              </div>
        
        </div>
      </section>
    </Case>
  );
}
