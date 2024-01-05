import React, { useContext, useEffect, useState } from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import {  useNavigate } from 'react-router-dom';
import { MyContext } from '../Context';
import Nav from '../components/Nav';
import { Axios } from '../App';
import toast from 'react-hot-toast';





const Cart = () => {

   const navigate=useNavigate()
   const[cartt,setCartproduct]=useState([])
   
console.log(cartt);

 const userid=localStorage.getItem("userId")


const fetchCartProduct=async()=>{
  try {
    
   const response=await Axios.get(`/api/users/${userid}/cart`)
   if(response.status ===200){
    setCartproduct(response.data.data)
   }

  } catch (error) {
    console.log(error)
    toast.error(error.response.data.message)      
  }
}

useEffect(()=>{
  fetchCartProduct();
},[])


const handlequantity=async(id,quantityChange)=>{
    const data={id,quantityChange}
    try {
      await Axios.put(`/api/users/${userid}/cart`,data)
      const response=await Axios.get(`/api/users/${userid}/cart`)
      if(response.status === 200){
        return fetchCartProduct()
      }

    } catch (error) {
      toast.error(error)
    }
}

const handleDelete=async(prodId)=>{
 try {
  
   const response=await Axios.delete(`/api/users/${userid}/cart/${prodId}`)
   if(response.status === 200){
    toast.success(response.data.message)
     return fetchCartProduct();
   }
 } catch (error) {
  console.error(error.message);
  toast.error(error.message)
 }

}


const paymentcheckout=async()=>{
  try {
    
   const response=await Axios.post(`/api/users/${userid}/payment`)
   if(response.status===200){
    const url=response.data.url
    const conformation=window.confirm("Payment session created. Redirecting to the payment gateway. Continue?")
    if(conformation)window.location.replace(url)
   }

  } catch (error) {
    toast.error(error.response.data.message)
  }
}


   
  return (
    
      
     <>
      <div><Nav/></div>
        
     <MDBContainer fluid>
     
      <MDBRow className="justify-content-center mb-0">
      
   
        <MDBCol md="12" xl="10">
        <h3 className='mt-5 text-dark'>YOUR CART</h3>
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
          {Array.isArray(cartt) && cartt.map((item,index)=>(
          
           
            <MDBCardBody key={item.productsId._id || index } >
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src={item.productsId.image}
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>{item.productsId.title}</h5>
                  <p className="text-truncate mb-4 mb-md-0">
                      {item.productsId.description}
                  </p>
                    <br/>
                  <h6><strong>Quatitiy:</strong></h6>

                  <MDBBtn outline color="primary" size="sm" className="ms-4" onClick={()=>{
                      handlequantity(item._id,-1)
                  }}>
                      -
                    </MDBBtn><span className='ms-2'><strong>{item.quantity}</strong></span>
                    <MDBBtn outline color="primary" size="sm" className="ms-2" onClick={()=>{
                        handlequantity(item._id,1)
                    }}>
                      +
                    </MDBBtn>

                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">${item.productsId.price * item.quantity}</h4>
                    <span className="text-danger">
                      {/* <s>{item.price}</s> */}
                    </span>
                  </div>
                  <h6 className="text-success">free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="sm"  onClick={()=> paymentcheckout()}>
                      PAYMENT
                    </MDBBtn>
                   <br/>
                   
                   <MDBBtn outline color="danger" size="sm"  onClick={()=>{
                      handleDelete(item.productsId._id)
                   }}>
                      Delete Cart
                    </MDBBtn>


                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
             
          ))}
          </MDBCard>
        </MDBCol>
      
      </MDBRow>
      </MDBContainer> 

 






</>
    
  )
}

export default Cart