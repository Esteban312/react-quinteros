import { useContext } from 'react'
import './Button.css'
import { AppContext } from '../../Context/AppContext'
import { ToastContainer } from 'react-toastify';

function Button({ stock, img, title, price }) {

    const { count, cantidadSeleccionar, confirmShowModal, confirmAdd} = useContext(AppContext)

    const productoActual = {
        title,
        img,
        price,
        stock
    };

    return <>
        <div className='seleccionarCantidad'>
            <p>Disponibles: {stock}</p>
            <div className='seleccionarCantidadContainer'>
                <button onClick={() => cantidadSeleccionar("-", stock)}>-</button>
                <span className='cantidad'> {count} </span>
                <button onClick={() => cantidadSeleccionar("+", stock)}>+</button>
            </div>
        </div>


        <button className="addToCart" onClick={() => confirmShowModal(productoActual, count)} data-bs-target="#exampleModal">
            Añadir al carrito
        </button>


        <div className="modal fade" id="exampleModal">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h2 className="modal-title fs-5" id="exampleModalLabel">{title}</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body d-flex justify-content-between ">
                        <img src={img} style={{ width: '100px', height: '100px', marginRight: '30px' }} />
                        <p>¿Desea agregar al carrito <b>{count}</b> "{title}"?</p>
                    </div>
                    <div className="modal-footer buttonsModal">
                        <button data-bs-dismiss="modal" className='modalCancel' >Cancelar</button>
                        <button
                            onClick={() => confirmAdd(productoActual, count)}
                            data-bs-dismiss="modal"
                            className='modalConfirm'>
                            Agregar
                        </button>
                    </div>

                </div>
            </div>
        </div>
        <ToastContainer />
    </>
}

export default Button