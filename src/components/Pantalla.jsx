import React from 'react';
import '../stylesheet/Pantalla.css';

const Pantalla = ({ input, resultado, oldinput }) => (
  <div className='input'>
    <div>{resultado}</div>
    <div>{oldinput}{input}</div>
  </div>
);

export default Pantalla;