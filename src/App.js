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

  function renderColor(e){
    e.preventDefault();
    setR(document.querySelectorAll("input")[0].value);
    setG(document.querySelectorAll("input")[1].value);
    setB(document.querySelectorAll("input")[2].value);
  }


  
  return (
    <>
    <h1 className='header'>Color Generator</h1>
    <div className='inputfld'>
      
      <form>
        <label>R:</label>
        <input name='r' type='text'/>
        <label>G:</label>
        <input name='g' type='text'/>
        <label>B:</label>
        <input name='b' type='text'/>
        <button className='getColor' onClick={renderColor}>Get Color</button>
      </form>

      <h3>-OR-</h3>

      <button className='randombtn' onClick={renderRandomColor}>Get Random Color</button>

    </div>
    <div id='colorboard' style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}></div>
    
    <h3 className='rgbValues'>rgb({r}, {g}, {b})</h3>
    
    </>
  );

}

export default App;
