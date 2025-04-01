import productList from './product-list'

export const fetchData = (datos) => new Promise((resolve, reject)=>{
    if(datos){
        setTimeout(() => {
            resolve(productList)
        }, 500);
        
    }else{
        reject("Hubo un error al traer los productos")
    }
})