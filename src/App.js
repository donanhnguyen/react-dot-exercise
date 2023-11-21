import './App.css';
import { useState } from 'react';

function App() {

  const [allDots, setAllDots] = useState([]);
  const [undos, setUndos] = useState([]);

  function handleClickDot (e) {
    setAllDots((prevState) => [...prevState, {x: e.clientX, y: e.clientY}])
  }

  function undo () {
    const lastOne = allDots[allDots.length - 1];
    setUndos((prevState) => [...prevState, lastOne]);
    setAllDots((prevState) => {
      const newArray = prevState.slice(0, -1);
      return newArray;
    });
  }

  function redo () {
    const lastOne = undos[undos.length - 1];
    setAllDots((prevState) => [...prevState, lastOne])
    setUndos((prevState) => {
      const newArray = prevState.slice(0, -1);
      return newArray;
    });
  }

  console.log('all dots')
  console.log(allDots)
  console.log('undos')
  console.log(undos);

  return (
  <div>
    <button disabled={!allDots.length} onClick={undo}>Undo</button><button disabled={!undos.length} onClick={redo}>Redo</button>
    <div onClick={(e) => handleClickDot(e)} className="App" style={{position: 'relative'}}>

    

        {allDots.map((dot, i) => {
          return <span key={i} style={{color: 'blue', position: 'absolute', fontSize: '2em', left: `${dot.x}px`, top: `${dot.y}px`}}>o</span>
        })}

    </div>
  </div>
  
  );
}

export default App;
