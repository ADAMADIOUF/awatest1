import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Contact from './components/Contact'

import Woman from './components/Woman'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/femmes' element={<Woman />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App