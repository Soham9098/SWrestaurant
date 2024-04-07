import React from 'react'

function About() {
  return (
    <div>
      
      <div className='row bg-dark p-5 text-white g-5 align-items-center mt-5'>
         <div className='col-md-6 col-sm-12'>
            <img src='./images/about-img.png' className='h-75 w-75' alt=''/>
         </div>
         <div className='col-md-6 col-sm-12'>
            <h1 className='my-4'  style={{ fontFamily: "Dancing Script",fontWeight:"900" }}>We Are SW Restaurant</h1>
            <h6 className='w-75'   style={{lineHeight:"25px",fontWeight:"400"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</h6>
            <button className='border-0 rounded-pill bg-warning px-5 text-white py-2 my-4' style={{ marginTop: "00px",fontWeight:"400" }}>Read More..</button>
         </div>
      </div>
    </div>
  )
}

export default About