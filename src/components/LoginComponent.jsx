// import React from "react";
import { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import '../Sass/LoginComponent.scss'
import GoogleButton from 'react-google-button'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {

  let navigate = useNavigate()

  const [credentials, setCredentials] = useState({})
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password)
      toast.success("Login Successful")
      localStorage.setItem("userEmail", res.user.email)
      navigate('/home')
      console.log(res)
    } catch (err) {
      toast.error("Wrong Credentials")
    }
  };

  const googleSignIn = () => {
    let response = GoogleSignInAPI()
    navigate('/home')
    console.log(response)
  }
  return (
    <div className="login-wrapper">

      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>;
        <p className="sub-heading"> Stay up to date </p>
        <div className="auth-inputs">

          <input onChange={(event) =>
            setCredentials({ ...credentials, email: event.target.value })
          }
            type="email"
            className="common-input"
            placeholder="Enter your email"
          />
          <input onChange={(event) =>
            setCredentials({ ...credentials, password: event.target.value })
          }
            type="password"
            className="common-input"
            placeholder="Enter your password"
          />
        </div>
        <button onClick={login} className="login-btn">Sign In</button>
      </div>
      <hr className="hr-text" data-content="or" />

      <div className="google-btn-container">
        <GoogleButton
          className="google-btn"
          onClick={googleSignIn} />

        <p className="go-to-signup">No account <span className="join-now" onClick={() => navigate('/register')}>Join now</span></p>
      </div>

    </div>
  )
}

