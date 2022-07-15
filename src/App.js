import './App.css';

function App() {


  function renderColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.getElementById("colorboard").style.backgroundColor= 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  

  
  return (
    <>
    <h1>Random Color Generator</h1>

    <button onClick={renderColor}>Random color</button>

    <div id='colorboard'></div>

    </>
  );

 
}

export default App;
