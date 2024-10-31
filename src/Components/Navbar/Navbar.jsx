import React, {useState, useRef } from 'react'
import logo from '../Assets/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {

    const[menu,setMenu]=useState("home");
    const menuRef=useRef();

    const dropdown_toggle=(e)=>{
      menuRef.current.classList.toggle('nav-menu-visible')
      e.target.classList.toggle('open');
    }


  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
       
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef}className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("ipc-to-bns-convertor")}}><Link style={{textDecoration:'none'}} to='/ipc-to-bns-convertor'>IPC to BNS Convertor</Link>{menu==="ipc-to-bns-convertor"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("legalsearch")}}><Link style={{textDecoration:'none'}} to='/legal-search'>Legal Search Engine</Link>{menu==="legalsearch"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("interestingcases")}}><Link style={{textDecoration:'none'}} to='/interesting-cases'>Interesting Cases</Link>{menu==="interestingcases"?<hr/>:<></>}</li>
      </ul>
      
    </div>
  )
}

export default Navbar
