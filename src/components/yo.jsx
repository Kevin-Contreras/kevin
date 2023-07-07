import { useState } from 'react'
import logo from '../assets/icono.png'
import 'bulma/css/bulma.min.css';
import '../App.css'
import compu from '../assets/compu.svg'

function About() {


  return (
    
    <div>
        <div className='contenedorAbout'>
            <div className='textoContenedor'>
            <h1 className='texto'>Hi, I´m Kevin. Nice to meet you.</h1>
            <h2 className='subtitulo'>Since beginning my journey as a freelance designer over 3 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</h2>
            </div>
  

        </div>
        <section class="section skills has-text-centered">
      <div class="container is-narrow">
        <div class="box">
          <div class="content">
            <div class="columns is-centered">
              <div class="column">
                <span class="fa-stack fa-2x">
                    <svg class="svg-inline--fa fa-circle fa-stack-2x has-text-success" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path></svg> <i class="fa-solid fa-circle fa-stack-2x has-text-success"></i><svg class="svg-inline--fa fa-layer-plus fa-stack-1x has-text-dark" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="layer-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M480 24c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H408c-8.8 0-16 7.2-16 16s7.2 16 16 16h40v40c0 8.8 7.2 16 16 16s16-7.2 16-16V96h40c8.8 0 16-7.2 16-16s-7.2-16-16-16H480V24zM288 128c-7.5 0-15 1.6-21.8 4.7L48.8 230.1C38.6 234.7 32 244.8 32 256s6.6 21.3 16.8 25.9l217.4 97.5c6.9 3.1 14.3 4.7 21.8 4.7s15-1.6 21.8-4.7l217.4-97.5c10.2-4.6 16.8-14.7 16.8-25.9s-6.6-21.3-16.8-25.9L309.8 132.7c-6.9-3.1-14.3-4.7-21.8-4.7zm-8.8 33.9c2.8-1.2 5.7-1.9 8.8-1.9s6 .6 8.8 1.9l210 94.1-210 94.1c-2.8 1.2-5.7 1.9-8.8 1.9s-6-.6-8.8-1.9L69.3 256l210-94.1zM94.7 337.5L48.8 358.1C38.6 362.7 32 372.8 32 384s6.6 21.3 16.8 25.9l217.4 97.5c6.9 3.1 14.3 4.7 21.8 4.7s15-1.6 21.8-4.7l217.4-97.5c10.2-4.6 16.8-14.7 16.8-25.9s-6.6-21.3-16.8-25.9l-45.9-20.6-39.1 17.5L506.7 384l-210 94.1c-2.8 1.2-5.7 1.9-8.8 1.9s-6-.6-8.8-1.9L69.3 384l64.5-28.9L94.7 337.5z"></path></svg> <i class="fa-light fa-layer-plus fa-stack-1x has-text-dark"></i> </span>
                <h1 class="title is-size-4 is-spaced">Backend development</h1>
                <p>As a backend developer, I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                <p class="list-title has-text-primary has-text-weight-normal">Languages I speak:</p>
                <p>Nodejs Python Java C++ SQL  </p>
                <p class="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
                <ul>
                  <li>Mongodb</li>
                  <li>SqlServer</li>
                  <li>Mysql</li>
                  <li>Expressjs</li>
                  <li>flask</li>
                  <li>Django</li>
                </ul>
              </div>
              <div class="column" style={{border:"none"}}><span class="fa-stack fa-2x"><svg class="svg-inline--fa fa-circle fa-stack-2x has-text-success" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path></svg> <i class="fa-solid fa-circle fa-stack-2x has-text-success"></i> <svg class="svg-inline--fa fa-square-terminal fa-stack-1x has-text-dark" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="square-terminal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M384 64c17.7 0 32 14.3 32 32V416c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM83.9 149.6c-5.8 6.7-5 16.8 1.7 22.6L183.4 256 85.6 339.9c-6.7 5.8-7.5 15.8-1.7 22.6s15.9 7.5 22.6 1.7l112-96c3.5-3 5.6-7.5 5.6-12.1s-2-9.1-5.6-12.1l-112-96c-6.7-5.8-16.8-5-22.6 1.7zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16s-7.2-16-16-16H208z"></path></svg><i class="fa-light fa-square-terminal fa-stack-1x has-text-dark"></i> </span>
                <h1 class="title is-size-4 is-spaced">Frontend Developer</h1>
                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <p class="list-title has-text-primary has-text-weight-normal">Languages I speak:</p>
                <p>HTML, CSS, Javascript, Reactjs ,Git</p>
                <p class="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
                <ul>
                  <li>Atom</li>
                  <li>Bitbucket</li>
                  <li>Bootstrap</li>
                  <li>Bulma</li>
                  <li>Github</li>
                  <li>Terminal</li>
                  <li> connection with API'S</li>
                  <li>Vercel</li>
                </ul>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About
