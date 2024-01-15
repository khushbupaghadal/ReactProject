import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./CSS/LoginCss.css"
import axios from 'axios'
import logo from './images/zepto-logo.png'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";

const Login = (props) => {
  // console.log(props)
    const Navigate = useNavigate()
    const [obj, setobj] = useState({})
    
    let getData = (e) =>{
      obj[e.target.name] = e.target.value
      setobj({...obj})
    }
    let login = () =>{
      axios.post("https://iris-api.mycodelibraries.com/api/User/LoginAuthenticate",obj).then((res) => {
        if(res.data.isSuccess){
          localStorage.setItem("IsLogin",true)
          localStorage.setItem("token", res.data.responseData.token)
          localStorage.setItem('userName', res.data.responseData.fullName)
          localStorage.setItem('id', res.data.responseData.id)
          props.setIslogin(true);
          Navigate("/");
        }
        else{
          alert(res.data.errorMessage)
        }
    })
    }
    let Registration = () =>{
      Navigate("/registration")
    }
  return (
    <> 


        <div className="login-18">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                  <div className="form-section">
                    <div className="">
                        <a href="login-18.html">
                          <img src={logo} alt=""  width="150px" height='auto' className=" text-center ps-5"/>
                        </a>
                    </div>
                    <div className="typing">
                        <h3>Sign Into Your Account</h3>
                    </div>
                    <form action="#" method="GET">
                        <div className="form-group">
                            <label for="second_field" className="form-label float-start">Email address</label>
                            <input name="email" type="email" className="form-control" id="second_field" placeholder="Email Address" aria-label="Email Address" onChange={getData}/>
                        </div>
                        <div className="form-group clearfix">
                            <label for="third_field" className="form-label float-start">Password</label>
                            <input name="password" type="password" className="form-control" autocomplete="off" id="third_field" placeholder="Password" aria-label="Password" onChange={getData}/>
                        </div>
                        <div className="checkbox form-group clearfix">
                            <div className="form-check checkbox-theme">
                                <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                                <label className="form-check-label" for="rememberMe">Remember me</label>
                            </div>
                            <a href="" className="float-end">Forgot Password</a>
                        </div>

                        <div className="form-group clearfix">
                            <button type="button" className="btn btn-primary btn-lg btn-theme" onClick={login}>Login</button>
                        </div>
                    </form>
                    <div className="social-list">
                        <span>Or Login With</span>
                        <a href="#" className="facebook-bg">
                          <FaFacebookF /> 
                        </a>
                        <a href="#" className="twitter-bg">
                          <FaTwitter />
                        </a>
                        <a href="#" className="google-bg">
                          <IoLogoGoogle />
                        </a>
                        <a href="#" className="linkedin-bg">
                          <FaLinkedinIn />
                        </a>
                    </div>
                    <div className="clearfix"></div>
                    <p>Don't have an account?<a href="" onClick={Registration}> Register here</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Login
