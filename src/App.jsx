import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='contact' element={<Contacto />}/>
      <Route path='*' element={<NotFound />} />
       
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
