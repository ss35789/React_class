import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Counter } from './features/counter/Counter';
import './App.css';
function Home(){
  return(
    <h1>hello</h1>
  )
}
function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
          <Route path="/" element={<Home></Home>} />
          
        </Routes>
      
      </Router>

    </div>
  );
}

export default App;
