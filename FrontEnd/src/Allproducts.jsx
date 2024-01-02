import React, { useContext, useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBRow,
    MDBCol,
      MDBContainer,
      MDBIcon
    
  } from 'mdb-react-ui-kit';

import Nav from './components/Nav';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const Allproducts = () => {
  const [products, setProducts] = useState([]);
  // console.log(products)
    const navigate=useNavigate()


  const Isuser=localStorage.getItem("userId")


    const fetchingproducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/products")
          //  console.log(response)
        if (response.status === 200) {
          setProducts(response.data.data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        toast.error(error.message || "An error occurred while fetching data");
        console.error(error);
      }
    };
    
    useEffect(() => {
      fetchingproducts();
    }, []);
    
    
 const handleviewproduct=(prodId)=>{
  if(Isuser){
    navigate(`/viewproduct/${prodId}`)
  }else{
    toast.error("please log in")
  }
 }
    



  return (
    <div>
 <div>
    <Nav/>
   
   </div> 
    

<MDBContainer fluid className="g-5">
      <MDBRow>
      {Array.isArray(products) && products.length > 0 ? (
        products && products.map((item)=>(
        <MDBCol  md="12" lg="3" className="mb-4 mb-lg-0 g-5 ">
          <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
         
           
            
            <MDBCardImage
              src={item.image}
              position="top"
              alt="photos"
              onClick={()=>{
                handleviewproduct(item._id)
           }}
              />
          
            <MDBCardBody>
              <div className="d-flex justify-content-between">
            
                <p className="small text-danger">
                  <s>{item.price}</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">
                      {item.title}
                 </h5>
                {/* <h5 className="text-dark mb-0">{item.price2}</h5> */}
                
              </div>
            </MDBCardBody>
            

          </MDBCard>
          </MDBCol>
            ))
      ):(
        <p>No products available</p>
      )}
          </MDBRow>
         </MDBContainer>









    </div>
  )
}

export default Allproducts