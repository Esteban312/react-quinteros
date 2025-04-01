import Producto from '../Product/Producto'
import productList from './product-list'

function ItemListContainer({greetings}) {

    return (
        <main>
            <section>
                <h1>{greetings}</h1>
            </section>
            <section className='product-container'>

                {productList.map(el=>(
                    <Producto key={el.id} productList={el}/>
                ))}
            </section>
        </main>
    )
    }
    
    export default ItemListContainer
    