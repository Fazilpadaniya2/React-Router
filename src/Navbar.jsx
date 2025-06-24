import Link from "./Link.jsx";

function Navbar() {
    function handleClick(){

    }
    return(
        <>
        <Link to='/home'>home
        </Link>
        <Link to='/contact'>contact</Link>
        <Link to='/about'>about</Link>
        </>
    )
}


export default Navbar;