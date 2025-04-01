// import { Link } from 'react-router'
import './Producto.css'

function Producto({productList, filtrar}){

    const {imgProducto, productTitle, precio} = productList;
    return (
        <div className="card centrar-card" style={{ width: '20rem' }}>
            <img src={imgProducto} className="card-img-top"/>

            <div className="card-body">
                <h4>{productTitle}</h4>
                <p className="card-text">${precio}</p>
                <button className='verDetalleBtn' onClick={ ()=>{filtrar(productList)}}>Ver detalles</button>
            </div>
        </div>
        )
}

export default Producto