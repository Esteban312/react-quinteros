import { useEffect, useState } from 'react'
import Producto from '../Product/Producto'
import Loader from "./Loader"
import { fetchData } from '../../fetchData';
import ItemDetails from '../Product/ItemDetails';

function ItemListContainer({greetings}) {

    const [load, setLoad] = useState(true);
    const [cargaProductos, setCargaProductos] = useState(null)
    const [productoFiltrado, setProductoFiltrado] = useState(null)
    

    useEffect(()=>{

        fetchData(true)
        .then(response =>{
            setCargaProductos(response)
            setLoad(false)
        })
        .catch(error => console.error(error))
    },[])


    return (
        <main>
            <section>
                <h1>{greetings}</h1>
            </section>

            <section className='product-container'>

                {
                load ?
                <Loader/>
                :
                cargaProductos.map(el=>(
                    <Producto key={el.id} productList={el} filtrar={setProductoFiltrado}/>
                ))
                }

                
            </section>
            {
                productoFiltrado && <ItemDetails productList={productoFiltrado}/>
            }
        </main>
    )
    }
    
    export default ItemListContainer
    