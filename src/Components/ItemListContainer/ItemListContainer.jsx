import Producto from '../Product/Producto'

function ItemListContainer({greetings}) {

    return (
        <>
            <section>
                <h1>{greetings}</h1>
            </section>
            <section className='product-container'>
                <Producto imgProducto={'/product-piano.jpg'} productTitle='Piano Vertical Marrón' precio='$200000'/>
                <Producto imgProducto={'/product-drum.jpg'} productTitle='Bateria completa' precio='$350000'/>
                <Producto imgProducto={'/producto-guitar.jpg'} productTitle='Guitarra electrica' precio='$100000'/>
            </section>
        </>
    )
    }
    
    export default ItemListContainer
    