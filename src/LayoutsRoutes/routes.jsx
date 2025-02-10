import React from 'react'
import { BrowserRouter as Router,Route,Routes,Outlet } from 'react-router-dom'
import Footer from "../components/Footer/footer";
import Header from '../components/Header/'
import Home from '../components/Home/home'
import ProductDetails from '../ProductDetails/ProductDetails';

function RoutesLayout() {
 
  const Layout=()=>{
    return(
<>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  
    )

  }
  return (
    <>
    <Router>
      
    {/* <Header/> */}

    <Routes>


      {/* <Route path='' element={<Home/>}/> */}
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='Shoping-web'element={<Home/>}/>


      <Route path='/product/:id' element={<ProductDetails/>}/>
      </Route>
      

    </Routes> 
    {/* <Footer/> */}

    </Router>
    </>
    
  
  )
}

export default RoutesLayout
