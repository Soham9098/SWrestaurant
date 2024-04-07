import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import About from './About';
import Footer from './Footer';
import Booking from './Booking';
import Customer from './Customer';

function Home() {
  return (
    <div>

      <Carousel className='bgimage text-white'>

        <Carousel.Item>
          <Container>
            <Row>
              <Col lg={7} className='py-5'>
                <div className='mt-5 mx-5 text-start'>
                  <h1 className='display-5' style={{ fontFamily: "Dancing Script", marginTop: "100px" }}>Fast Food Restaurant</h1>
                  <p className='my-4'> Welcome!!<br></br> SW Restaurant is a bustling fast-food restaurant  in downtown, offering a mouthwatering menu of classic favorites. From juicy burgers to crispy fries and SW Restaurant promises deliciousness served with speed and convenience.</p>
                  <button className='border-0 rounded-pill bg-warning px-5 text-white fw-bold py-3 my-2' style={{ marginTop: "00px" }}>Order Now</button>
                </div>
              </Col>
              <Col>
              </Col>
            </Row>
          </Container>

        </Carousel.Item>
        <Carousel.Item>
        <Container>
          <Row>
            <Col lg={7} className='py-5'>
              <div className='mt-5 mx-5 text-start'>
                <h1 className='display-5' style={{ fontFamily: "Dancing Script", marginTop: "100px" }}>Fast Food Restaurant</h1>
                <p className='my-4'> Welcome!!<br></br> SW Restaurant is a bustling fast-food restaurant  in downtown, offering a mouthwatering menu of classic favorites. From juicy burgers to crispy fries and SW Restaurant promises deliciousness served with speed and convenience.</p>
                <button className='border-0 rounded-pill bg-warning px-5 text-white fw-bold py-3 my-2' style={{ marginTop: "00px" }}>Order Now</button>
              </div>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Row>
            <Col lg={7} className='py-5'>
              <div className='mt-5 mx-5 text-start'>
                <h1 className='display-5' style={{ fontFamily: "Dancing Script", marginTop: "100px" }}>Fast Food Restaurant</h1>
                <p className='my-4'> Welcome!!<br></br> SW Restaurant is a bustling fast-food restaurant  in downtown, offering a mouthwatering menu of classic favorites. From juicy burgers to crispy fries and SW Restaurant promises deliciousness served with speed and convenience.</p>
                <button className='border-0 rounded-pill bg-warning px-5 text-white fw-bold py-3 my-2' style={{ marginTop: "00px" }}>Order Now</button>
              </div>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
    <Container className='mt-5'>
    <div className='row  g-5'>
       <div className=' col-md-6 col-sm-12'>
          <div className='row bg-dark p-3 align-items-center '>
            <div className='col-4'>
              <img className='image1 rounded-circle border border-5 border-warning' src='./images/o1.jpg' alt="" height={180} width={180} />
            </div>
            <div className='col-8 text-white text-center'>
               <h2 className='fw-bold text-white my-3' style={{fontFamily:"Dancing Script"}}>Tasty Thursdays</h2>
               <h4 style={{fontFamily:"Dancing Script"}}><span className='fs-1 mx-2'>20%</span>Off</h4>
               <button className='border-0 rounded-pill bg-warning px-5 text-white fw-bold py-3 my-2' style={{ marginTop: "00px" }}>Order Now</button>
            </div>

          </div>
       </div>
       <div className='col-md-6 col-sm-12'>
       <div className='row bg-dark p-3 align-items-center '>
            <div className='col-4'>
              <img className='image1 rounded-circle border border-5 border-warning' src='./images/o2.jpg' alt="" height={180} width={180} />
            </div>
            <div className='col-8 text-white text-center'>
               <h2 className='fw-bold text-white my-3' style={{fontFamily:"Dancing Script"}}>Pizza Days</h2>
               <h4 style={{fontFamily:"Dancing Script"}}><span className='fs-1 mx-2'>15%</span>Off</h4>
               <button className='border-0 rounded-pill bg-warning px-5 text-white fw-bold py-3 my-2' style={{ marginTop: "00px" }}>Order Now</button>
            </div>

          </div>
       </div>
    </div>
    </Container>
    <About/>
    <Booking/>
    <Customer/>  
    </div >
  )
}

export default Home