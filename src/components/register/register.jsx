import React, { useState } from "react";
import axios from "axios"; // Import Axios for HTTP requests
import "./assets/css/register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/register", {
        email,
        password,
        role: "user", // Assuming default role is 'user'
      });
      // Handle successful registration, such as redirecting to login page
    } catch (error) {
      setError("Failed to register user"); // Handle registration error
    }
  };

  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleRegister}>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control form-control-lg"
                    placeholder="Enter your email address"
                  />
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                  />
                </div>
                {/* Error message */}
                {error && <div className="text-danger mb-4">{error}</div>}
                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-success btn-lg btn-block"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
