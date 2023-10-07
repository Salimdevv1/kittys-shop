import React, { useState } from 'react'
import Navbar from './Pages/Navbar'
import Hero from './Pages/Hero'
import Category from './Pages/Category'
import Cart from './Pages/Cart'
import Footer from './Pages/Footer'
import Feedback from './Pages/Feedback'
import Contact from './Pages/Contact'
import Plushies from './ProductsPages/Plushies'
import { Route , Routes } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Products from '../public/products.json'
import Test from './ProductsPages/Test'

export default function App() {
  const [prod , setProd] = useState([

  ])
  return (
    <div>
      <div className='section-container'>
      <Navbar></Navbar>
      <Cart prod={prod} setProd={setProd}></Cart>
      </div>
      <Routes>
        <Route path='/test' element={<Test prod={prod} setProd={setProd}/>}></Route>
        <Route path='/plushies' element={<Plushies plushies={Products} setProd={setProd} prod={prod} />} ></Route>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}
