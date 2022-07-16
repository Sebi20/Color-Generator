import './App.css';
import {useState} from 'react'

function App() {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  function renderColor(){
    setR(Math.floor(Math.random() * 256));
    setG(Math.floor(Math.random() * 256));
    setB(Math.floor(Math.random() * 256));
  }

  

  
  return (
    <>
    <h1 className='header'>Random Color Generator</h1>
   
    <button className='randombtn' onClick={renderColor}>Random color</button>

    <div id='colorboard' style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}></div>
    
    <h3 className='rgbValues'>rgb({r}, {g}, {b})</h3>

    </>
  );

 
}

export default App;
