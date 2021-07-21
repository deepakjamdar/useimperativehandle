import React, { useRef } from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  const inputref = useRef();

  const handleClick = () => {
    inputref.current.increment();
  }

  return (
    <div className="App">
      <Counter ref={inputref} />
      <hr/>
      <button onClick={handleClick}>Parent</button>
    </div>
  );
}

export default App;
