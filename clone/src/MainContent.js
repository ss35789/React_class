function List(){
    return(
      <ul className='list'>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
        <li> when an unknown printer took a galley of type and scrambled</li>
      </ul>
    )
  }

function Title(){
    return(
        <h1>Test Title!</h1>
    )
}

function Main(){
  return(
    <div className='main'>
      <Title></Title>
      <List></List>
    </div>
  )
 
}
  export {Main as default}