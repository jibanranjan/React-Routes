import React, { useContext } from 'react'
import './Product.css'
import { allContext } from '../Components/ContextProvider';

const Product = () => {
  const{product,cart,setCart,cartCount,setCartCount}=useContext(allContext)

  const addProduct=(ele)=>{
    cart.push(ele)
    
    setCartCount(cartCount+1)
  }

  return (
    <>
    <div className='product'>
      {product.lenght>0 ? <h1>Data not Fetch</h1> 
      :
      product.map((ele)=>{
        return<div key={ele.id} className="card">
          <img src={ele.image} alt="product image" />
          <h2>{ele.category}</h2>
          <p>Price: {ele.price} $</p>
          <button onClick={()=>{
            addProduct(ele)
          }}>ADD TO CART</button>
        </div>
        
      })
    }
    
    </div>
    </>
  )
}

export default Product