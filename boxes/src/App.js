
import './App.css';
import boxes from './boxes';
import { useState } from 'react';
function App() {
  const [squares,setSquares]=useState(boxes)

  const squareElements=squares.map(square=>{
    return <div className='box' key={square.id}></div>
})
  
  return (
    <main>
      {squareElements}
    </main>
  )
}

export default App;
