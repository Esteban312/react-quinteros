import { Route } from 'react-router'
import { Routes } from 'react-router'
import { BrowserRouter } from 'react-router'
import Header from './Components/Body/Header'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetails from './Components/Product/ItemDetails'
import './App.css'
import CustomForm from './Components/Body/CustomForm'
import Footer from './Components/Body/Footer'


function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<ItemListContainer greetings={"Bienvenidos a PianoCenter"}/>}/>
        <Route path="/categoria/:categoria" element={<ItemListContainer greetings={"Categorias"}/>}/>
        <Route path="/detalles/:id" element={<ItemDetails />} />
        <Route path="/contacto" element={<CustomForm/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
