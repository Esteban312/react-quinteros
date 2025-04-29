import { useContext } from 'react'
import './Button.css'
import { AppContext } from '../../Context/AppContext'
import { ToastContainer, toast } from 'react-toastify';

function Button({ stock }) {

    const { count, cantidadSeleccionar } = useContext(AppContext)
    const notify = () => toast.success('Agregado al carrito!', {
        position: "top-center",
        autoClose: 2600,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",

    });;

    return <>

        <div className='seleccionarCantidad'>
            <p>Disponibles: {stock}</p>
            <div className='seleccionarCantidadContainer'>
                <button onClick={() => cantidadSeleccionar("-", stock)}>-</button>
                <span className='cantidad'> {count} </span>
                <button onClick={() => cantidadSeleccionar("+", stock)}>+</button>
            </div>
        </div>

        <button className='addToCart' onClick={notify}>Añadir al carrito</button>
        <ToastContainer />
    </>
}

export default Button