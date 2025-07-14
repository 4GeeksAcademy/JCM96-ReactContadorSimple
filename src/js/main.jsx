import React from 'react';
import ReactDOM from 'react-dom/client';
import SecondsCounter from './SecondsCounter.jsx';

let seconds = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  const six = Math.floor(seconds / 100000) % 10;
  const five = Math.floor(seconds / 10000) % 10;
  const four = Math.floor(seconds / 1000) % 10;
  const three = Math.floor(seconds / 100) % 10;
  const two = Math.floor(seconds / 10) % 10;
  const one = Math.floor(seconds / 1) % 10;

  root.render(
    <SecondsCounter
      digitOne={one}
      digitTwo={two}
      digitThree={three}
      digitFour={four}
      digitFive={five}
      digitSix={six}
    />
  );
  seconds++;
}, 1000);