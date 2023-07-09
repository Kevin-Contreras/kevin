import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/nav'
import Home from './components/home'
import About from './components/yo'
import Work from './components/works'
import BotonContacto from './components/boton'
import Principal from  './principal2'
import {  Routes as Pepe, Route,BrowserRouter } from "react-router-dom";
import Contact from './components/contact'

function App() {

  return (
       <Pepe>
  <Route path={"/"} element={<Principal />} />
  <Route path={'/contact'} element={<Contact/>}/>
  <Route path={'*'} element={<Principal/>}/>

  
  </Pepe>


 
  )
}

export default App
