import React, { useState,createContext } from 'react'
import "./App.css";
import Navbar from './components/shared components/Navbar';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Register from './components/shared components/Register';
import Login from './components/shared components/Login';
import Home from './Home';
import Cart from './components/Cart'
export const userContext = createContext();
const App = () => {
  const [Token,setToken]=useState(localStorage.getItem('Token'))
const [UID,setUId] = useState(localStorage.getItem('UID'))
const [Role , setRole] = useState(localStorage.getItem("Role"))

return(

   <div className="App">


  <BrowserRouter>
<userContext.Provider value={{Token,setToken,UID,setUId,Role,setRole}}>

<Routes>
  <Route path='/Home' element = {<Home/>}></Route>
  <Route path='/CArrt' element = {<Cart/>}></Route>

<Route path='/users/register' element={<Register/> }></Route>
<Route path ='/users/Login' element = {<Login/>}></Route>
</Routes>

</userContext.Provider>
</BrowserRouter>
   </div>
  )
}

export default App
