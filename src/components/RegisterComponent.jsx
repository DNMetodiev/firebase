// import React from "react";
import { useState } from "react";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import { postUserData } from "../api/FireStoreAPI";
import '../Sass/LoginComponent.scss'
import GoogleButton from 'react-google-button'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getUniqueId } from "../helpers/getUniqueId";

export default function RegisterComponent() {

  let navigate = useNavigate()

  const [credentails, setCredentials] = useState({})

  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password)
      toast.success("created")
      postUserData({
        userID: getUniqueId(),
        name: credentails.name,
        email: credentails.email
      })
      navigate('/home')
      localStorage.setItem("userEmail", res.user.email)
    } catch (err) {
      toast.error("try again")
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
        <h1 className="heading">Register</h1>;
        <p className="sub-heading"> Stay up to date </p>
        <div className="auth-inputs">


          <input onChange={(event) =>
            setCredentials({ ...credentails, name: event.target.value })
          }
            type="text"
            className="common-input"
            placeholder="your name"
          />
          <input onChange={(event) =>
            setCredentials({ ...credentails, email: event.target.value })
          }
            type="email"
            className="common-input"
            placeholder="Enter your email"
          />
          <input onChange={(event) =>
            setCredentials({ ...credentails, password: event.target.value })
          }
            type="password"
            className="common-input"
            placeholder="Enter your password"
          />
        </div>


        <button onClick={register} className="login-btn">Register</button>
      </div>
      <hr className="hr-text" data-content="or" />

      <div className="google-btn-container">
        <GoogleButton
          className="google-btn"
          onClick={googleSignIn} />

        <p className="go-to-signup">already account <span className="join-now" onClick={() => navigate('/')}>Sign In</span></p>
      </div>

    </div>
  )
}