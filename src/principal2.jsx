import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/nav'
import Home from './components/home'
import About from './components/yo'
import Work from './components/works'
import BotonContacto from './components/boton'
import {  Routes as Pepe, Route,BrowserRouter } from "react-router-dom";

function Principal() {

  return (
      <>
      <Nav/>
      <Home />
<About/>
<Work/>
  <BotonContacto/> 
      </>

  



 
  )
}

export default Principal
