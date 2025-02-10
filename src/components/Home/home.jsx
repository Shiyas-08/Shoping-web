import React, { useState } from 'react'
import './home.css'
import { useEffect } from 'react'
import{getAllProducts} from '../../API/API'
import { Link } from 'react-router-dom'
import MainHome from '../MainHome/MainHome'
<MainHome/>

function Home() {
const[products,setProducts]=useState([])
useEffect(() => {
  const fetchproducts=async()=>{
    const data=await getAllProducts();
    setProducts(data)
  }
  fetchproducts()
 
}, [])



  return (
    <div>
      <MainHome/>
    <div className='product-gride'>
      {
        products.map((product)=>(
        
        <div className="product" key={product.id}>
            <img src={product.image} alt="no image" />
            <h2>{product.title}</h2>
            <p>

                <span className='price'>{product.price}</span>

            </p>
            <Link to={`/product/${product.id}`}>
  <          button>Product Details</button>
        </Link> 
            
        </div>
      ))
    }

    </div>
    </div>
  )
  

}

export default Home

