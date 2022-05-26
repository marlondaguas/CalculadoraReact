import './App.css';

import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [oldinput, setOldInput] = useState('');
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const agregarInput = val => {
    if (isNaN(val) && (val !== '.') && (val !== '=') && (input === '') && (oldinput === '')) {
      setInput(0);
    }else{
      setInput(input + val);
    }
  };

  const calcularResultado = () => {
    if (resultado) {
      setResultado(evaluate(resultado+input));
      setOldInput(oldinput+input);
      setInput('');
    } else if (input) {
      setResultado(evaluate(oldinput+input));
      setOldInput(oldinput+input);
      setInput('');
    } else {
      alert('Por favor ingrese valores para realizar los calculos')
    }
  };

  const logaritmo = ope => {
    if (ope === "sen") {
      setResultado(Math.sen(resultado));
      setInput('');
      setOldInput('');
    } else if (ope === "cos") {
      setResultado(Math.cos(resultado));
      setInput('');
      setOldInput('');
    } else if (ope === "tan") {
      setResultado(Math.tan(resultado));
      setInput('');
      setOldInput('');
    } else {
      setResultado(Math.sqrt(resultado));
      setInput('');
      setOldInput('');
    }
  }

  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla
          oldinput={oldinput}
          input={input}
          resultado={resultado}
        />
        <div className='fila'>
          <Boton manejarClic={logaritmo}>sen</Boton>
          <Boton manejarClic={logaritmo}>cos</Boton>
          <Boton manejarClic={logaritmo}>tan</Boton>
          <Boton manejarClic={logaritmo}>%</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => { 
              setInput('')
              setResultado('')
              setOldInput('')
            }
          }>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
