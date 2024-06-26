import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../../components/layout";

const LoginPage = () => {
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let email = new FormData(e.target).get("Email");
    let password = new FormData(e.target).get("Password");
    setBtnLoading(true);
    setTimeout(() => {
      navigate("/product");
    }, 1000);
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
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form
              onSubmit={handleLogin}
              className="needs-validation"
              noValidate
            >
              <div className="my-3">
                <label htmlFor="floatingInput">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  name="floatingInput"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  name="floatingPassword"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link
                    to="/signup"
                    className="text-decoration-underline text-info"
                  >
                    Signup
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="submit"
                  disabled={btnLoading ? true : false}
                >
                  {btnLoading && <i class="fa fa-spinner fa-spin"></i>} Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
