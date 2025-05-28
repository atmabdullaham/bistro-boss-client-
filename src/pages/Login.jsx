import "../css/Login.css";
import loginImg from "../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../providers/AuthProver";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import googleLogo from "../assets/google.svg";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("logged in");
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="hero min-h-[500px] login">
      <div className="hero-content md:w-8/12 flex-col md:flex-row">
        <div className="w-full md:w-1/2 lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100 w-full md:w-1/2 shrink-0 shadow-2xl">
          <div className="card-body">
            <div className=" ">
              <button
                onClick={handleGoogleSignIn}
                className="btn hover:bg-base-200 hober:border-1 hover:border-black w-full"
              >
                <img className="w-8" src={googleLogo} alt="" /> Continue with
                Google
              </button>
            </div>
            <form onSubmit={handleLogin} action="">
              <fieldset className="fieldset">
                <legend className="text-3xl">Welcome back!</legend>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  name="email"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input  w-full"
                  name="password"
                  placeholder="Password"
                />
              </fieldset>
              <fieldset className="fieldset">
                <LoadCanvasTemplate />
                <label className="label">Captcha</label>
                <input
                  type="text"
                  ref={captchaRef}
                  className="input  w-full"
                  name="captcha"
                  placeholder="Type the text above"
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-2"
                >
                  Validate
                </button>
              </fieldset>
              <input
                disabled={disabled}
                className="btn btn-block"
                type="submit"
                value="Login"
              />
            </form>
            <div>
              <h2>
                New user? <Link to="/signup">Signup</Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
