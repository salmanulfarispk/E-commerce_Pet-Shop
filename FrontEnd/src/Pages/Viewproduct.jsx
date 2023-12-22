import React, { useContext } from 'react'
import { Form } from 'react-bootstrap';
import Nav from '../components/Nav';
import {MDBContainer,MDBCard,MDBBtn,MDBCol,MDBCardImage,MDBRipple,MDBRow,MDBCardBody, } from 'mdb-react-ui-kit';
import Footer from '../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../Context';



const Viewproduct = () => {
  const navigate=useNavigate()
 
  const {products,cartt,setCart,Loggedin}=useContext(MyContext)

  const {id}=useParams()

  const maincard=products.filter((item)=>{         
    return item.id==id
  })                                                    

  //  console.log(maincard)

   const prdId=()=>{
    if (Loggedin == false){
        if(cartt.includes(maincard[0])){                     
          alert("The product is already added to cart")          
        }else{                                             
         setCart(()=>([...cartt,...maincard]))                           
          // alert("product succesfully added to your cart")   
        }
      }else {
            alert("Must login ")
            navigate('/login')
        }
   
      
   };
    

  return (
    <div>
    

   <Nav/>
      
     
     <MDBContainer fluid >
      <MDBRow className="justify-content-center mb-0">
      { maincard.map((item)=>(

        <MDBCol md="12" xl="11">
       
          <MDBCard className="shadow-0 border rounded-3 mt-4 mb-3">
            <MDBCardBody >
              <MDBRow>

                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay w-500"
                  >
                    <MDBCardImage 
                      src={item.src}
                      fluid
                      className="w-100 "
                    />
                    {/* <a href="#!"> */}
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    {/* </a> */}
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5><strong>{item.name}</strong></h5>
                   <p>{item.description}</p>
                  <br/>
                 
                   

                  <div className="mt-1 mb-0 text-dark small">
                   
                    <h4>Price:</h4> <h4 className="mb-1 me-1">{item.price2}</h4>
                    <br/>


                    <h6><strong>Quantity:
                    {/* <div className="form-outline me-1" style={{ width: '100px' }}> */}
                        <Form.Control type="number" defaultValue="1" className='w-25' />
                      {/* </div> */}
                      
                       </strong>
                    </h6>
                    
                    <MDBBtn color="primary" size="sm" className="mt-2 w-50" 
                      onClick={prdId} >
                      Add to Cart
                    </MDBBtn>
                   
                  

      
                  

                  </div>
                 
                  



                  
                  
                  {/* </div> */}
                 
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn outline color="primary" size="sm" className=" w-50"   onClick={prdId} >
                       BUY NOW
                    </MDBBtn>
                    
                  </div>

                  <h5 className='mt-5' style={{color:'blue'}} >→Back to shop</h5>
                </MDBCol>
             
              </MDBRow>
            </MDBCardBody>
          </MDBCard>

          

            </MDBCol>
        
        ))}
      </MDBRow>
      </MDBContainer>




      <h2 className='mt-5 ms-5' style={{  color:'black' }}>
        <strong>Related products</strong>
      </h2>
      <MDBRow className='row-cols-1 row-cols-md-5 g-3  ms-2 me-2 mt-3 mb-3'>
        
      
      <MDBCol>
        
          <MDBCardImage
           
            src='https://www.marshallspetzone.com/26990-home_default/pedigree-mother-pup-starter-.jpg'
          
            alt='...'
            position='top'
           
          />
         
     
      </MDBCol>
      <MDBCol>
       
          <MDBCardImage
           
            src='https://www.marshallspetzone.com/12579-home_default/sierra-mountain-canine-recipe-with-roasted-lamb-13kg.jpg'
            alt='...'
            position='top'
          
          />
          
       
      </MDBCol>



      <MDBCol>
       
       <MDBCardImage
       
         src='https://www.marshallspetzone.com/25916-home_default/purina-supercoat-pro-plan-puppy-medium-large-12-kg.jpg'
         alt='...'
         position='top'
       
       />
       
    
   </MDBCol>



   <MDBCol>
       
       <MDBCardImage
        
         src='https://www.marshallspetzone.com/21324-home_default/himalaya-healthy-meat-rice-adult-food.jpg'
         alt='...'
         position='top'
       
       />
       
    
   </MDBCol>


   <MDBCol>
       
       <MDBCardImage
         
         src='https://www.marshallspetzone.com/24785-home_default/himalaya-healthy-puppy-food-chicken-rice-.jpg'
         alt='...'
         position='top'
       
       />
       
    
   </MDBCol>
    
    </MDBRow>




      <Footer/>
    </div>
  )
}

export default Viewproduct