import { Link } from 'react-router'
import Navbar from '../Navbar/Navbar'
import  CartButton from '../CartWidget/CartButton'
import './Header.css'

function Header() {

return (
    <>
    <header>
        <Link to="/"><img src='logo-pianocenter.png' className="logo-header"/></Link>
        
        <div className='nav-cart'>
            <Navbar/>
            <CartButton/>
        </div>
    </header>
    </>
)
}

export default Header
