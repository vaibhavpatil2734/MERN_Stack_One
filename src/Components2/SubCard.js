import React from 'react'
import { useState } from 'react'
import '../Components2/Style.css'

export default function SubCard(props) {

  const [subcardnum, setsubcardnum] = useState(0)
  
  const setdata =(a)=>{
    setsubcardnum(a)
    props.getsubcardnum(a)
  }
  return (
    <div className='SubCardLayout '>
     
     <div className='sub2 mt-3 ef1' onClick={()=>{setdata(1)}}><h5 className='subcenter'>Smart Search</h5></div>
     <hr class="hr" />
     <div className='sub3 ef1 ' onClick={()=>{setdata(2)}}><h5 className='subcenter'>My Blogs</h5></div>
     <hr class="hr" />
     <div className='sub4 ef1 ' onClick={()=>{setdata(3)}}><h5 className='subcenter'>Task Manager</h5></div>
     <hr class="hr" />
     <div className='sub4 ef1 ' onClick={()=>{setdata(100)}}><h5 className='subcenter'>About Me</h5></div>
     <hr class="hr" />


    </div>
    
  )
}
