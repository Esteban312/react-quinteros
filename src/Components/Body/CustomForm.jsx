import React from "react";
import "./CustomForm.css";

const CustomForm = () => {
    return (
        <div className="container custom-form-container">
            <h2 className="custom-form-title">Contacto</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label custom-label">Nombre</label>
                    <input type="text" className="form-control custom-input" id="name" placeholder="Ingrese su nombre" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label custom-label">Correo Electrónico</label>
                    <input type="email" className="form-control custom-input" id="email" placeholder="Ingrese su correo" />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label custom-label">Mensaje</label>
                    <textarea className="form-control custom-textarea" id="message" rows="4" placeholder="Escriba su mensaje" />
                </div>

                <button type="submit" className="btn custom-submit">Enviar</button>
            </form>
        </div>
    );
};

export default CustomForm;
