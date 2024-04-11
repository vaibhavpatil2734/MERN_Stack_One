import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import MainPage from './Components2/MainPage';
import Home from './Components2/Home';
import Account from './Components/Account';

function App() {
  const [num1, setNum1] = useState(0);
  const getHomeNum = (num) => {
   setNum1(num);
  };

  

  return (
    <div className="App">
      {num1===0 && <div><Home gethomenum={getHomeNum} /><Navbar getHomeNum={getHomeNum}/></div>}
      {num1===1 && <div><Navbar getHomeNum={getHomeNum}/><MainPage /></div>}
      {num1===2 && <div><Account getHomeNum={getHomeNum}/></div>}
    </div>
  );
}

export default App;
