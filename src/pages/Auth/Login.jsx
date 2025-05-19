import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import appConfig from "../../config/appConfig";
// import { setTokenWithExpiration, getTokenWithExpiration } from "./Session";
import InputValidation from "../Layout/Components/InputValidation";
import { setUserLoggedIn, getUser, expireUser } from "./Session";
export default function Login() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    document.title = "Login";
    expireUser();
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const initialFormData = {
    username: "",
    password: "",
  };

  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
  });

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Validate input description
    if (!formData.username) {
      formIsValid = false;
      errors.username = "username is required";
    }

    // Validate input description
    if (!formData.password) {
      formIsValid = false;
      errors.password = "Password is required";
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    // window.location.href = "/dashboard";
    if (validateForm()) {
      const url = "https://api.bacolodcity.gov.ph/dashboard/auth/index.php"; // Replace with your authentication endpoint
      const mformData = new FormData();
      mformData.append("username", formData.username);
      mformData.append("password", formData.password);

      try {
        const response = await fetch(url, {
          method: "POST",
          body: mformData,
        });

        const result = await response.json();
        console.log(result.data[0]);
        if (result && result?.data[0].status == 1) {
          setUserLoggedIn(result?.data[0]);
          MySwal.fire({
            title: "Success!",
            text: "Login successfully",
            icon: "success",
            timer: 1500,
          }).then(() => {
            window.location.href = "/";
          });
        } else {
          MySwal.fire({
            title: "Failed!",
            text: error.response.data.message,
            icon: "error",
          });
        }
        return result; // Handle the response data as needed
      } catch (error) {
        console.error("Error:", error);
        MySwal.fire({
          title: "Failed!",
          text: error.response.data.message,
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="row">
      <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 tw-mt-10">
        <div className="card">
          <div className="card-header">
            <h4>Bacolod City Analytics</h4>
          </div>
          <div className="card-body">
            <form onSubmit={loginHandler}>
              <InputValidation
                label="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleInputChange}
                error={formErrors.username}
              />
              <InputValidation
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                error={formErrors.password}
              />
              <div className="form-group">
                <button className="btn btn-lg btn-block btn-primary tw-text-white">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="mt-5 text-muted text-center">
                    Don't have an account?{" "}
                    <Link to="/register">Create One</Link>
                </div> */}
        <div className="simple-footer">Powered by MITCS</div>
      </div>
    </div>
  );
}
