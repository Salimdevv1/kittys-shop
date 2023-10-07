import React from 'react'
import Database from '/public/db.json'
import { Link } from 'react-router-dom'

export default function Category() {
  return (
    <div>
      <section className='categories'>
        <div className='container2'>
            <center><div className='categories-title'>
               <h2>Categories</h2>
            </div></center>
        </div>
        <div className='categories-container'>
          <Link to="/plushies" style={{textDecoration :"none" , color :"black"}}><div className='box1'>
            <img src="../img/categ1.jpg" alt="" className='categ-img' />
            <p style={{marginTop : 10 , fontWeight :"bold" , fontSize : 19}}>Plushies</p>
          </div></Link>
          <div className='box1' style={{textDecoration :"none" , color :"black"}}>
            <img src="../img/categ2.jpg" alt="" className='categ-img' />
            <p style={{marginTop : 10 , fontWeight :"bold" , fontSize : 19}}>Bags</p>
          </div>
          <div className='box1'  style={{textDecoration :"none" , color :"black"}}>
            <img src="../img/categ3.jpg" alt="" className='categ-img' />
            <p style={{marginTop : 10 , fontWeight :"bold" , fontSize : 19}}>Cushion</p>
          </div>
          <div className='box1' style={{textDecoration :"none" , color :"black"}}>
            <img src="../img/categ4.jpg" alt="" className='categ-img' />
            <p style={{marginTop : 10 , fontWeight :"bold" , fontSize : 19}}>Headphones</p>
          </div>
          <div className='box1' style={{textDecoration :"none" , color :"black"}}>
            <img src="../img/categ6.png" alt="" className='categ-img' />
            <p style={{marginTop : 10 , fontWeight :"bold" , fontSize : 19}}>Tops</p>
          </div>
          <div className='box1' style={{textDecoration :"none" , color :"black"}}>
            <img src="../img/categ7.png" alt=""  className='categ-img'/>
            <p style={{marginTop : 10 , fontWeight :"bold" , fontSize : 19}}>Cap</p>
          </div>

        </div>
      </section>
    </div>
  )
}
