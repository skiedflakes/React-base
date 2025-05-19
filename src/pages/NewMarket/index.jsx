import React, { useState } from "react";
import Case from "../../components/Case";
import { useEffect } from "react";
import MultiStepForm from "../../components/NewMarket";
import "./styles.css";
export default function NewRegistration() {
  useEffect(() => {
    document.title = "New Registration Market";
  }, []);

  return (
    <Case>
      <div
        className="card mt-5"
        style={{ padding: 20, paddingLeft: 40, paddingRight: 40 }}
      >
        <MultiStepForm />
      </div>
    </Case>
  );
}
