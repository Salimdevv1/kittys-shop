import React from 'react'
import { Link } from 'react-router-dom'
import Test from './Test'

export default function Plushies({plushies , setProd , prod}) {
  return (  
    <div className='plush-cont'>
      <center><div className='categ-title'>
      <h2 style={{textAlign :"center" , paddingTop : 14}}>
        Plushies
      </h2>
      <p >Our high-quality covers ensure your adorable plushies 
        stay safe from dust, spills, and wear, allowing them to continue bringing joy to your space while staying in pristine condition. Elevate your 
        plushie collection with our durable and stylish covers, designed to safeguard your treasured friends for years to come.</p>
        </div></center>
        <center><div className='plushies-container'>
      {plushies.map((e)=>(
        <div className='prod-cart'>
          <div>
        <img src={e.productImg}/>
        </div>
        <div className='prod-info'>
        <p className='prod-title'>{e.productTitle}</p>
        <p className='prod-price'>{e.productPrice} TND</p>
        <div style={{display :"flex" , justifyContent :"center" , alignItems :"center" , gap : 20}}>
          <Link to="/test" style={{textDecoration :"none" , color : "black"}}><button className='cart-btn-add' onClick={()=>setProd(e) }>View</button></Link>
        <button className='cart-btn-add' >Add To Cart</button>
        </div>
        </div>
        </div>
      ))}
      <div style={{display : "none"}}>
      <Test prod={prod}></Test>
      </div>
      </div></center>
      <br /><br />
    </div>
  )
}
