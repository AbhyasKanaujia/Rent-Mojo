import { useState } from "react";
import "./login-page.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

async function loginHandler({ event, email, password }) {
  event.preventDefault();
  try {
    console.log("here");
    const res = await axios.post(
      "https://hostel-mate-backend.onrender.com/signin",
      {
        username: email,
        password: password,
      }
    );
    const token = res.data.token;
    localStorage.setItem("token", token);
    console.log(token);
  } catch (error) {
    console.log(error);
  }
}

const LoginPage = ({ loggedIn, setLoggedIn }) => {
  console.log(loggedIn);
  console.log(setLoggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function setGuestCredential(event) {
    event.preventDefault();
    setEmail("testuser@example.com");
    setPassword("strongPass");
  }

  return (
    <div className="signin-container">
      <form className="form-wrapper">
        <label className="input-label" htmlFor="email">
          Email Address{" "}
        </label>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="checkbox-div">
          <input type="checkbox" name="remember" />
          <label htmlFor="remember"> Remember me</label>
        </div>
        <span className="input-label btn-link">
          <a href="#">Forgot your Password?</a>
        </span>
        <input
          className="btn btn-primary-solid btn-login"
          type="submit"
          value="Login"
          onClick={(event) => {
            event.preventDefault();
            // loginHandler({ event, email, password });
            if (email === "testuser@example.com" && password === "strongPass") {              
              navigate("/");
              // toast.success("Login Successfull");
              setLoggedIn((prev) => !prev);
            } else {
              toast.error("Wrong credentials");
            }
          }}
        />
        <button
          className="btn btn-secondary-solid btn-login"
          onClick={(e) => setGuestCredential(e)}
        >
          Use guest credentials
        </button>
        <div className="link-container">
          <Link to={"/signup"}>Create New Account</Link>
        </div>
      </form>
    </div>
  );
};

export { LoginPage };
