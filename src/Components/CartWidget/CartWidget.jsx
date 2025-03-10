import './CartWidget.css'
import Button from '../Product/Button'

function CartWidget(props) {

    return (
        <>
        <div className='cart-section'>
            <span className='carrito'>0</span>
            <img src="cart.png" alt="" className='cart-img'/>
        </div>
        </>
    )
    }
    
    export default CartWidget
    