import { createContext, useState } from "react";

export const CartWidgetContext = createContext();

export const CartWidgetProvider=({children})=>{
    const [CartwidgetList, setCartwidgetList] = useState([]);

    return(
    <CartWidgetContext.Provider value={[CartwidgetList, setCartwidgetList]}>
        {children}
    </CartWidgetContext.Provider>
    )
}