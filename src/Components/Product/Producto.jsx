import { Link } from 'react-router';
import './Producto.css'

function Producto({productList, filtrar}){

    const {id, imgProducto, productTitle, precio} = productList;
    return (
        <div className="card centrar-card" style={{ width: '20rem' }}>
            <img src={imgProducto} className="card-img-top"/>

            <div className="card-body">
                <h4>{productTitle}</h4>
                <p className="card-text">${precio}</p>

                <Link to={`/detalles/${id}`}>
                    <button className='verDetalleBtn'>Ver detalles</button>
                </Link>
            </div>
        </div>
        )
}

export default Producto