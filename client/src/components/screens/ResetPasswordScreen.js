import "./ResetPasswordScreen.css";

const ResetPasswordScreen = () => {
  return (
    <div className="resetpassword-screen">
      <form className="resetpassword-screen__form">
        <h3 className="resetpassword-screen__title">Forgot Password</h3>
        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter new password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm New Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm new password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordScreen;
