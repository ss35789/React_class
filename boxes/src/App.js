
import './App.css';
import boxes from './boxes'; 
import { useState } from 'react';
import Box from'./Box';
function App() {
  const [squares,setSquares]=useState(boxes)

  const squareElements=squares.map(square=>{
    
    return <Box id={square.id} on={square.on} />

   
})

 
  
  return (
    <main>
      {squareElements}
    </main>
  )
}

export default App;
