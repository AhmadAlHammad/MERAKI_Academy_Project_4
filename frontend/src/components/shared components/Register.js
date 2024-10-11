import React, { useState } from 'react'
import ButtonComponent from '../ButtonComponent';
import axios from "axios";
import './Register.css'
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
        

        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setMobilePhone(response.data.mobilePhone);
        setPassword(response.data.password);
        setCountry(response.data.country);
        setMsg(response.data.msg);
        setSucess(true);
    }).catch((err)=>{
        console.log(err);
        setMsg(err.response.data.message)
        setSucess(false);

        
    })
}


  return (
    <div className='regiterGroub'>
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
setUserInfo({...userInfo , lastName:e.target.value})

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
<ButtonComponent/>



        </div>

  )
}

export default Register