import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Catoptions from "./Catoptions";
// import { FaShoppingCart } from "react-icons/fa";
import Cartbutton from './Cartbutton';
function Menu() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    displayprods();
  }, []);
  function displayprods() {
    fetch("http://localhost:3000/product").then((resp1) => {
      resp1.json().then((resp2) => {
        console.log(resp2);
        setFood(resp2);
      });
    });
  }

  function filtercategory(categ) {
    const newfood = food.filter((c1) => c1.category === categ);
    setFood(newfood);
  }
  function addtocart(cartitem) {
    console.log(cartitem);
    fetch("http://localhost:3000/cart", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartitem),
    }).then((resp1) =>
      resp1.json().then((resp2) => {
        console.log(resp2);
      })
    );
  }
  function sortfood(e){
    if(e.target.value==="LowToHigh"){
      setFood([...food.sort((a,b)=>{return a.price-b.price})])
    }
    if(e.target.value==="HighToLow"){
      setFood([...food.sort((a,b)=>{return b.price-a.price})])
    }
  }

  return (
    <div className="container-fluid">
      <h1
        className="text-center mt-4"
        style={{ fontFamily: "brush script mt" }}
      >
        Our Menu
      </h1>
      <div className="row text-center">
        <div className="col-3 bg-dark text-white fs-5">
          <h4 className="mt-5 mb-4 ">Get Products By Price</h4>
          <Form.Select aria-label="Default select example" 
          onChange={(e)=>sortfood(e)}>
            <option>Select Price Option</option>
            <option value="LowToHigh">Ascending</option>
            <option value="HighToLow">Descending</option>
            
          </Form.Select>
          <h4 className="mt-5 mb-4">Get Products By Category</h4>
          <Catoptions food={food} filtercategory={filtercategory}
          displayprods={displayprods}/>


        </div>
        <div className="col-9">
          <Cartbutton food={food} filtercategory={filtercategory} displayprods={displayprods}/>
          <div className="row g-4">
            <div className="col-md-12">
              <div className="row g-4">
                {food.map((fd, i) => {
                  return (
                    <div className="col-md-4" key={i}>
                      <Card style={{}} className=" border-0 bg-dark text-white">
                        <div className="bg-light rounded ">
                          <Card.Img
                            variant="top"
                            src={fd.image}
                            className="img-fluid mx-auto w-75 p-3"
                            style={{ height: "200px" }}
                          />
                        </div>

                        <Card.Body>
                          <Card.Title>{fd.name}</Card.Title>
                          <Card.Text>
                          Iconic comfort food with cheese, crispy crust, and endless topping possibilities.
                          </Card.Text>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="fs-3">{fd.price}</p>
                            <Button variant="warning" className="" onClick={()=>addtocart(fd)}>
                              Cart
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
// import React, { useEffect, useState } from 'react'
// import { Button, Card } from 'react-bootstrap'
// import { IoCart } from "react-icons/io5";

// function Menu() {
//     // const [food, setFood] = useState([])
//     // useEffect(() => {
//     //    displayprods()
//     // },[])
//     // function displayprods(){
//     //     fetch('http:localhost:3000/product').then((resp1) => {
//     //         resp1.json().then((resp2) => {
//     //             console.log(resp2)
//     //             setFood(resp2)
//     //         })
//     //     })
//     // }
//     // // function filtercategory(categ){
//     // //     const newfood=food.filter((c1)=>c1.category===categ)
//     // //     setFood(newfood)
//     // // }
//     // console.log(food)
//     // const cat = [...new Set(food.map((f) => f.category))]
//     // console.log(cat)
//     return (
//         <div>

//             <h1 className='my-3 text-center my-5' style={{ fontFamily: "Dancing Script" }}>Our Menu</h1>

//             <div className='row g-5'>
//                 <div className='col-md-3 col-sm-12 bg-dark'>

//                 </div>
//                 <div className='col-md-9 col-sm-12 text-center'>
//                     <div className='row'>
//                         <button className='bg-dark text-white rounded-pill py-2 mx-2' style={{ width: "120px" }} >All</button>
//                         {
//                             cat.map((c, j) => {
//                                 return (
//                                     <button className='bg-dark text-white rounded-pill py-2 mx-2' style={{ width: "120px" }} >{c}</button>
//                                 )
//                             })
//                         }
//                     </div>
//                     <div className='row g-4'>
//                         <div className='col-md-12'>
//                             <div className='row g-4'>
//                             {
//                                 food.map((fd, i) => {
//                                     return (
//                                          <div className='col-md-4' key={i}>
//                                             <Card style={{ }} className=' border-0 bg-dark text-white'>
//                                              <div className='bg-light rounded ' >
//                                                  <Card.Img variant="top" src={fd.image} className='img-fluid mx-auto w-75 p-3' style={{height:"250px"}}/>
//                                              </div>

//                                              <Card.Body>
//                                                  <Card.Title>{fd.name}</Card.Title>
//                                                  <Card.Text>
//                                                      Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
//                                                  </Card.Text>
//                                                  <div className='d-flex justify-content-between align-items-center'>
//                                                      <p className='fs-3'>{fd.price}</p>
//                                                      <Button variant="warning" className=''><IoCart className='fs-3 text-white'/></Button>
//                                                  </div>

//                                              </Card.Body>
//                                          </Card>
//                                          </div>

//                                     )
//                                 })
//                             }
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Menu
