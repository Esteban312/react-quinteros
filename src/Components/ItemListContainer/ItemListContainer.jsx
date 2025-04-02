import { useEffect, useState } from 'react'
import { fetchData } from '../../fetchData';
import { useParams } from 'react-router';
import Producto from '../Product/Producto'
import Loader from "./Loader"

function ItemListContainer({greetings}) {

    const [load, setLoad] = useState(true);
    const [cargaProductos, setCargaProductos] = useState(null)
    
    const {categoria} = useParams()

    useEffect(()=>{

        if(!cargaProductos){
            fetchData(true)
            .then(response =>{
                setCargaProductos(response)
                setLoad(false)
            })
            .catch(error => console.error(error))
        }
    },[categoria])


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

                categoria ?
                cargaProductos.filter(el => el.categoria===categoria).map(el=>(
                    <Producto key={el.id} productList={el}/>
                ))

                :

                cargaProductos.map(el=>(
                    <Producto key={el.id} productList={el}/>
                ))
                }

                
            </section>
        </main>
    )
    }
    
    export default ItemListContainer
    