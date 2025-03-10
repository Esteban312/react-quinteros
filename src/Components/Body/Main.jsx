import './Main.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Producto from '../Product/Producto'

function Main() {

    return (
        <>
        <main>
            <section>
                <ItemListContainer greetings={"Bienvenidos a PianoCenter"}/>
            </section>
            <section className='product-container'>
                <Producto imgProducto={'/product-piano.jpg'} productTitle='Piano Vertical Marrón' precio='$200000'/>
                <Producto imgProducto={'/product-drum.jpg'} productTitle='Bateria completa' precio='$350000'/>
                <Producto imgProducto={'/producto-guitar.jpg'} productTitle='Guitarra electrica' precio='$100000'/>
            </section>
        </main>
        </>
    )
    }
    
    export default Main