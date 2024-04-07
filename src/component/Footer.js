import React from 'react'
import { Container } from 'react-bootstrap'
import { FaLinkedinIn, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


function Footer() {
    return (
        <div>
            <Container className="bg-dark text-white mt-5 p-5">
                <div className='row text-center fw-lighter' style={{fontFamily:"sans-serif"}}>
                    <div className='col-md-3 col-sm-12'>
                        <h1 className='my-4 fw-light' style={{ fontFamily: "Dancing Script" }}>Contact Us</h1>
                        <Link to='/' className='text-white text-decoration-none'><h6 className='my-3'><FaLocationDot className='mx-2' /> location</h6></Link>
                        <Link to='/' className='text-white text-decoration-none'><h6 className='my-3'><IoIosCall className='mx-2' /> Call +91 1234567890</h6></Link>
                        <Link to='/' className='text-white text-decoration-none'><h6 className='my-3'><FaEnvelope className='mx-2' /> swrestaurant@gmail.com</h6></Link>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <h1 className='my-4 fw-light' style={{ fontFamily: "Dancing Script" }}>SW Restaurant</h1>
                        <h6 className='' style={{lineHeight:"30px"}}>SW Restaurant is a bustling fast-food restaurant  in downtown, offering a mouthwatering menu of classic favorites. From juicy burgers to crispy fries and SW Restaurant promises deliciousness served with speed and convenience.</h6>
                        <div className='d-flex justify-content-center'>
                            <span className='bg-white p-1 text-center rounded-circle mx-1' style={{height:"30px",width:"30px"}}><Link to='/'  className='text-white text-decoration-none'><h6 className='text-dark' ><FaInstagram /></h6></Link></span>
                            <span className='bg-white p-1 text-center rounded-circle mx-1' style={{height:"30px",width:"30px"}}><Link to='/'  className='text-white text-decoration-none'><h6 className='text-dark'><FaFacebookF /></h6></Link></span>
                            <span className='bg-white p-1 text-center rounded-circle mx-1' style={{height:"30px",width:"30px"}}><Link to='/'  className='text-white text-decoration-none'><h6 className='text-dark'><FaLinkedinIn /></h6></Link></span>
                            <span className='bg-white p-1 text-center rounded-circle mx-1' style={{height:"30px",width:"30px"}}><Link to='/'  className='text-white text-decoration-none'><h6 className='text-dark'><FaTwitter/></h6></Link></span>
                            <span className='bg-white p-1 text-center rounded-circle mx-1' style={{height:"30px",width:"30px"}}><Link to='/'  className='text-white text-decoration-none'><h6 className='text-dark'><FaPinterest /></h6></Link></span>
                            
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <h1 className='my-4 fw-light'  style={{ fontFamily: "Dancing Script" }}>Opening Hours</h1>
                        <h6  style={{lineHeight:"30px"}}>Everyday</h6>
                        <h6>10AM-10PM</h6>
                    </div>
                </div>
               
            </Container>
            <Container className='bg-dark text-white px-5 text-center'>
                <div className='p-5'>
                    <h6 className='my-3'>2024, All Rights Reserved By SW Restaurant</h6>
                   
                </div>
            </Container>
        </div>
    )
}

export default Footer