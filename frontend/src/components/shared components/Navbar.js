import React from 'react'
import ButtonComponent from '../ButtonComponent';
import Cart from '../Cart';
import Favorite from '../Favorite'
import Login from './Login';
import Register from './Register';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (

    <div className='Navbar'>
       
<h5 className='title'>ShopTech</h5>
<input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>   
<Link to = {'/users/Register'} className='HomeRegister'>  register  </Link> 
<Link to="/users/Login" className="HomeLogin">Login</Link>


<ButtonComponent/>
<Cart/>
<Favorite/>


    </div>
    
  )
}

export default Navbar