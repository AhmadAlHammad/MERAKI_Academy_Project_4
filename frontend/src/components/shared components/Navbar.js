import React from 'react'
import ButtonComponent from '../ButtonComponent';
import './Navbar.css'
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Cart'); 
};
  return (

    <div className='Navbar'>
       
<h5 className='title'>ShopTech</h5>
<input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>   
<Link to = {'/users/Register'} className='HomeRegister'>  register  </Link> 
<Link to="/users/Login" className="HomeLogin">Login</Link>

<ButtonComponent/>

<div className='cartNavbar'>
<svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
                onClick={handleClick}
            >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>

       
</div>

<div className='AddItemgroub'>
<input className="AddItem" type="button" value="Create"  onClick={()=>{
          navigate('/Create'); 
    }}/>
</div>



    </div>
    
  )
}

export default Navbar