import { Route } from 'react-router'
import { Routes } from 'react-router'
import { BrowserRouter } from 'react-router'
import './App.css'
import Header from './Components/Body/Header'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'


function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<ItemListContainer greetings={"Bienvenidos a PianoCenter"}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
