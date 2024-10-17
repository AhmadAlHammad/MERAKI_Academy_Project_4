import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';

import { userContext } from "../../App";
import "./Login.css";

const Login = () => {
  const { setToken, setUID, setRole } = useContext(userContext);

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [msg, setMsg] = useState("");
  const [sucess, setSuccess] = useState(false);

  const handleLogin = () => {
    console.log(userInfo);
    axios.post("http://localhost:5000/users/login", userInfo)
      .then((response) => {
        console.log(response);
        localStorage.setItem("Token", response.data.token);
        localStorage.setItem("UID", response.data.userId);
        localStorage.setItem("role", response.data.role);
        setRole(response.data.role);
        setToken(response.data.token);
        setMsg(response.data.message);
        navigate(`/Home`);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err)
        setMsg(err.response.data.message);

        setSuccess(false);
      });
  };

  return (
    <div className='regiterGroub'>
        <div >
            
            <p className='title'>Login</p>

        </div>
    

<div>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="userIcon" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>

</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="passwordIcon" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
</svg>
</div>
<div className='inputEmailLogin'>
    
    <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's Email" aria-describedby="basic-addon2" onChange={(e)=>{
setUserInfo({...userInfo , email:e.target.value})

    }}/>  
    </div>
    <div className='inputpasswordLogin'>
            
        <input type="password" class="form-control" placeholder="Password" aria-label="Recipient's password" aria-describedby="basic-addon2" onChange={(e)=>{
setUserInfo({...userInfo , password:e.target.value})

        }}/>  
        </div>

        <div className='buttonLogin'>
<button class="btn btn-primary" type="submit" onClick={handleLogin}>Login</button>

<div className="text">
{msg && <p className={sucess ? "sucess" : "failed"}>{msg}!!</p>}
</div>
</div>
<p className='paraRegister'>Don't have an account? </p> 
<Link to = {'/users/Register'} className='registerLink'>  register  </Link> 
<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="photologin" alt="Sample image"></img><br></br>
</div>
  )
}
export default Login;
