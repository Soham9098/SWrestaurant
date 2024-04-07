import React, { useRef } from 'react'
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function Customer() {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"

    };
    return (
        <div>
            <Container>
                <h1 className="my-5" style={{ fontFamily: "Dancing Script" }}>What's Says Our Family</h1>
                <div className="slider-container">
                    <Slider ref={slider => { sliderRef = slider; }}
                     {...settings}>
                        <div className=''>
                            <div className='bg-dark text-white p-4 me-5'>
                                <p>To start with the taste, it is awesome. Quantity is really great as per the price.
Quality of food is also good. Prices are very reasonable and affordable. This place is very famous among students. Overall had a nice experience!</p>
                                <h4>Riya Sharma</h4>
                                
                            </div>
                            <div>
                                <img src='./images/client1.jpg' alt='' className='my-5 img-fluid h-25 w-25 rounded-circle border border-warning border-4'></img>
                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-dark text-white p-4 me-5 border '>
                                <p className=''>The quality of food is good at the price they are providing. We tried the Cheese Peri Peri Fries, Cheese Garlic Toast and Cheese Corn Jalapeno Pizza</p>
                                <h4>Rohan Jadhav</h4>
                                
                            </div>
                            <div>
                                <img src='./images/client2.jpg' alt=""
                                 className='my-5 img-fluid h-25 w-25 rounded-circle border border-warning border-4'></img>
                            </div>
                        </div>

                    </Slider>
                    <GrPrevious className='fs-2 text-danger text-center' onClick={previous}/>
                    <GrNext className='fs-2' onClick={next}/>

                </div>

            </Container>
        </div>
    )
}

export default Customer