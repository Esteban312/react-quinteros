import { useState } from "react";
import { AppContext } from "./AppContext";
import { toast } from 'react-toastify';

export function AppProvider({ children }){
    const [cartList, setCartList] = useState([])
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);



    // Modal de confirmacion de add to cart

    const addSuccess = () => toast.success('Agregado al carrito!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const emptyCart = () => toast.info('Tiene que seleccionar minimo una unidad', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const confirmShowModal = (producto, countStock) => {
        if (countStock !== 0) {
            setProductoSeleccionado(producto); 
            const showmodal = new bootstrap.Modal(document.getElementById('exampleModal'));
            showmodal.show();
        } else {
            emptyCart();
        }
    };

    const confirmAdd = (producto, cantidad) => {
        const nuevoProducto = {
            title: producto.title,
            img: producto.img,
            quantity: cantidad,
            price: producto.price,
        };
    
        const existente = cartList.find(p => p.title === producto.title);
        const cantidadExistente = existente ? existente.quantity : 0;
        const stockDisponible = producto.stock;
    
        if (cantidadExistente + cantidad > stockDisponible) {
            toast.error(`Stock insuficiente. Ya hay ${cantidadExistente} en el carrito. Solo se permiten ${stockDisponible} en total.`, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setCount(0);
            return;
        }
    
        setCartList(prev => {
            if (existente) {
                return prev.map(p =>
                    p.title === producto.title
                        ? { ...p, quantity: p.quantity + cantidad }
                        : p
                );
            } else {
                return [...prev, nuevoProducto];
            }
        });
    
        setCount(0);
        addSuccess();
        console.log(cartList);
        
    };

    // Contador
    const [count, setCount] = useState(0);
    const cantidadSeleccionar = (operator, stock) => {
        if (operator === "+" && count < stock) {
            setCount(count + 1);
        } else if (operator === "-" && count > 0) {
            setCount(count - 1);
        }
    };



    return(
        <AppContext.Provider value={{ cartList, setCartList, count, setCount,  cantidadSeleccionar, addSuccess,  confirmShowModal, confirmAdd, productoSeleccionado, setProductoSeleccionado}}>
            { children }
        </AppContext.Provider>
    )

}