import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import CartProduct from "./CartProduct";
import { Link } from "react-router";
import { toast } from "react-toastify";
import './CartWidget.css';
import { ToastContainer } from 'react-toastify';


const CartWidget = () => {
    const { cartList, setCartList } = useContext(AppContext);
    const total = cartList.reduce((acc, p) => acc + p.quantity * p.price, 0);


    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        direccion: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cartList.length === 0) {
            toast.error("El carrito está vacío");
            return;
        }

        const orden = {
            comprador: formData,
            productos: cartList,
            total: cartList.reduce((acc, p) => acc + p.quantity * p.price, 0),
            fecha: new Date().toLocaleString()
        };



        toast.success("¡Compra confirmada!");

        setCartList([]);
        setFormData({ nombre: "", email: "", telefono: "", direccion: "" });
    };

    if (cartList.length === 0) {
        return (
            <div className="empty-cart">
                <h2>Tu carrito está vacío</h2>
                <Link to="/">Volver a la tienda</Link>
            </div>
        );
    }

    return (
        
        <div className="container-Cart">

            <div className="listaProductos-Cart">
                <h2>Carrito de compras</h2>

                {cartList.map((producto, index) => (
                    <CartProduct key={index} producto={producto} />
                ))}
            </div>

            <div className="confirm-Cart">
                <h3>Confirmar compra</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Nombre completo</label>
                        <input
                            type="text"
                            name="nombre"
                            className="form-control"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Teléfono</label>
                        <input
                            type="tel"
                            name="telefono"
                            className="form-control"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Dirección de entrega</label>
                        <input
                            type="text"
                            name="direccion"
                            className="form-control"
                            value={formData.direccion}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="buttonFormConfirm">
                        <p><strong>TOTAL:$ ${total}</strong></p>
                        <button type="submit" className="btn btn-success">Finalizar compra</button>

                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    
    );
};

export default CartWidget;