import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Button from './Button';
import Loader from '../ItemListContainer/Loader';
import './ItemDetails.css';
import { doc, getDoc } from 'firebase/firestore';
import { database } from '../../FirebaseConfig';

function ItemDetails() {
    const { id } = useParams(); 
    const [load, setLoad] = useState(true);
    const [producto, setProducto] = useState({});
    

    useEffect(() => {

        const obtenerProducto = async () => {
            try {
                const docRef = doc(database, 'productos', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProducto({ id: docSnap.id, ...docSnap.data() });
                
                } else {
                    console.error('Producto no encontrado');
                }
            } catch (error) {
                console.error('Error al obtener producto:', error);
            } finally {
                setLoad(false);
            }
        };

        obtenerProducto();
    }, [id]); 

    return (
        load ? (
            <Loader />
        ) : !producto.productTitle ? (
            <p>Producto no encontrado</p>
        ) : (
            <section className="itemDetails-filter">
                <div className="informacionDetailsL">
                    <img src={producto.imgProducto} alt={producto.productTitle} />
                </div>

                <div className="informacionDetailsR">
                    <h2><b>{producto.productTitle.toUpperCase()}</b></h2>
                    <p>Categoria: {producto.categoria}</p>
                    <h2>${producto.precio}</h2>
                    <h3>{producto.descripcion}</h3>

                    <Button
                        stock={producto.stock}
                        title={producto.productTitle}
                        img={producto.imgProducto}
                        price={producto.precio}
                    />
                    <Link to="/" className="volverAtras">
                        <p>Volver al inicio</p>
                    </Link>
                </div>
            </section>
        )
    );
}

export default ItemDetails;
