import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import { Link } from "react-router-dom";

function Login() {
  // State variables to store user input and error message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      if (response.data.role === "user") {
        window.location.href = "/";
      } else if (response.data.role === "admin") {
        window.location.href = "/about";
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleLogin}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f" />
                </button>
                <button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-twitter" />
                </button>
                <button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-linkedin-in" />
                </button>
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              {/* Email input */}
              <div data-mdb-input-init="" className="form-outline mb-4">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control form-control-lg"
                  placeholder="Enter a valid UserName"
                />
                <label className="form-label" htmlFor="form3Example3">
                  User Name
                </label>
              </div>
              {/* Password input */}
              <div data-mdb-input-init="" className="form-outline mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <Link to="/register" className="link-danger">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
