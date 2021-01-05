import { Link } from "react-router-dom";
import "./LoginScreen.css";

const LoginScreen = () => {
  return (
    <div className="login-screen">
      <form className="login-screen__form">
        <h3 className="login-screen__title">Login</h3>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" required id="email" placeholder="Email address" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>

        <span className="login-screen__subtext">
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginScreen;
