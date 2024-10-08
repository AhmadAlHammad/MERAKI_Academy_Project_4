import React from 'react'
import ButtonComponent from '../ButtonComponent';
import Cart from '../Cart';
import Favorite from '../Favorite'
const Navbar = () => {
//  const [nav, setNav] = useState("")
  return (

    <div className='Navbar'>
       
<h5 className='title'>ShopTech</h5>
<input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>   

<ButtonComponent/>
<Cart/>
<Favorite/>
    </div>
    
  )
}

export default Navbar