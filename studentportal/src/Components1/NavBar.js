import React from 'react'
import {NavLink} from 'react-router-dom';

function  NavBar() {
  return (
    <div className='navbar bg-dark px-5' >
    <div className='flex-grow'><img src="./image/cdac.jpg"></img> </div>
   <h1>E-Vidyalaya</h1>
   <NavLink to="/"><h2>Home</h2></NavLink>
   <NavLink to="/about"><h2>About</h2></NavLink>
   <NavLink to="/contact"><h2>Contact</h2></NavLink>
   <NavLink to="/Signin"><h2>Signin</h2></NavLink>

    </div>
  )
}

export default   NavBar ;

