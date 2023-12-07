import { useState } from 'react'
import logo from '../assets/icono.png'
import 'bulma/css/bulma.min.css';
import plump from "../assets/plump.jpeg"
import task from "../assets/task.jpeg"
import movie from "../assets/movie.jpeg"
import manga from "../assets/manga.jpeg"
import drawing from "../assets/drawing.png"
import triangulo from "../assets/triangulo.png"

import '../App.css'
import compu from '../assets/compu.svg'

function Work() {


  return (
    
    <section class="section projects is-medium is-white has-text-centered ps">
      <div class="container is-narrow">
        <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">My Recent Work</h1>
        <h2 class="subtitle is-size-5-desktop">Here are a few past design projects I've worked on. Want to see more? <a class="has-text-weight-normal" href="kevinacontrerasl62@gmail.com">Email me</a>.</h2>
        <div class="project-grid">  
          <div class="columns is-multiline is-mobile">

            <div  class="animation column is-12-mobile is-half-tablet is-one-third-desktop">
              <figure class="image is-3by2"><img class="project-thumb" src={plump}/>
                <figcaption>
                  <h1 class="title is-size-5 is-size-4-widescreen">The music scrolling application is a platform that allows users to discover, explore, and enjoy a wide variety of songs and artists.</h1><a class="button is-primary is-outlined is-rounded" href="https://app-spotify-three.vercel.app/" target="_blank"><span>Visit Website</span><span class="icon"><svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg> <i class="fas fa-angle-right"></i> </span></a>
                </figcaption>
                <div class="overlay"></div>
              </figure>
            </div>

            <div class="animation column is-12-mobile is-half-tablet is-one-third-desktop"> 
              <figure class="image is-3by2"><img class="project-thumb" src={triangulo}/>
                <figcaption>
                  <h1 class="title is-size-5 is-size-4-widescreen">The application allows users to create a user account and manage their own tasks.</h1><a class="button is-primary is-outlined is-rounded" href="https://foro-ssvp.onrender.com" target="_blank"><span>Visit Website</span><span class="icon"><svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg> <i class="fas fa-angle-right"></i> </span></a>
                </figcaption>
                <div class="overlay"></div>
              </figure>
            </div>
            <div class=" animation column is-12-mobile is-half-tablet is-one-third-desktop">
              <figure class="image is-3by2"><img class="project-thumb" src={movie}/>
                <figcaption>
                  <h1 class="title is-size-5 is-size-4-widescreen">The application allows you to search for your favorite movie and find the actors in the most relevant films.</h1><a class="button is-primary is-outlined is-rounded" href="https://peliskev.vercel.app/" target="_blank"><span>Visit Website</span><span class="icon"><svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg> <i class="fas fa-angle-right"></i> </span></a>
                </figcaption>
                <div class="overlay"></div>
              </figure>
            </div>
            <div class="animation column is-12-mobile is-half-tablet is-one-third-desktop">
              <figure class="image is-3by2"><img class="project-thumb" src={manga}/>
                <figcaption>
                  <h1 class="title is-size-5 is-size-4-widescreen">The application allows you to find information about any anime.</h1><a class="button is-primary is-outlined is-rounded" href="https://kevin-contreras.github.io/proyectAnime/" target="_blank"><span>Visit Website</span><span class="icon"><svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg><i class="fas fa-angle-right"></i> </span></a>
                </figcaption>
                <div class="overlay"></div>
              </figure>
            </div>
         
            <div class="animation column is-12-mobile is-half-tablet is-one-third-desktop">
              <figure class="image is-3by2"><img class="project-thumb" src={drawing}/>
                <figcaption>
                  <h1 class="title is-size-5 is-size-4-widescreen">DRAWING.io is an application where you can create your own drawings, add friends.</h1><a class="button is-primary is-outlined is-rounded" href="https://drawing2.vercel.app/" target="_blank"><span>Visit Website</span><span class="icon"><svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg><i class="fas fa-angle-right"></i> </span></a>
                </figcaption>
                <div class="overlay"></div>
              </figure>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default Work
