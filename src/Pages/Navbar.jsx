import React from 'react'
import 'boxicons'
import Cart from './Cart'
import  {useState} from 'react'
import Menu from './Menu'
import Hero from './Hero'
import Feedback from './Feedback'
import Category from './Category'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [show, setShow] = useState(false);
    const handleClick = () => {
      setVisible(false)
    }
    const [visible , setVisible] = useState(false)

  return (
    <div >
      <header className='container1'>
        <div className='title'>
            T ' Shop
        </div>
        <div className='salimdev'>
          <div className='nav-link'>
           <Link to="/"><a href="">Home</a></Link> 
            <a href="">Category</a>
            <Link to="/contact"><a href="">Contact</a></Link>
          </div>
          <div className='mobile'>
          <div className='cart'>
            <button className='cart-btn' onClick={()=>setShow(true)}><box-icon name='cart'></box-icon></button>
          </div>
          <div className='menu'>
            <button onClick={()=>setVisible(true)} className='menulist-btn'>
        <box-icon name='list-ul'></box-icon>
        </button>
        </div>
        </div>
        </div>

        </header>
      <div>
    <Cart show={show} setShow={setShow}></Cart>
    <Menu visible={visible} setVisible={visible} handleClick={handleClick}></Menu>
    </div>
    </div>
  )
}
