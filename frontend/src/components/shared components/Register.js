import React, { useState } from 'react'
import axios from "axios";
import './Register.css'
import { Link } from 'react-router-dom';
import Image from '../Image'
function Register() {
    
    const [firstName,setFirstName] = useState("");
const [lastName,setLastName]=useState("");
const [email , setEmail] = useState("");
const [mobilePhone,setMobilePhone] = useState("");
const [password,setPassword] = useState("");
const [country,setCountry] = useState("");
const [sucess,setSucess] =useState(false);

const [msg , setMsg] = useState("");
const [userInfo , setUserInfo]=useState({});
const handelRegister = () =>{
    axios.post("http://localhost:5000/users/register",userInfo).then((response)=>{
        console.log(userInfo);


        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setMobilePhone(response.data.mobilePhone);
        setPassword(response.data.password);
        setCountry(response.data.country);
        setMsg(response.data.message);
        
        setSucess(true);
    }).catch((err)=>{
        console.log(err);
        setMsg(err.response.data.message)
        setSucess(false);

        
    })

}


  return (
    <div className='regiterGroub'>
        <div >
            
            <p className='title'>SignUp</p>

        </div>
       

<div>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="user" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="userIcon2" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="emeilIcon" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
</svg>
</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="mobileIcon" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="passicon" viewBox="0 0 16 16">
  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="countryIcon" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>

</div>
        <div className='inputfirstName'>
    
        <input type="text" class="form-control" placeholder="FirstName" aria-label="Recipient's FisrtName" aria-describedby="basic-addon2" onChange={(e)=>{
setUserInfo({...userInfo , firstName:e.target.value})

        }}/>  
        </div>
 

        <div className='inputLastName'>
        <input type="text" class="form-control" placeholder="LastName" aria-label="Recipient's LastName" aria-describedby="basic-addon2" onChange={(e)=>{
setUserInfo({...userInfo , lastName:e.target.value})

        }}/>  
        </div>
        <div className='inputEmail'>
        <input type="email" class="form-control" placeholder="Email" aria-label="Recipient's Email" aria-describedby="basic-addon2" onChange={(e)=>{
setUserInfo({...userInfo , email:e.target.value})

        }}/>  
        </div>
        <div className='inputMobilephone'>
        <input type="text" class="form-control" placeholder="mobilephone" aria-label="Recipient's mobilephone" aria-describedby="basic-addon2" onChange={(e)=>{
setUserInfo({...userInfo , mobilePhone:e.target.value})

        }}/>  
        </div>
        <div className='inputpassword'>
            
        <input type="password" class="form-control" placeholder="Password" aria-label="Recipient's password" aria-describedby="basic-addon2" onChange={(e)=>{
setUserInfo({...userInfo , password:e.target.value})

        }}/>  
        </div>
        <div className='inputCounry'>
        <input type="text" class="form-control" placeholder="Country" aria-label="Recipient's Country" aria-describedby="basic-addon2" onChange={(e)=>{
setUserInfo({...userInfo , country:e.target.value})

        }}/>  
        </div>
<div className='buttonRegister'>
<button class="btn btn-primary" type="submit" onClick={handelRegister}>Submit</button>

{msg && <p className={sucess ? "sucess" : "failed"}>{msg}!!</p>}
</div>
<div className='login'>
<p className='paraLogin'>you have already account ?</p> 
<Link to="/users/Login" className="LoginLink">Login</Link>
<Image/>
</div>
</div>

  )
}

export default Register