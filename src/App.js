
import { useState, useEffect} from 'react';

import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    console.log('Counter changed to: '+counter)
  },[counter])
  return (
    <div className="App">
      <Header />
      

      <button onClick ={() =>setCounter( (prevCount)=> prevCount+1)}>+</button>
      <h2>{counter}</h2>
      <button onClick={()=> setCounter((prevCount) => prevCount-1)}> - </button> {/*prevCount takes current state of the counter */}

      <Body />

    </div>
  );
}

export default App;
