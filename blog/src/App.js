import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function Header(props){
  
  return<header>
  <h1><a href="/" onClick={(event)=>{
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></h1>
</header>
}

function Nav(props){
  const lis=[]
  for(let i=0;i<props.topics.length;i++){
    let t=props.topics[i]
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
    }}>{t.title}</a>
    </li>)
  }
  
  return<nav>
  <ol>
    {lis}
  </ol>
</nav>
}

function Article(props){
  return<article>
  <h2>{props.title}</h2>
  {props.body}
  
</article>
}
function Update(props){
  const [title,setTitle]=useState(props.title)
  const [body,setBody]=useState(props.body)

  return <article>
    <h2>Update</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      props.onUpdate(title,body);
    }}>
      <p><input type='text' name='title' placeholder='title' value={title} onChange={event=>{
        setTitle(event.target.value)
      }}></input></p>
      <p><textarea name='body' id='' cols='30' row='10' placeholder='body' value={body} onChange={event=>{
        setBody(event.target.value)
      }}></textarea></p>
      <p><input type='submit'value='Update'></input></p>
    </form>
    </article>
}

function Create(props){
  
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title=event.target.title.value;
      const body=event.target.body.value;
      
      props.onCreate(title,body);
    }}>
      <p><input type='text' name='title' placeholder='title'></input></p>
      <p><textarea name='body' id='' cols='30' row='10' placeholder='body'></textarea></p>
      <p><input type='submit'value='Create'></input></p>
    </form>
    </article>
}
function App() {
  const [mode,setmode]=useState("WELCOME");
  const [id,setid]=useState(null);
  const [nextId,setNextId]=useState(4);
  const [topics, setTopics]=useState([
    {id:1, title:'html',body:'html is ...'},
    {id:2, title:'css',body:'css is ...'},
    {id:3, title:'js',body:'js is ...'}
  ]);
  let content=null;
  let contentUpdate=null;
  let contentDelete=null;
  if(mode==="WELCOME"){
    content=<Article title="Welcome" body="Hello Web"></Article>;
  }
  else if(mode==="READ"){
    let title,body=null;
    for(let i=0;i<topics.length;i++){
      console.log(topics[i].id)
      if(topics[i].id===id){
        title=topics[i].title;
        body=topics[i].body;
      }
    }
    content=<Article title={title} body={body}></Article>;
    contentUpdate=<li><a href={'/update/'+id} onClick={event=>{
      event.preventDefault();
      setmode("UPDATE");
  }}>Update</a></li>
    contentDelete=<li><a href='/delete/' onClick={event=>{
      event.preventDefault();
      setmode("DELETE")
    }}>Delete</a></li>
  
  }
  else if(mode==='CREATE'){
    content=<Create onCreate={(title,body)=>{
      const newTopic={id:nextId,title:title,body:body};
      const newTopics=[...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setmode("READ");
      setid(nextId);
      setNextId(nextId+1);
    }}></Create>
    
  }
  else if(mode==='UPDATE'){
    let title=null,body=null
    for(let i=0;i<topics.length;i++){
      if(topics[i].id===id){
        title=topics[i].title;
        body=topics[i].body;
      }
    }
    content=<Update title={title} body={body} onUpdate={(title,body)=>{
      const updateTopic={id:id,title:title,body:body}
      const newTopics=[...topics]
      for(let i=0;i<newTopics.length;i++){
        if(newTopics[i].id===id){
          newTopics[i]=updateTopic;
          break;
        }
      }
      setTopics(newTopics)
      setmode("READ")
    }}></Update>
  }
  else if(mode==='DELETE'){
    let newTopics=[]
    
    for(let i=0;i<topics.length;i++){
      if(topics[i].id!==id){
        newTopics.push(topics[i]);
        
      }
    }
    setTopics(newTopics)
    setmode("WELCOME")
  }
   return (
    <div>
      <Header title="REACT" onChangeMode={()=>{
        setmode("WELCOME");
        
        }}></Header>
    

      <Nav topics={topics} onChangeMode={(id)=>{
       
        setmode("READ");
        setid(id);

      }
       
      }></Nav>
     
      
      
      {content}
    <ul>
      <li><a href='/create' onClick={event=>{
        event.preventDefault();
        setmode("CREATE");
      }}>Create</a></li>
      {contentUpdate}
      {contentDelete}
    </ul>
    </div>
  );
}



export default App;
