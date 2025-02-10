import React, { useEffect,useState } from 'react'
import { getProductId } from '../API/API'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './ProductDetails.css'


function ProductDetails() {
  const handleByNow=()=>{
    window.confirm("This Product is out of stock")

  }


 const {id} =useParams();
 const [productDetails,setProductsDetails] = useState({})


  useEffect(() => {

    const fetchproductsDetails=async()=>{
      const data=await getProductId(id)
      setProductsDetails(data )

    }

  
    fetchproductsDetails()
    

  }, [id])
  

  return (
    <div className='product-details-container'>

        <img src={productDetails.image} alt="no image" className='product-image'/>
        <div className="product-info">
         
         <h2 className='product-title'> 
          {productDetails.title}

         </h2>
         <p className='product-description'>
          {productDetails.description}
            
         </p>
         <p className='product-price'>{productDetails.price}</p>
         <button className='by-now-btn' onClick={handleByNow}>Buy Now</button>
         
         <Link to='/'>

         <button className='back-to-btn'>Back to Home</button>
         </Link>
        </div>


      
    </div>
  )
}

export default ProductDetails





