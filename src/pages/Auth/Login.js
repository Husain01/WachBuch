import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { useAuth } from "../../context/Auth/AuthContext";
import { useData } from "../../context/Video/VideoContext";
import { loginService } from "../../services/authService";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const location = useLocation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const guestUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };
  const { loader, setLoader } = useData();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const guestUserHandler = (e) => {
    e.preventDefault();
    setUser(guestUser);
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    if (user.email !== "" && user.password !== "") {
      setLoader(() => true);
      try {
        const res = await loginService(user);
        switch (res.status) {
          case 200:
            localStorage.setItem("token", res.data.encodedToken);
            localStorage.setItem("user", JSON.stringify(res.data.foundUser));
            authDispatch({
              type: "LOGIN",
              payload: {
                user: res.data.foundUser,
                token: res.data.encodedToken,
              },
            });
            navigate(location?.state?.from?.pathname || "/");
            break;
          case 404:
            throw new Error("Email not found");
          case 401:
            throw new Error("Wrong Password");
          case 500:
            throw new Error("Server Error");
        }
        setLoader(() => false);
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Both of the fields need to be entered");
    }
  };
  return (
    <main className="auth-container">
      
        {loader ? (
          <Loader />
        ) : (
          <>
          <div className="auth-box normal-shadow">
            <h2 className="auth-title">Login</h2>
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  placeholder="Enter email address here"
                  id="email"
                  name="email"
                  value={user.email}
                  required
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass">Password *</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  id="password"
                  name="password"
                  value={user.password}
                  required
                  onChange={changeHandler}
                />
              </div>
              <div className="below-pass">
                <label for="Remember Me" className="remember-check">
                  <input type="checkbox" name="Remember Me" id="" />
                  <span className="checkbox"></span>
                  Remember Me
                </label>
                <a href="#">Forgot your password &gt;</a>
              </div>
              <button
                className="btn btn-primary button-submit normal-shadow"
                onClick={guestUserHandler}
              >
                Add Guest Credentials
              </button>
              <button
                className="btn btn-primary button-submit normal-shadow"
                onClick={loginHandler}
              >
                Login
              </button>
              <Link to="/signup">Create new account &gt;</Link>
            </div>
            </div>
          </>
        )}
    </main>
  );
};

export default Login;
