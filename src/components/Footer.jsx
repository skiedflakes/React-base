import React from "react";
import { Link } from "react-router-dom";
import mitcs from "./assets/mitcs.jpg";
export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-left">
        <div className="row">
          eBPLS SSO v1.0 powered by MITCS{" "}
          <img
            src={mitcs}
            alt="Bcdts Logo"
            style={{
              marginLeft: 5,
              width: 20,
              height: 20,
              alignSelf: "center",
            }}
          />
        </div>
      </div>
    </footer>
  );
}
