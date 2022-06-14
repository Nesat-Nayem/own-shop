import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './NewRegister.css'
const NewRegister = () => {
    return (
       <>
        <Header></Header>
        <div style={{marginTop:'120px'}} className="container">
           <div className='row cardrapper'>
                <div className=' col-md-6 cardOne'>
                        <h4>I'M A USER</h4>
                        <span className='span'></span>
                        <p>Book Any Services And Enjoy It, Happy Journey.</p>
                       <Link to='/singup'>
                       <button className='resisterbtn'>
                        <AiOutlinePlusCircle style={{color:'white', marginRight:'5px'}} />
                             Register User</button>
                       </Link>
                </div>
                <div  className='col-md-6 cardTow'>
                        <h4>I'M AN VENDOR</h4>
                        <p>Provide an a quality service to bost you sells.</p>
                        <Link to='/vendor'>
                        <button className='classTowbtn'>
                        <AiOutlinePlusCircle  style={{ marginRight:'5px'}} />
                            Register Vendor</button>
                            </Link>
                </div>
           </div>
        </div>
        <Footer></Footer>
       </>
    );
};

export default NewRegister;