import './App.css';
import {useState} from 'react';
import $ from 'jquery';
import Hex from './Hex';

function App() {

  // RGB states
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  // Updating the number inputs when a change is made from another input
  $("input[name = r").val(r);
  $("input[name = g").val(g);
  $("input[name = b").val(b);

  // Updating the range inputs when a change is made from another input
  $("input[name = rangeRed").val(r);
  $("input[name = rangeGreen").val(g);
  $("input[name = rangeBlue").val(b);

  // Function to get random color
  function renderRandomColor(){
    setR(Math.floor(Math.random() * 256));
    setG(Math.floor(Math.random() * 256));
    setB(Math.floor(Math.random() * 256));
  }

  // Function to get random red value
  function renderRandomRed(){
    setR(Math.floor(Math.random() * 256));
  }

  // Function to get random green value
  function renderRandomGreen(){
    setG(Math.floor(Math.random() * 256));
  }
  
  // Functio nto get random blue value
  function renderRandomBlue(){
    setB(Math.floor(Math.random() * 256));
  }
  
  // Function that renders out the colors after every change
  function renderColor(e){
    e.preventDefault();

    // makeZeroDefault();
    

    // Setting the vales taken from the number inputs and setting them to the rgb
    setR(parseInt($("input[name = r").val()));
    setG(parseInt($("input[name = g").val()));
    setB(parseInt($("input[name = b").val()));
  }

  // Setting the colors on the page from the range inputs
  function renderColorFromRange(e){
    e.preventDefault();
    setR(parseInt($("input[name = rangeRed").val()));
    setG(parseInt($("input[name = rangeGreen").val()));
    setB(parseInt($("input[name = rangeBlue").val()));

  }
 

  // function makeZeroDefault(){
  //   if($("input[name = b").val() === ''){
  //     $("#blue").text(" Exercises Solution");
  //     console.log("here")
  //   }
  // }
 
  
  return (
    <>
    <h1 className='header'>Color Generator</h1>
    <div className='inputfld'>
      
      <form>
        <label style={{color:"red"}}>R:</label>
        <input  onChange={renderColor} id='red' name='r' type='number' min='0' max='255' defaultValue={r}/>
        <label style={{color:"limegreen"}}>G:</label>
        <input  onChange={renderColor} id='green' name='g' type='number' min='0' max='255' defaultValue={g}/>
        <label style={{color:"deepskyblue"}}>B:</label>
        <input onChange={renderColor} id='blue' name='b' type='number' min='0' max='255' defaultValue={b}/>
      </form>

      <h3>-OR-</h3>

      <button className='randombtn' onClick={renderRandomColor}>Get Random Color</button>

      <h3>-OR-</h3>

      <div className='randomColors'>
        <button className='randomRed' onClick={renderRandomRed}>Random Red</button>
        <button className='randomGreen' onClick={renderRandomGreen}>Random Green</button>
        <button className='randomBlue' onClick={renderRandomBlue}>Random Blue</button>
      </div>

    </div>
    <div id='colorboard' style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}></div>

    <div className='colorRange'>
      <input id='rangeRed' type='range' name='rangeRed' min='0' max='255' onChange={renderColorFromRange}/>
      <input id='rangeGreen' type='range' name='rangeGreen' min='0' max='255' onChange={renderColorFromRange}/>
      <input id='rangeBlue' type='range' name='rangeBlue' min='0' max='255' onChange={renderColorFromRange}/>
    </div>
    
    <h3 className='rgbValues'>rgb(<span id='red'>{r}</span>, <span id='green'>{g}</span>, <span id='blue'>{b}</span>)</h3>

    <Hex red={r} green = {g} blue={b}/>
      
    </>
  );

}

export default App;
