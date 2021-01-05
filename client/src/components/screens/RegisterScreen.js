import { Link } from "react-router-dom";
import "./RegisterScreen.css";

const RegisterScreen = () => {
  return (
    <div className="register-screen">
      <form className="register-screen__form">
        <h3 className="register-screen__title">Register</h3>
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input type="text" required id="name" placeholder="Enter username" />
        </div>
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
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>

        <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterScreen;
