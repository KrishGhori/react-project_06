
import LoginBtn  from './Components/LoginBtn';
import LogoutBtn from './Components/LogoutBtn';
import './App.css'
import { useState } from 'react';



function App() {
  
  const [isLogedin ] = useState('') ;

  // 2.
  return (
    // <div>
    // {isLogedin ? <LogoutBtn/> : <LoginBtn />}
    // </div>
    <div>
      {isLogedin ? <LogoutBtn/> : <LoginBtn/>}
    </div>
  
  )
  // 1.
  // if(isLogedin){
  //   return(
  //     < LogoutBtn/>
      
  //   )
  // }
  // else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }

}

export default App
