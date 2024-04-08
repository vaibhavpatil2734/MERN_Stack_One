import React from 'react'
import { useState } from 'react'
import '../Components2/Style.css'
import MainCard from './MainCard'
import SubCard from './SubCard'

export default function MainPage(props) {
  const [num, setnum] = useState(1)
  const getsubcardnum = (num)=>{
    setnum(num)
  }
  return (
    <div>
      <React.Fragment>

          <div className='card1'>
            <div className='SubCard'>
              <SubCard getsubcardnum={getsubcardnum} />
            </div>
            <div className='MainCard'>
              <MainCard num={num}/>
            </div>
          </div>
      
      </React.Fragment>
    </div>
  )
}
