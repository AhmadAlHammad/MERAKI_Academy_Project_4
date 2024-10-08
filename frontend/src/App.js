import React, { useState,createContext } from 'react'
import "./App.css";
import Navbar from './components/shared components/Navbar';


export const userContext = createContext();
const App = () => {
//   const [Token,setToken]=useState(localStorage.getItem('Token'))
// const [UID,setUId] = useState(localStorage.getItem('UID'))
// const [Role , setRole] = useState(localStorage.getItem("Role"))



  return (
   <div className="App">
<Navbar/>
  
   </div>
  )
}

export default App
