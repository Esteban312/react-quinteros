import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "./FirebaseConfig";

const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosCollection = collection(database, "productos");
        const snapshot = await getDocs(productosCollection);
        const productosData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProductos(productosData);
      } catch (err) {
        console.error("Error obteniendo productos:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []);

  return { productos, loading, error };
};

export default useProductos;
