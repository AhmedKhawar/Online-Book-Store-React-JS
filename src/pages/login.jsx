import { useNavigate } from "react-router-dom";
import "../styles/login.css"
export const Login = () => {
    const Navigate = useNavigate();

  const path = (event) =>{
    event.preventDefault();
    Navigate("/");


  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-8 col-sm-10 mx-auto">
            <div className="login-wrapper">
              <div className="login-box">
                <h2>Welcome Back</h2>
                <p>Sign in to your account</p>

                <form onSubmit={path}> 
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />

                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />

                  <div className="options">
                    <label className="check">
                      <input id="remember" type="checkbox" /> Remember me
                    </label>
                    <a href="#">Forgot password?</a>
                  </div>

                  <input
                    id="submit-btn"
                    type="submit"
                    value="Sign In"
                  />

                  <p className="signup">
                    New to PageTurner? <a href="#">Create account</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
