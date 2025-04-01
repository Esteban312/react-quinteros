import { useState } from 'react'
import './Button.css'

function Button({stock}){

    const [count, setCount]= useState(0);

    const cantidadSeleccionar=(operator)=>{
        if(operator==="+"){
            if(count < stock){
                setCount(count + 1)
            }
        }else{
            if(count < stock+1 && count > 0){
                setCount(count - 1)
            }
        }
    }
    
    return<>
        <div className='seleccionarCantidad'>
            <p>Disponibles: {stock}</p>
            <div className='seleccionarCantidadContainer'>
                <button onClick={()=>cantidadSeleccionar("-")}>-</button>
                <span className='cantidad'> {count} </span>
                <button onClick={()=>cantidadSeleccionar("+")}>+</button>
            </div>
        </div>

        <button className='addToCart'>Añadir al carrito</button>
    </>
}

export default Button