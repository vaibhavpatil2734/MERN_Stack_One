import React, { Component } from 'react'
import SearchTool from '../Components/SearchTool'
import '../Components2/Style.css'
import About from '../Components/About'
import Blogs from '../Components/Blogs'
export default function MainCard(props) {
  return (
    <div>
      <div className='bg-secondary'>
        <div className="video-background">
      {props.num === 1 ? <video autoPlay loop muted>
        <source src=".\Y2meta.app-Black Hole Live Wallpaper-(1080p60).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      : <div>
      <div className='accimg bg-mc' ></div>
    </div>}
    </div>
    {props.num === 1 && <div><SearchTool/></div>}
    {props.num === 2 && <div><Blogs/></div>}
    {props.num === 3 && <div><About/></div>}

      </div>
    </div>
  )
}
