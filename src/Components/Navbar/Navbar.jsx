import { Link } from 'react-router'
import './Navbar.css'

function Navbar() {

    return (
        <>
            <nav>
                <ul>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>Inicio</li>
                    </Link>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </>
    )
    }
    
    export default Navbar
    