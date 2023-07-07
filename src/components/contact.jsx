import { useState } from 'react'
import logo from '../assets/icono.png'
import 'bulma/css/bulma.min.css';
import '../App.css'
import compu from '../assets/compu.svg'
import logi from "../assets/avatar.png"
import { Link,NavLink,Outlet } from "react-router-dom";

function Contact() {


  return (
    
    <div>
        <nav class="navbar is-transparent is-planner animate-fadeDown" style={{display:"flex",alignItems:"center"}}>
      <div class="container">
      <div class="header-logo"  >
              <NavLink to={"/"}><h1 className='logo'>K_DEV </h1></NavLink>
              
          </div>
        <div class="navbar-menu" id="navMenu">
          <div class="navbar-end">
            <div class="navbar-item">
        <p><NavLink class="button is-medium tooltip is-tooltip-bottom" data-tooltip="Close" to={ "/kevin"}><a class="button is-medium tooltip is-tooltip-bottom" data-tooltip="Close" href="/"><span class="icon is-small"><svg class="svg-inline--fa fa-times" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg> <i class="fas fa-times"></i></span></a></NavLink> </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
        <div class="is-form-page" style={{marginTop:"5%"}}>
      <section class="is-white has-text-centered">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-8">
              <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Thanks for taking the time to reach out. How can I help you today?</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="is-white">
        <div class="container">
          <form accept-charset="UTF-8" action="https://usebasin.com/f/cfe585747a2d" method="POST">
            <div class="columns is-centered">
              <div class="column is-half">
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control is-expanded">
                    <input class="input is-large" name="name" type="text" required />
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control is-expanded">
                    <input class="input is-large" name="email" type="email" required />
                  </div>
                </div>
              </div>
            </div>
            <div class="columns is-centered">
              <div class="column">
                <div class="field">
                  <label class="label">Message</label>
                  <div class="control is-expanded">
                    <textarea class="textarea is-large" name="message" rows="5" required ></textarea>
                  </div>
                </div>
                <div class="field is-hidden">
                  <label class="is-hidden"></label>
                  <div class="control is-expanded is-hidden">
                    <input class="is-hidden" name="bot_vortex" type="hidden"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns is-centered">
              <div class="column is-one-third">
                <div class="field">
                  <div class="control">
                    <button class="button is-primary is-outlined is-medium is-fullwidth is-rounded">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
      
    </div>
  )
}

export default Contact
