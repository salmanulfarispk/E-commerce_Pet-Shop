import React, { useContext } from 'react'
import Nav from './Nav';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
  
    MDBRipple,
  } from "mdb-react-ui-kit";
import { MyContext } from '../Context';

const Birdfoods = () => {
  
    const {products}=useContext(MyContext)

    const birdprdcts=products.filter((item)=>
    item.type.toLowerCase()==="bird")
    

  return (
    <div>
       <Nav/>
      
 









<MDBContainer fluid className="my-2 text-center ms-2 me-2 ">
     

      <MDBRow>
      {birdprdcts.map((item)=>(
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
             ))}
      </MDBRow>
    </MDBContainer>















    </div>
  )
}

export default Birdfoods