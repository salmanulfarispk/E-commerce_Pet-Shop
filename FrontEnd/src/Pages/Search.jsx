import React, { useContext } from 'react'

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
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context';


const Search = ({searchTerm}) => {

     const navigate=useNavigate()
     const {products}=useContext(MyContext)

  return (
    <div>
      { searchTerm? (                          //true statement

<MDBContainer fluid className="my-1">
      <MDBRow className="justify-content-center">

        { products  &&  products.filter((item)=>{

         if(searchTerm===""){          
          return true;                
         }else if(                         

          item.name.toLowerCase().includes(searchTerm.toLowerCase())   ) {      
   
           return true;              
          }
         
          return false;            
         

        }).map((item)=>(
            
        <MDBCol md="12" lg="3" className='g-5' key={item.id}>
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-overlay"
            >
              <MDBCardImage
                src={item.src}
                fluid
                className="w-100"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <div>
                  <p>
                    <a href="#!" className="text-dark">
                      {item.name}
                    </a>
                  </p>
                 
                </div>
                <div>
                 
                  <p className="small text-muted">Rated 4.0/5</p>
                </div>
              </div>
            </MDBCardBody>
            <hr class="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <p>
                  <a href="#!" className="text-dark">
                    {item.price}
                  </a>
                  
                </p>
                <p className="text-dark">Offer price:{item.price2}</p>
              </div>
             
            </MDBCardBody>
            <hr class="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                 
                <MDBBtn color="primary" onClick={()=>{
                     navigate(`/viewproduct/${item.id}`)
                }}>Buy now</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        )) }
      </MDBRow>
    </MDBContainer>

      ): ( " " )       // false statement (here empty)
                  }

       
    </div>
  )
}

export default Search