import { useContext } from "react";
import {BrowserContext} from "./BrowserRouter"

function Link({to, children}){

const {currentUrl, setCurrentUrl} = useContext(BrowserContext);



function handleClick(e){
    window.history.pushState({}, '', to  );
    setCurrentUrl(new URL(currentUrl.origin+ to));
}
    return(
        <>
        <a onClick={handleClick}>{children}</a>
        </>
    )

}

export default Link;