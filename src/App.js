import './App.css';
import {useState} from 'react';
import $ from 'jquery';

function App() {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);


  function renderRandomColor(){
     
    setR(Math.floor(Math.random() * 256));
    setG(Math.floor(Math.random() * 256));
    setB(Math.floor(Math.random() * 256));
  }

  $("input[name = r").val(r);
  $("input[name = g").val(g);
  $("input[name = b").val(b);


  function renderColor(e){
    e.preventDefault();
    setR($("input[name = r").val());
    setG($("input[name = g").val());
    setB($("input[name = b").val());
  }

 
  
  return (
    <>
    <h1 className='header'>Color Generator</h1>
    <div className='inputfld'>
      
      <form>
        <label style={{color:"red"}}>R:</label>
        <input id='red' name='r' type='text' defaultValue={r}/>
        <label style={{color:"limegreen"}}>G:</label>
        <input id='green' name='g' type='text' defaultValue={g}/>
        <label style={{color:"deepskyblue"}}>B:</label>
        <input id='blue' name='b' type='text' defaultValue={b}/>
        <button className='getColor' onClick={renderColor}>Get Color</button>
      </form>

      <h3>-OR-</h3>

      <button className='randombtn' onClick={renderRandomColor}>Get Random Color</button>

    </div>
    <div id='colorboard' style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}></div>
    
    <h3 className='rgbValues'>rgb(<span id='red'>{r}</span>, <span id='green'>{g}</span>, <span id='blue'>{b}</span>)</h3>
    
    </>
  );

}

export default App;
