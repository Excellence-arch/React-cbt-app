import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
        <header>
            <nav className="navbar border-bottom bg-light">
                <ul className="nav">
                    <li> <Link className="nav-link " to="/"> Home </Link> </li>
                    <li> <Link className="nav-link" to="/sign-in"> Login </Link> </li>
                    <li> <Link className="nav-link" to="/sign-up"> Sign Up </Link> </li>
                    <li> <Link className="nav-link" to="/admin"> Admin </Link> </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default NavBar;