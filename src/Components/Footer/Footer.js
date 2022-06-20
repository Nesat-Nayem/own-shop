import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'
const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col col-md-3 col-12">
                        <h4>Categories</h4>
                        <ul>
                            <li>Conputer</li>
                            <li>Interior</li>
                            <li>Car Wash</li>
                            <li>Cleaning</li>
                        </ul>
                    </div>
                    <div class="footer-col col-md-3 col-12">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                           

                        </ul>
                    </div>
                    <div class="footer-col col-md-3 col-12">
                        <h4>Contract Us</h4>
                        <ul>
                            <li > <span style={{color:'#ff0080', marginRight:'10px'}}><i class="far fa-building"></i></span> 367 Hillcrest, California, USA</li>
                            <li> <span style={{color:'#ff0080', marginRight:'10px'}}><i class="fas fa-headphones"></i></span> 321 546 8764</li>
                            <li> <span style={{color:'#ff0080', marginRight:'10px'}}><i class="fas fa-envelope"></i></span> ownsell@sell.com</li>
                          
                        </ul>
                    </div>
                    <div class="footer-col col-md-3 col-12">
                        <h4 id='fowllowus'>follow us</h4>
                        <div class="social-links">
                            <span>  <i class="fab fa-facebook-f"></i></span>
                            <span> <i class="fab fa-twitter"></i></span>
                            <span> <i class="fab fa-instagram"></i></span>
                            <span> <i class="fab fa-google"></i></span>
                      
                          
                          
                          
                        </div>
                    </div>
                </div>
                <div className='container mt-4'>
                    <div className=' row d-flex justify-content-between'>
                    <div className='col-sm-12 col-md-4'>
                        <p className='coppyarea'> &copy; 2022 OwnSell</p>
                    </div>

                    <div className=' d-flex col-sm-12 col-md-4 '>
                        <p className='coppyarea '>Praivacy</p>
                        <span className='text-end' style={{margin:'0px 10px', color:'white'}} > | </span>
                        <p className='coppyarea'>Trams & Conditions</p>
                    </div>
                    <div style={{cursor:'pointer'}} className='col-sm-12 col-md-4 text-end'>
                     <Link to='/register' style={{textDecoration:'none'}}>   <a style={{textDecoration:'none'}} className='coppyarea partertext'> Partner Register</a></Link>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;