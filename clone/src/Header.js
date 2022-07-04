

function Header(){
    return(
      <nav className="header">
        <Logo></Logo>
        <ul className="menu">
          <a href='#'><li>First</li></a>
          <a href='#'><li>Second</li></a>
          <a href='#'><li>Third</li></a>
        </ul>
      </nav>
      
    )
  }
function Logo(){
   
  return(
    <nav>
      <img src='img/React.png' alt="My Image"  className="logo" />
      
    </nav>
    
  )
}
  export {Header as default}