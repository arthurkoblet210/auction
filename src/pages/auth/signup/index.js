import React, { useState, useEffect, useMemo } from "react";
import { Footer, Navbar } from "../../../components/layout";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import PhoneInput from "react-phone-input-2";

const SignupPage = () => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // country-select
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  // Signal of Submit
  const handleSignup = (e) => {
    e.preventDefault();
    let name = new FormData(e.target).get("Name");
    let email = new FormData(e.target).get("Email");
    let country = new FormData(e.target).get("Country");
    let password = new FormData(e.target).get("Password");
    if (country != "") {
      setBtnLoading(true);
      // NotificationManager.success("Signup Success!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");
    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Signup</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form
              className="needs-validation"
              noValidate
              onSubmit={handleSignup}
            >
              <div className="form my-3">
                <label htmlFor="Name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  name="Name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  name="Email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Country">Country</label>
                <Select
                  options={options}
                  id="Country"
                  name="Country"
                  value={value}
                  onChange={changeHandler}
                />
                {error && <p>Please select a country.</p>}
              </div>
              <div className="form my-3">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  name="Password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="ConfirmPassword"
                  name="ConfirmPassword"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div className="my-3">
                <p>
                  Already has an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-underline text-info"
                  >
                    Login
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit" disabled={btnLoading ? true : false}>
                  {btnLoading && <i class="fa fa-spinner fa-spin"></i>}
                  {" "} Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <NotificationContainer />
    </>
  );
};

export default SignupPage;
