import { Link } from 'react-router'
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';

function CartButton() {
    const { cartList } = useContext(AppContext);

    return (
        <Link to="/carrito" className='cart-section'>
            <span className='carrito'>{cartList.length}</span>
            <img src="cart.png" className='cart-img' alt="Carrito"/>
        </Link>
    );
}

export default CartButton;