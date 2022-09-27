import { useState, useEffect } from "react";
import "./signup-page.css";
// import { useUser, useToast } from "../../context";
// import { useUser } from "../../context/user-context";
import { Link } from "react-router-dom";

export const SignupPage = () => {
  //   const { showToast } = useToast();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //   const { signupUser } = useUser();
  const showToast = () => {};

  const signupUser = () => {};

  useEffect(() => {
    document.title = "BookStock | Signup";
  }, []);

  const validate = () => {
    if (userData.firstName === "") {
      showToast({
        message: "First Name can't be empty",
        type: "error",
      });
      return false;
    }
    if (userData.lastName === "") {
      showToast({
        message: "Last Name can't be empty",
        type: "error",
      });
      return false;
    }
    if (userData.email === "") {
      showToast({
        message: "Email can't be empty",
        type: "error",
      });
      return false;
    }
    if (userData.password.length < 6) {
      showToast({
        message: "Password length should be greater than 6",
        type: "error",
      });
      return false;
    }
    if (userData.password !== userData.confirmPassword) {
      showToast({
        message: "Passwords do not match",
        type: "error",
      });
      return false;
    }
    return true;
  };

  function signupHandler(event) {
    event.preventDefault();
    if (validate()) {
      signupUser(userData);
    }
  }

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="signin-container">
      <form className="form-wrapper">
        <label className="input-label" htmlFor="firstName">
          First Name{" "}
        </label>
        <input
          className="input"
          type="text"
          name="firstName"
          id="firstName"
          required
          value={userData.firstName}
          onChange={onChange}
        />
        <label className="input-label" htmlFor="lastName">
          Last Name{" "}
        </label>
        <input
          className="input"
          type="text"
          name="lastName"
          id="lastName"
          required
          value={userData.lastName}
          onChange={onChange}
        />
        <label className="input-label" htmlFor="email">
          Email Address{" "}
        </label>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          required
          value={userData.email}
          onChange={onChange}
        />
        <label className="input-label" htmlFor="password">
          Password{" "}
        </label>
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          required
          value={userData.password}
          onChange={onChange}
        />
        <label className="input-label" htmlFor="confirmPassword">
          Confirm Password{" "}
        </label>
        <input
          className="input"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          required
          value={userData.confirmPassword}
          onChange={onChange}
        />
        <input
          className="btn btn-primary-solid btn-login"
          type="submit"
          value="Signup"
          onClick={signupHandler}
        />
        <div className="link-container">
          <Link to={"/profile"}>Already have an account? Login</Link>
        </div>
      </form>
    </div>
  );
};
