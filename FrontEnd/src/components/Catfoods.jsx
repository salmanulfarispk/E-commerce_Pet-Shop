import {toast} from 'react-hot-toast'
import { Axios } from '../App';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBIcon
    
  } from "mdb-react-ui-kit";

import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import { useEffect, useState } from "react";
import axios from "axios"

const Catfoods = () => {
  

  const navigate=useNavigate()
    
   const [products,setproducts]=useState([])
   const[wishlist,setWishlist]=useState([])
   const categoryname="cat"

   const Isuser=localStorage.getItem("userId")

   const productcat=async()=>{
    try {
      
    const response=await axios.get(`http://localhost:5000/api/users/products/category/${categoryname}`)
   if(response.status===200){
    setproducts(response.data.data) 
   }

    } catch (error) {
      console.log("err",error)
      toast.error(error)
    }
   }
   
      useEffect(()=>{
        productcat();
      },[]) 
    

      
 const AddToWishlist=async(productId)=>{
  try {
    
   await Axios.post(`/api/users/${Isuser}/wishlist`,{productId})
   const response=await Axios.get(`/api/users/${Isuser}/wishlist`)
  if(response.status===201){
      
       toast.success("product added to wishlist")
      setWishlist(response.data.data)
  }

  } catch (error) {
    toast.error("error",error)
    console.log(error)
  }
}


  return (

     
    
    <div>
       
      <div><Nav/></div> 

         <MDBContainer fluid>
      <MDBRow>
        { products.map((item)=>(

          
        <MDBCol  md="12" lg="3" className="mb-4 mb-lg-0 g-5">
             
             
          <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
         
          
            <MDBCardImage
              src={item.image}
              position="top"
              alt="Laptop"
              onClick={()=>{
                navigate(`/viewproduct/${item._id}`)
              }}
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
               
                {/* <p className="small text-danger">
                  <s>{item.price}</s>
                </p> */}
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">{item.title}</h5>
                <h5 className="text-dark mb-0">{item.price}</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  Available: <span class="fw-bold">6</span>
                </p>
                <div class="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                </div>
              </div>
              <MDBBtn className='bg-primary'onClick={()=>{
                navigate(`/viewproduct/${item._id}`)
              }}>Buy now</MDBBtn>

               <MDBIcon style={{marginLeft:85,marginTop:5,fontSize:25,}} far icon="heart"        
                  onClick={() => 
                    Isuser ? AddToWishlist(item._id): toast.error("Please login")
                  } />
            </MDBCardBody>
           
          </MDBCard>
        </MDBCol>

))  }   
        </MDBRow>
    </MDBContainer>
    </div>
  )
}

export default Catfoods