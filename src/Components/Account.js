import React from 'react'
import { useState } from 'react'


export default function Account(props) {
  const [text, settext] = useState("email@example.com")

  const getemail=(e)=>{
    settext(e.target.value)
  }
  return (
    <div>
        <div>
          <img className='accimg' src='.\door.webp'/>
        </div>
        <div className='acccom'>
          <div class="mb-3 ">
            <label for="staticEmail" class="col-sm-2 col-form-label text-dark">Email:</label>
            <div class="col-sm-10">
              <input type="text" readonly class="form-control border-dark" id="staticEmail" value={text} onChange={getemail}/>
            </div>
          </div>
          <div class="mb-3 ">
            <label for="inputPassword" class="col-sm-2 col-form-label text-dark">Password:</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword"/>
          </div>
          <button className='btn btn-outline-secondary mt-5' onClick={()=>{props.getHomeNum(1)}} >Login</button>
  </div>
        </div>
    </div>
  )
}
