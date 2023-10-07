import React from 'react'

export default function Test({prod}) {
  return (
    <div>
        <br />
       <center> <div className='container productDetails'>
    <div className='productImg'>
        <img  className='image' src={prod.productImg} alt="" />
    </div>
    <div className='prod-details'>
        <h2 className='name'>{prod.productTitle}</h2>
        <p className='price'>{prod.productPrice}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam fuga. Suscipit adipisci placeat atque excepturi blanditiis esse ut pariatur tempora corrupti veritatis ea rerum, officiis, magni possimus, odio dignissimos.</p>
        <p style={{color : "green"}}>In Stock</p>
        <center><button className='cart-btn-add'>Order</button></center>
    </div>
    </div></center>
    <br />
    </div>
  )
}
