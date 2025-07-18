import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Catalog from './components/Catalog/Catalog'
import Details from './pages/Details/Details'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Catalog/>}/>
        <Route path='/product/:id' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
