import "./ForgotPasswordScreen.css";

const ForgotPasswordScreen = () => {
  return (
    <div className="forgotpassword-screen">
      <form className="forgotpassword-screen__form">
        <h3 className="forgotpassword-screen__title">Forgot Password</h3>
        <div className="form-group">
          <p className="forgotpassword-screen__subtext">
            Please enter the email address you register your account with. We
            will send you reset password confirmation to this email
          </p>
          <label htmlFor="email">Email:</label>
          <input type="email" required id="email" placeholder="Email address" />
        </div>
        <button type="submit" className="btn btn-primary">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordScreen;
