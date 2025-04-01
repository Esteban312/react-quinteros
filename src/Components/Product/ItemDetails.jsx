import './ItemDetails.css'
import Button from './Button'

function ItemDetails({productList}){

    const {imgProducto, productTitle, precio, stock, categoria, descripcion} = productList;
    return (
        <section className="itemDetails-filter">

            <div className='informacionDetailsL'>
                <img src={imgProducto}/>
            </div>

            <div className='informacionDetailsR'>
                <h2><b>{productTitle.toUpperCase()}</b></h2>
                <p>Categoria: {categoria}</p>
                <h2>${precio}</h2>
                <h3>{descripcion}</h3>

                <Button stock={stock}/>

            </div>

        </section>
        )
}

export default ItemDetails