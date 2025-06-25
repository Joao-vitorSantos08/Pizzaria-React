import './App.css'
import Contact from './pages/contact'
import Home from './pages/home'
import Menu from './pages/menu'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page404 from './pages/page404'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cardapio' element={<Menu/>}/>
        <Route path='/contato' element={<Contact/>}/>
        <Route path='*' element={<Page404/>}/>
        
      </Routes>
    </BrowserRouter>

  )
}

export default App
