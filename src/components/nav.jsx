import { useState } from 'react'
import logo from '../assets/icono.png'
import 'bulma/css/bulma.min.css';
import '../App.css'
import { Link,NavLink,Outlet } from "react-router-dom";

function Nav() {
    function nav() {
        const navToggler = document.querySelector(".js-nav__toggler")
        const nav = document.querySelector(".js__nav")

        navToggler.classList.toggle("active")
        nav.classList.toggle("open")
       
    }
    function para(){
        const div = document.querySelector('.contenedorAbout');
        console.log(div)
        div.scrollIntoView({ behavior: 'smooth' });
        nav()
    }
    function para2(){
        const div = document.querySelector('.ps');
        console.log(div)
        div.scrollIntoView({ behavior: 'smooth' });
        nav()
    }
  return (
    <div>
    <header style={{boxShadow:" 0 1px 1px #E6ECF8",height:"120.5px",display:'flex',alignItems:"center",padding: "1.2rem 0"}}>
        <div class='container header__container'>
            <div class="header-logo"  >
              <NavLink to={"/"}>    <h1 className='logo'>K_DEV </h1></NavLink>
             
            </div>
            <button type='button' onClick={nav} class='nav__toggler js-nav__toggler'>
                <span data-text="close" >Menu</span>
            </button>
            <nav class='nav js__nav'>
                <ul>
                <li><NavLink onClick={nav} to={"/"}  style={{ '--i': 0}} >Home</NavLink> </li>
               <li><NavLink  onClick={para} to={"/"} style={{ '--i': 1 }} > About</NavLink> </li> 
             <li> <NavLink onClick={para2} to={"/"} style={{ '--i':2 }} > Proyects</NavLink> </li>  
             <li><NavLink onClick={nav} to={"/contact"} style={{ '--i': 3 }} > Contact</NavLink> </li>
    
                </ul>
            </nav>
        </div>
       
    </header>
    </div>

  )
}

export default Nav
