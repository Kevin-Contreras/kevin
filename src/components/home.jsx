import { useState } from 'react'
import logo from '../assets/icono.png'
import 'bulma/css/bulma.min.css';
import '../App.css'
import compu from '../assets/compu.svg'

function Home() {


  return (
    
    <div>
        <div className='contenedor'>
        <h1 className='titulo'>Full Stack Developement</h1>
        <h2 className='titulo2'>I design and code beautifully simple things, and I love what I do.</h2>
        <div className='avatar'>
            <div className='imagenP' alt="" ></div>
        </div>
        </div>
        <div className='imagen2'>
            <div className='contenedor2'>
                <img className="a"src={compu} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Home
