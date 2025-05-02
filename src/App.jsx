import { Route } from 'react-router'
import { Routes } from 'react-router'
import { BrowserRouter } from 'react-router'
import { AppProvider } from './Context/AppProvider';
import Header from './Components/Body/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetails from './Components/Product/ItemDetails';
import CustomForm from './Components/Body/CustomForm';
import Footer from './Components/Body/Footer';
import CartWidget from './Components/CartWidget/CartWidget';
import './App.css';


function App() {
  
  return (
    
    <BrowserRouter>
      <AppProvider>

        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer greetings={"Categorias"} />} />
          <Route path="/detalles/:id" element={<ItemDetails />} /> 
          <Route path="/contacto" element={<CustomForm />} />
          <Route path="/carrito" element={<CartWidget/>}/>
        </Routes>
      </AppProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App
