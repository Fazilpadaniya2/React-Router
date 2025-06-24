import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BrowserRouter from './BrowserRouter.jsx'
import Route from './Route.jsx'
import Navbar from './Navbar.jsx'

function App() {
    console.log("refreshed from app");
    const [count, setCount] = useState(0);
function handleClick(){
        setCount(count+1)
    }
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     
     <Route path = "/home">
     <h1>HOME</h1>
       <button onClick={handleClick}> Click</button> {count}
     </Route>
     <Route path = "/about">
     <h1>
      About
     </h1>
     </Route>
     <Route path = "/contact">
     <h1>contact</h1>
     </Route>
     </BrowserRouter>
    </>
  )
}

export default App;
