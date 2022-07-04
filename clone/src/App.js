
import './App.css';
import Footer from './Footer';
import Main from './MainContent';
import Header from './Header'
function Page(){
  return(
    <div className='body'>
      <Header></Header>
      <div className='content'>
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  )
    
}

function App() {
  return (
    <div className="App">
      
      <Page></Page>
      
    </div>
  );
}

export default App;
