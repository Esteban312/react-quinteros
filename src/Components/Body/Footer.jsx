import { Link } from "react-router";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <Link to="/"><img src='logo-pianocenter.png' className="logo-footer"/></Link>
                    <h4>Sobre Nosotros</h4>
                    <p>Somos tu tienda de instrumentos musicales de confianza, ofreciendo calidad y variedad.</p>
                </div>

                <div className="footer-section">
                    <h4>Enlaces Rápidos</h4>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/categoria/cuerdas">Cuerdas</Link></li>
                        <li><Link to="/categoria/teclados">Teclados</Link></li>
                        <li><Link to="/categoria/percusion">Percusión</Link></li>
                        <li><Link to="/categoria/audio">Audio</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contacto</h4>
                    <p>Email: contacto@pianocenter.com</p>
                    <p>Teléfono: +54 11 5555-5555</p>
                    <p>Dirección: Av. Música 123, Buenos Aires</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} PianoCenter. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;