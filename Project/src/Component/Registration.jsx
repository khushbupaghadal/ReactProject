import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./CSS/LoginCss.css"
import axios from 'axios'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";

const Registration = () => {
  const navigate = useNavigate()
  let [obj, setobj] = useState({"roleId" : 2,
  "profileImageBase64": "string",
  "userRole": [
      {
        "userRoleId": 0,
        "userId": 0,
        "roleType": 1
      }
    ]})
  const [blankobj, setblankobj] = useState({})
  
  let getdata = (e) =>{
    if(e.target.type == "file"){
      obj[e.target.name] = e.target.files[0];
      console.log(e.target.files[0]);
    }
    else{
      obj[e.target.name] = e.target.value;
      blankobj[e.target.name] = "";
    }
    setobj({...obj});
    setblankobj({...blankobj});
  }
  
  let login = () => {
    axios.post("https://iris-api.mycodelibraries.com/api/User/CreateUser" , obj).then((res) => {
        res.data.responseData ? navigate("/login") : alert("please enter unique email");
    }).catch((err) => {
        console.log(err);
    })

    obj = blankobj;
    setobj({...obj});
  }

  return (
    <>


<div className="login-18">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="form-section">
                    {/* <div className="logo-2">
                        <a href="login-18.html">
                            <img src="assets/img/logos/logo.png" alt="logo">
                        </a>
                    </div> */}
                    <div className="typing">
                        <h3>Create An Cccount</h3>
                    </div>
                    <form action="#" method="GET">
                        <div className="form-group">
                            <label for="first_field" className="form-label float-start">Full Name</label>
                            <input name="fullName" type="text" className="form-control" id="first_field" placeholder="Full Name" aria-label="Full Name" onChange={getdata} />
                        </div>
                        <div className="form-group">
                            <label for="second_field" className="form-label float-start">Email address</label>
                            <input name="email" type="email" className="form-control" id="second_field" placeholder="Email Address" aria-label="Email Address" onChange={getdata} />
                        </div>
                        <div className="form-group clearfix">
                            <label for="third_field" className="form-label float-start">Password</label>
                            <input name="password" type="password" className="form-control" autocomplete="off" id="third_field" placeholder="Password" aria-label="Password"  onChange={getdata} />
                        </div>
                        <div className="form-group checkbox clearfix">
                            <div className="clearfix float-start">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="rememberme" />
                                    <label className="form-check-label" for="rememberme">
                                        I agree to the terms of service
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group clearfix">
                            <button type="button" className="btn btn-primary btn-lg btn-theme" onClick={login}>Register</button>
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
                    <p>Already a member?<a href="/login"> Login here</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Registration
