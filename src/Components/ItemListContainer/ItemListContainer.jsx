import { useParams } from 'react-router';
import useProductos from "../../useProductos";
import Producto from '../Product/Producto';
import Loader from "./Loader";

function ItemListContainer() {
  const { categoria } = useParams();
  const { productos, loading, error } = useProductos();

  const productosFiltrados = categoria
    ? productos.filter(el => el.categoria === categoria)
    : productos;

  return (
    <main>
      <section>
        <h1>Bienvenidos a PianoCenter</h1>
      </section>

      <section className='product-container'>
        {loading ? (
          <Loader />
        ) : error ? (
          <p>Ocurrió un error al cargar los productos.</p>
        ) : (
          productosFiltrados.map(el => (
            <Producto key={el.id} productList={el} />
          ))
        )}
      </section>
    </main>
  );
}

export default ItemListContainer;