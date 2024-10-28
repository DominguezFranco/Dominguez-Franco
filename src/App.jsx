import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
