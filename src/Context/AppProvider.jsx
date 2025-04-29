import { useState } from "react";
import { AppContext } from "./AppContext";

export function AppProvider({ children }){
    const [cartList, setCartList] = useState([])

    const [count, setCount] = useState(0);
    const cantidadSeleccionar = (operator, stock) => {
        if (operator === "+" && count < stock) {
            setCount(count + 1);
        } else if (operator === "-" && count > 0) {
            setCount(count - 1);
        }
    };

    return(
        <AppContext.Provider value={{ cartList, setCartList, count, setCount,  cantidadSeleccionar}}>
            { children }
        </AppContext.Provider>
    )

}