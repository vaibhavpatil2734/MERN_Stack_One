import React from 'react'
import { useState } from 'react';
import Typewriter from "typewriter-effect";
import '../Components2/Style.css'
import Navbar from '../Components/Navbar'
import MainPage from '../Components2/MainPage'

export default function Home(props) {
    const setnum =(num)=>{
        props.gethomenum(num)
    }

  return (
    <div>
        <div>
      <div className='bg-secondary'>
        <div className="video-background2">
      <video autoPlay loop muted>
        <source src=".\Y2meta.app-SPACE GALAXY ~ Live Wallpaper [ 4K HD ]-(1080p).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>  
      
    </div>
    <div className='i-1'>
    <h1>
    <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome To")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("LostGalexyStar o_o")
                        .start();
                }}
            />
    </h1>
    </div>
    <div>
    <button className='btn btn-outline-light btn-lg i-1' style={{top:"50%",left:"44%"}} onClick={()=>{setnum(1)}}>Continue</button>
    <button className='btn btn-outline-light btn-lg i-1' style={{top:"50%",left:"53%"}} onClick={()=>{setnum(2)}}>Login</button>
    </div>

    </div>
    </div>
    </div>
  )
}
