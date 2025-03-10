import './Header.css'
import Navbar from '../Navbar/Navbar'
import  CartWidget from '../CartWidget/CartWidget'

function Header() {

return (
    <>
    <header>
        <img src='logo-pianocenter.png' className="logo-header"/>
        <div className='nav-cart'>
            <Navbar/>
            <CartWidget/>
        </div>
    </header>
    </>
)
}

export default Header
