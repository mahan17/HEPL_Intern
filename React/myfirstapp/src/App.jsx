import { useState } from 'react'
import './App.css'
import Arrays from './Components/Arrays';

function App() {
  const currDate = new Date();
  // console.log(currDate);

  return (
    <div>
        <h1>Hi Mahan</h1>
        <h3>Time is <span id='time'>{currDate.toLocaleTimeString()}</span>.</h3>
        <h3>And the Date is <span id='date'>{currDate.toDateString()}</span></h3>
        {/* <Arrays /> */}
    </div>
  );
}

export default App;