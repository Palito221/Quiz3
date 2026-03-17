import {Link} from "react-router-dom"

function NavBar() {
  return (
    <div>
        <header>
            <h1>Tienda</h1>

            <ul>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">Registrese</Link></li>
            </ul>
        </header>
    </div>
  )
}

export default NavBar