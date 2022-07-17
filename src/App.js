import './App.css';
import {useState} from 'react'

function App() {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  function renderRandomColor(){
    setR(Math.floor(Math.random() * 256));
    setG(Math.floor(Math.random() * 256));
    setB(Math.floor(Math.random() * 256));
  }

  function renderColor(){
    setR(document.querySelectorAll("input")[0].value);
    setG(document.querySelectorAll("input")[1].value);
    setB(document.querySelectorAll("input")[2].value);
  }


  
  return (
    <>
    <h1 className='header'>Random Color Generator</h1>
   
    <button className='randombtn' onClick={renderRandomColor}>Random color</button>

    <form onSubmit={renderColor}>
      <label>R:</label>
      <input name='r' type='text'/>
      <label>G:</label>
      <input name='g' type='text'/>
      <label>B:</label>
      <input name='b' type='text'/>
      <input onClick={renderColor} type='button' value='Get Color'/>
    </form>

    <div id='colorboard' style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}></div>
    
    <h3 className='rgbValues'>rgb({r}, {g}, {b})</h3>
    
    </>
  );

}

export default App;
