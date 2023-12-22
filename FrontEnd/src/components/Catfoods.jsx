

import React, { useContext } from 'react'
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
import { MyContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

const Catfoods = () => {
  

  const navigate=useNavigate()
    
    const {products}=useContext(MyContext)
    const Catcategory=products.filter((item)=>{
        return  item.type.toLowerCase()==="cat"
    })
       
    

  return (

     
    
    <div>
       
      <div><Nav/></div> 

         <MDBContainer fluid>
      <MDBRow>
        { Catcategory.map((item)=>(

          
        <MDBCol md="12" lg="3" className="mb-4 mb-lg-0 g-5">
             
             
          <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
         
          
            <MDBCardImage
              src={item.src}
              position="top"
              alt="Laptop"
              onClick={()=>{
                navigate(`/viewproduct/${item.id}`)
              }}
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
               
                <p className="small text-danger">
                  <s>{item.price}</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">{item.name}</h5>
                <h5 className="text-dark mb-0">{item.price2}</h5>
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
                navigate(`/viewproduct/${item.id}`)
              }}>Buy now</MDBBtn>
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