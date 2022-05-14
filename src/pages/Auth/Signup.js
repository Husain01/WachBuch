import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth/AuthContext";
import { signUpService } from "../../services/authService";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authDispatch } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const checkPasswordHandler = (e) => {
    if (user.password !== user.confirmPassword) {
      alert("Your passwords do not match");
    } else {
      return true;
    }
  };

  const checkInputFields = () => {
    return (
      user.email !== "" &&
      user.password !== "" &&
      user.firstName !== "" &&
      user.lastName !== "" &&
      user.confirmPassword !== ""
    );
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    if (checkInputFields()) {
      if (checkPasswordHandler()) {
        try {
          const res = await signUpService(user);
          switch (res.status) {
            case 201:
              const token = localStorage.setItem(
                "token",
                res.data.encodedToken
              );
              const user = localStorage.setItem(
                "user",
                JSON.stringify(res.data.createdUser)
              );
              authDispatch({ type: "SIGNUP", payload: { user, token } });
              navigate(location?.state?.from?.pathname || "/");
              break;
              case 422:
                throw new Error("Email already exists!");
              case 500:
                throw new Error("Server Error");
          }
        } catch (error) {
          alert(error);
        }
      }
    } else {
      alert("All the fields need to be entered!");
    }
  };
  return (
    <main className="auth-container">
      <div className="auth-box normal-shadow">
        <h2 className="auth-title">Sign Up</h2>
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              placeholder="Enter email address here"
              id="email"
              name="email"
              value={user.email}
              onChange={changeHandler}
              required
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
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pass">Confirm Password *</label>
            <input
              type="password"
              placeholder="Re-enter Password"
              id="confirm-password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="below-pass">
            <label for="Remember Me" className="remember-check">
              <input type="checkbox" name="Remember Me" id="" />
              <span className="checkbox"></span>I accept all Terms & Conditions
            </label>
          </div>
          <button
            className="btn btn-primary button-submit normal-shadow"
            onClick={signUpHandler}
          >
            Sign Up
          </button>
          <Link to="/login">Already have an account &gt;</Link>
        </div>
      </div>
    </main>
  );
};

export default Signup;
