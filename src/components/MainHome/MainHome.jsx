import react from 'react'
import './MainHome.css'
import bg from '../../assets/bgimg.jpg'
import Home from '../Home/home'
import RoutesLayout from '../../LayoutsRoutes/routes'
import { Link } from 'react-router-dom'



function MainHome(){

    
    const myStyle = {
      backgroundImage: `url(${bg})`,
      height: "100vh",
    
      backgroundSize: "cover",
  };
  
    return(
        
<>
        <section>
            <div className="container">
                <div className="home-container" style={myStyle} >
                    <div className="home-content">
                        <h2 className='section-title'>Big Sale 35% Offer!!</h2>
                       <p>GOOD ONLINE SERVISE</p>

                         <div className="home-btns">
                            <Link to='/'>
                            <button className='register-btn' > Get Start </button>
                            </Link>
                            {/* <button className='register-btn'  onClick={handleClick}> Watch NOw </button> */}
                         </div>
                    </div>
                    {/* <div className="home-img">
                        <div className="home-img-wrapper">
                            <div className="box-01">
                                <div className="box-img"> */}
                                    {/* <img src={meta} alt="" /> */}
                                {/* </div>
                            </div>
                            <div className="whatsapp-container"> */}
                                {/* <h5>500+Students</h5> */}
                                {/* <AiOutlineWhatsApp color="green"/> */}
                            {/* </div>
                            <div className="support">
                                <h5>Active Support</h5>
                            </div> */}



                        {/* </div> */}


                    {/* </div> */}
                </div>

            </div>
        </section>

      
        
{/*         
        <Home/>
        <ProductDetails/>

        */}
        
        </>



    )}

export default MainHome