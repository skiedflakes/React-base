// Dashboard.js
import React, { useState, useEffect } from "react";
import Case from "../../components/Case";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import Avatar from "./assets/GenericAvatar.png"

export default function AuthFailed() {
  useEffect(() => {
    document.title = "eBPLS";
  
  }, []);

  return (
    <Case>
      <section className="section">
        <div className="col-12">
          <div className="row justify-center">
               <img src={Avatar} alt="Bcdts Logo" width="50%" height="50%" />
                   
          </div>
             <div className="row justify-center mt-4">
                <span style={{fontSize: "80", fontWeight:'bold', color: "#505FA4",}} >John Doe</span>
              </div>
              <div className="row justify-center mt-4">
                  <p >
                   Email : email@example.com <br />
                     Mobile No. : +63 912 345 6789<br />
                  </p>
              </div>
        
        </div>
      </section>
    </Case>
  );
}
