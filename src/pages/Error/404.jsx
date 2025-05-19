import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <>
      <div id="app">
        <section className="section">
          <div class="container mt-5">
            <div class="page-error">
              <div class="page-inner">
                <h1>404</h1>
                <div class="page-description">Page not found.</div>
                <div class="page-search">
                  <div class="mt-3">
                    <Link to="/">Back to Home</Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="simple-footer mt-5"></div>
          </div>
        </section>
      </div>
    </>
  );
}
