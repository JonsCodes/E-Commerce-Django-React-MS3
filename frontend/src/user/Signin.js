import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import Base from "../core/Base";
import { signin, authenticate, isAuthenticated } from "../auth/helper";

const Signin = () => {
  const [values, setValues] = useState({
    email: "Tester@me.com",
    password: "12345",
    error: "",
    success: false,
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, success, loading, didRedirect } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    signin({ email, password })
      .then((data) => {
        console.log("DATA", data);
        if (data.token) {
          authenticate(data, () => {
            console.log("TOKEN ADDED");
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        } else {
          setValues({
            ...values,
            loading: false,
            error: data.error,
          });
        }
      })
      .catch((e) => console.log(e));
  };

  const performRedirect = () => {
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => (
    loading && <div className="alert-loading"><h2>Loading...</h2></div>
  );

  const successMessage = () => (
    success && (
      <div className="row">
        <div className="alert-messages">
          <div className="alert alert-success">
            New account created successfully. Please{" "}
            <Link to="/signin">login now.</Link>
          </div>
        </div>
      </div>
    )
  );

  const errorMessage = () => (
    error && (
      <div className="row">
        <div className="alert-message">
          <div className="alert alert-danger">{error}</div>
        </div>
      </div>
    )
  );

  const signInForm = () => (
    <div className="Signin-container">
      <div className="sign-in-box">
        <h2>Welcome Back Gangsta!!!</h2>
        <form>
          <div className="Email">
            <label className="Label">Email</label>
            <br/>
            <input
              name="email"
              className="form-control"
              value={email}
              onChange={handleChange("email")}
              type="text"
            />
          </div>

          <div className="password">
            <label className="Label">password</label>
            <br/>
            <input
              name="password"
              className="form-control"
              value={password}
              onChange={handleChange("password")}
              type="password"
            />
          </div>

          {loadingMessage()}
          {successMessage()}
          {errorMessage()}
          {performRedirect()}

          <button onClick={onSubmit} className="success-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <Base title="Welcome to sign in page" description="Wise Guy Collections">
      {signInForm()}
    </Base>
  );
};

export default Signin;