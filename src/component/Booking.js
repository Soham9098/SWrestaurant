import React from 'react'
import { Container } from 'react-bootstrap'

function Booking() {
  return (
    <div>
      <Container>
        <div className='row'>
          <h1 className='fw-bolder mx-5 my-4 display-5' style={{ fontFamily: "Dancing Script" }}>Book In Table</h1>
          <div className='col-md-6 col-sm-12'>

            <form>
              <input type='text' className='form-control ps-5 py-3' placeholder='Your Name' />
              <input type='number' className='form-control ps-5 py-3 my-4' placeholder='Your Phone' />
              <input type='email' className='form-control ps-5 py-3 my-4' placeholder='Your Email' />
              <select className="form-select py-3 ps-5" aria-label="Default select example">
                {/* <option selected>How many person</option> */}
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <input type='date' className='form-control ps-5 py-3 my-4' />
              <button className='border-0 rounded-pill bg-warning px-5 text-white py-3 my-4' style={{ marginTop: "00px",fontWeight:"400" }}>Book Now</button>
            </form>
          </div>
          <div className='col-md-6 col-sm-12'>
            {/* <iframe className='' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15132.229314992666!2d73.8235080871582!3d18.526311300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1cb5d3578c1%3A0x4f11153704ed576d!2sSevenMentor%20%7C%20CCNA%20%7C%20Linux%20%7C%20Devnet%20%7C%20AWS%20%7C%20Network-Automation%20%7C%20Cloud-Computing%20Training!5e0!3m2!1sen!2sin!4v1711083631030!5m2!1sen!2sin" width="" height="385" loading="lazy"></iframe> */}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Booking