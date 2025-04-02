import { Link } from 'react-router'
import './Navbar.css'


function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link link-hover" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle link-hover" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</Link>  
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item link-hover" to="/categoria/cuerdas">Cuerdas</Link></li>
                                <li><Link className="dropdown-item link-hover" to="/categoria/teclados">Teclados</Link></li>
                                <li><Link className="dropdown-item link-hover" to="/categoria/percusion">Percusión</Link></li>
                                <li><Link className="dropdown-item link-hover" to="/categoria/audio">Audio</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-hover" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar
