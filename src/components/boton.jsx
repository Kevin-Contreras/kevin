import { useState } from 'react'
import logo from '../assets/icono.png'
import 'bulma/css/bulma.min.css';
import '../App.css'
import compu from '../assets/compu.svg'
import { Link,Outlet } from "react-router-dom";

function BotonContacto() {


  return (
    <>
    <section class="section call-to-action is-primary has-text-centered">
      <div class="container is-narrow">
        <div class="box">
          <div class="columns level">
            <div class="column level-item">
              <h1 class="title">Start a project</h1>
            </div>
            <div class="column level-item">
              <p>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</p>
            </div>
            <div class="column level-item"> <Link to={"/kevin/contact"}><a class="button is-success is-outlined is-rounded is-medium has-text-weight-normal" href="/contact"><span class="icon"><svg style={{width:"17px"}} class="svg-inline--fa fa-hand-horns" aria-hidden="true" focusable="false" data-prefix="far" data-icon="hand-horns" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M80 48c8.8 0 16 7.2 16 16V208v32H80c-5.5 0-10.8 .6-16 1.6V64c0-8.8 7.2-16 16-16zM16 64V272C6 285.4 0 302 0 320c0 0 0 0 0 0v24c0 92.8 75.2 168 168 168h48c92.8 0 168-75.2 168-168V288 256 128c0-35.3-28.7-64-64-64s-64 28.7-64 64v50c-5.1-1.3-10.5-2-16-2c-7.9 0-15.4 1.4-22.4 4c-10.4-21.3-32.3-36-57.6-36c-5.5 0-10.9 .7-16 2V64c0-35.3-28.7-64-64-64S16 28.7 16 64zM336 256v32 56c0 66.3-53.7 120-120 120H168c-66.3 0-120-53.7-120-120V320s0 0 0 0c0-17.7 14.3-32 32-32h40 40c8.8 0 16 7.2 16 16s-7.2 16-16 16H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h40c15.1 0 29-5.3 40-14c11 8.8 24.9 14 40 14c35.3 0 64-28.7 64-64V256 240 128c0-8.8 7.2-16 16-16s16 7.2 16 16V256zM160 240H144V208c0-8.8 7.2-16 16-16s16 7.2 16 16v32 2c-5.1-1.3-10.5-2-16-2zm96 16v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V264 240c0-8.8 7.2-16 16-16s16 7.2 16 16v16z"></path></svg><i class="fa-regular fa-hand-horns"></i> </span><span>Let's do this</span></a></Link></div>
          </div>
        </div>
      </div>
    </section>

  
    <footer class="section is-primary is-small has-text-centered">
      <div class="container is-narrow">
       
        <div class="columns is-centered"> 
          <div class="column is-one-third">
            <h1 class="title is-size-4-touch has-text-weight-normal">Living, learning, &amp; leveling up one day at a time.</h1>
          </div>
        </div>
        <div class="social-icons">
          <p class="field"><a class="button is-medium" href="mailto:kevinacontrerasl62@gmail.com"><span class="icon is-small"><svg class="svg-inline--fa fa-envelope fa-fw" aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path></svg>  </span></a></p>
        </div>
        <div class="copyright">Handcrafted by me<span class="icon has-white-text" style={{verticalAlign:"middle"}}><svg class="svg-inline--fa fa-copyright" aria-hidden="true" focusable="false" data-prefix="far" data-icon="copyright" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"></path></svg> </span>Kevin__contreras</div>
      </div>
    </footer>
    </>

  )
}

export default BotonContacto
