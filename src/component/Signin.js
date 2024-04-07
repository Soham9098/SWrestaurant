// import React, { useState } from 'react'

// import { Container } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'

// function Signin() {
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const [error,setError]=useState(false)
//     const navigate=useNavigate()
//     function login(email,e){
//         e.preventDefault()
//         let u={email,password}
        
//         fetch("http://localhost:3000/user").then((resp1)=>{
//             resp1.json().then((resp2)=>{
//                 console.log(resp2)
//                 resp2.find((r)=>{
//                     if(r.email===u.email&& r.password===u.password)
//                     {
//                         alert("Sucessfully Register")

//                         localStorage.setItem("login",JSON.stringify(u))
//                         navigate("/")
                    
//                     }
//                     else{
//                         setError(true)
//                     }
//                 })
//                 if(error===true){
//                     alert("Please Enter Correct Details")
//                 }
//             //    resp2.map((r)=>{
//             //     console.log(r.email)
//             //    })
//             })
//         })
//     }
//     return (
//         <div>
//             <Container>
//                 <div className='row' style={{margin:"200px 0px"}}>
//                     <div className='col-md-6 col-sm-12'>
//                         <h1 className='my-3' style={{fontFamily:"Dancing Script"}}>Sign In</h1>
//                       <form onSubmit={(e)=>login(email,e)}>
                        
//                         <input type="text" className='form-control py-3 my-4' value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder='Enter Email'/>
//                         <input type='password' className='form-control py-3 my-4' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Password'/>
//                         <button className='py-3 px-4 text-white border-0 rounded-pill' style={{backgroundColor:" rgb(80, 242, 20)"}}>Submit</button>
//                       </form>
//                     </div>
//                     <div className='col-md-6 col-sm-12 text-center'>
//                         <img src='./images/f6.png' alt=''/>
//                     </div>
//                 </div>
//             </Container>
            
//         </div>
//     )
// }

// export default Signin