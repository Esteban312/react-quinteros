// import { Link } from 'react-router'
import './Producto.css'

function Producto({productList}){

    const {imgProducto, productTitle, precio, stock} = productList;
    return (
        <div className="card centrar-card" style={{ width: '20rem' }}>
            <img src={imgProducto} className="card-img-top"/>

            <div className="card-body">
                <h4>{productTitle}</h4>
                <p className="card-text">{precio}</p>
                <button className='verDetalleBtn'>Ver detalle</button>
            </div>
        </div>
        )
}

export default Producto