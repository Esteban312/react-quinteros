import { Link, useParams } from 'react-router';
import './ItemDetails.css'
import Button from './Button'
import { useEffect, useState } from 'react';
import { fetchData } from '../../fetchData';
import Loader from '../ItemListContainer/Loader';

function ItemDetails(){

    const {id} = useParams()

    // const {imgProducto, productTitle, precio, stock, categoria, descripcion} = productList;
    
    const [load, setLoad] = useState(true);
    const [producto, setProducto] = useState({})
    const [count, setCount]= useState(0);

    useEffect(()=>{
        fetchData(true)
        .then(response =>{
            const productoAMostrar = response.find( el => el.id === parseInt(id))
            setProducto(productoAMostrar)
            setTimeout(()=>{
                setLoad(false)
            },1000)
        })
        .catch(error => console.error(error))
    }, [] )

    return (

        load ?
        <Loader/>

        :

        <section className="itemDetails-filter">

            <div className='informacionDetailsL'>
                <img src={producto.imgProducto}/>
            </div>

            <div className='informacionDetailsR'>
                <h2><b>{producto.productTitle.toUpperCase()}</b></h2>
                <p>Categoria: {producto.categoria}</p>
                <h2>${producto.precio}</h2>
                <h3>{producto.descripcion}</h3>

                <Button 
                    stock={producto.stock} 
                    count={count}
                    setCount={setCount} 
                />
            <Link to="/" className='volverAtras'>
                <p>Volver atras</p>
            </Link>
            </div>

        </section>
        )
}

export default ItemDetails