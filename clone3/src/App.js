
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import { useState } from 'react';
import Main from'./components/main';
function App() {
  const [toptext,setToptext]=useState("Top text")
  const [bottomtext,setBottomtext]=useState("Bottom text")

  return (
    <div className="App">
      <Header></Header>
      <body>
        <Meme makeIt={(Toptext,Bottomtext)=>{
          const newToptext={Toptext:Toptext}
          setToptext(newToptext.Toptext)
          setBottomtext(Bottomtext)
        }}></Meme>
        <Main toptext={toptext} bottomtext={bottomtext}></Main>
      </body>
      
    </div>
  );
}

export default App;
