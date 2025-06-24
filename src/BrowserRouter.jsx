import { createContext, useEffect, useState } from "react";
import Route from './Route.jsx'


    const BrowserContext = createContext();
    
    
    
    function BrowserRouter({ children }) {
    const [count, setCount] = useState(0);
    const [currentUrl, setCurrentUrl] = useState(new URL(window.location.href));
  useEffect(()=>{
        
        
        function handlePopState(e){
            console.log(e);
            console.log("popstate triggered");
            setCurrentUrl(new URL(window.location.href) )
            //we need this because when someone goes back or forward and doesnt use the "link" to navigate who will change the current url? this will!! thats why we need this here so this changes the state of currentUrl and rerenders the entire page so that content needed is also changed
        }
        window.addEventListener("popstate", handlePopState);

        return ()=> window.removeEventListener("popstate", handlePopState)
    },[]);

    console.log("refreshed from browser Router");
  
    function handleClick(){
        setCount(count+1)
    }
    return (
    <BrowserContext.Provider value={{currentUrl, setCurrentUrl}}>
      <h1>Browser Router</h1>
      {children}
       <button onClick={handleClick}> Click</button> {count}
     </BrowserContext.Provider>
    
  );
}

export { BrowserContext };
export default BrowserRouter;