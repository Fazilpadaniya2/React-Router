import { useContext } from "react";
import { BrowserContext } from "./BrowserRouter";
function Route({ children,  path}) {
 

    const {currentUrl} = useContext(BrowserContext);
 if(currentUrl.pathname == path) {
    return <>{children}</>
  } else{
    return null;
}

}

export default Route;