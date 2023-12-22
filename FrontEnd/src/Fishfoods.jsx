import React, { useContext } from 'react'
import Nav from './components/Nav';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
  } from "mdb-react-ui-kit";
import { MyContext } from './Context';
  

const Fishfoods = () => {
  
    const {products}=useContext(MyContext)

    const fiteredproducts=products.filter((item)=>{
         return item.type.toLowerCase()==="fish"
    })



  return (
    <div>
      <Nav/>
{/* 
   <MDBContainer fluid className="my-2">
      <MDBRow className="justify-content-center">
   
   {fiteredproducts.map((item)=>


        <MDBCol md="8" lg="6" xl="4">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-overlay"
            />
              <MDBCardImage
                src={item.src}
                fluid
                className="w-100"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
             
             <h5 className="ms-2">
                      {item.name}
                 </h5>
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
               
                <MDBBtn color="danger" className='ms-3 '>Available soon</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        )}
      </MDBRow>
    </MDBContainer> */}





<MDBRow className='my-2 ms-2 me-2'>
{fiteredproducts.map((item)=>
        <MDBCol md="12" lg="3" className="mb-4 g-4">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image rounded hover-zoom shadow-1-strong"
          >
            <img
              src={item.src}
              fluid
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                     Available Soon
                    </span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </MDBRipple>
        </MDBCol>
              )}
      </MDBRow>
    










    </div>
  )
}

export default Fishfoods