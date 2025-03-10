import './Producto.css'
import Button from './Button'

function Producto(props){
return<>
    <div className="card centrar-card" style={{ width: '20rem' }}>
        <img src={props.imgProducto} className="card-img-top"/>
        <div className="card-body">
        <h4>{props.productTitle}</h4>
        <p className="card-text">
            {props.precio}
        </p>
        <Button/>
    </div>
    </div>
</>
}

export default Producto