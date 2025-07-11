import React from 'react';
import ReactDOM from 'react-dom/client';
import SecondsCounter from './SecondsCounter.jsx'; // Asegúrate de que la ruta sea correcta

let seconds = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(<SecondsCounter seconds={seconds} />);
  seconds++;
}, 1000); // 1000 milisegundos = 1 segundo