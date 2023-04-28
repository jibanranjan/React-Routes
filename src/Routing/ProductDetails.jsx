import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './productDetail.css'

function ProductDetails() {
    const {id} =useParams()
    const [state, setState] = useState({

        id:0,
        title:" ",
        description:" ",
        image:" ",
        price:0

    })

    useEffect(()=>{ 
        
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data);
            setState(data);
        })        
    },[])
  return (
    <div className='maindivp'>
        <h2>{state.title}</h2>
        <img  src={state.image} />
        <h4>price: {state.price}</h4>
        <p>{state.description}</p>
      


        
         </div>
  )
}

export default ProductDetails