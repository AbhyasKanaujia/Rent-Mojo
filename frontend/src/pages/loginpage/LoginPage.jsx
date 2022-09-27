import { useState } from "react";
import "./login-page.css";
import { Link } from "react-router-dom";

function loginHandler({ event, email, password }) {
  event.preventDefault();
//   loginUser({ email, password });
}

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          onClick={(event) => loginHandler({ event, email, password })}
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
