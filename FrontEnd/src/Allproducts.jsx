import React, { useContext } from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBRow,
    MDBCol,
      MDBContainer,
      MDBIcon
    
  } from 'mdb-react-ui-kit';
import { MyContext } from './Context';
import Nav from './components/Nav';
import { useNavigate } from 'react-router-dom';

const Allproducts = () => {
    const{products}=useContext(MyContext)
  
    const navigate=useNavigate()

  return (
    <div>
 <div>
    <Nav/>
   
   </div> 
    
   
   

<MDBContainer fluid className="g-5">
      <MDBRow>
            { products.map((item)=>(
        <MDBCol  md="12" lg="3" className="mb-4 mb-lg-0 g-5 ">
          <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
         
           
            
            <MDBCardImage
              src={item.src}
              position="top"
              alt="photos"
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
                <h5 className="mb-0">
                      {item.name}
                 </h5>
                <h5 className="text-dark mb-0">{item.price2}</h5>
                
              </div>
            </MDBCardBody>
            

          </MDBCard>
          </MDBCol>
            ))}
          </MDBRow>
         </MDBContainer>









    </div>
  )
}

export default Allproducts