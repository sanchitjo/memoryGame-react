import './App.css';
import Cards from './components/Cards';
import { useState } from 'react';


const App = () => {

  const [count, setCount] = useState(0)
  const [match, setMatch] = useState(0)

  const increamentCounter = (matchCount) => {
    setCount(count + 1)
  }
  
  const matchCounter = () => {
    setMatch(match + 1)
  }


  return (
    <div className='App'>
      <h1 className='heading'>Memory Game</h1>
      <div className='counter'>
        <h3>Attempts : {count}</h3>
        <h3>Matches : {match}</h3>
      </div>
      <Cards 
      increamentCounter={increamentCounter}
      matchCounter={matchCounter}
      />
    </div>
  );
}

export default App;
