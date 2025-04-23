// src/hooks/useProductos.js
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "./FirebaseConfig"; 

function useProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosCol = collection(database, "productos");
        const productosSnapshot = await getDocs(productosCol);
        const productosList = productosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProductos(productosList);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  return { productos, loading, error };
}

export default useProductos;