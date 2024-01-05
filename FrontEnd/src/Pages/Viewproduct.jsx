import React, { useContext, useEffect } from 'react'

import Nav from '../components/Nav';
import {MDBContainer,MDBCard,MDBBtn,MDBCol,MDBCardImage,MDBRipple,MDBRow,MDBCardBody, } from 'mdb-react-ui-kit';
import Footer from '../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../Context';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Axios } from '../App';



const Viewproduct = () => {
  const navigate=useNavigate()
 
  const {products,setProducts}=useContext(MyContext)

  const {id}=useParams()


  const userid=localStorage.getItem("userId")
    
//  console.log( userid)

 const fetchbyId=async()=>{
  try {
    
  const response=await axios.get(`http://localhost:5000/api/users/products/${id}`)
  
  if(response.status===200){
    setProducts(response.data.data  || [])
  }
  
} catch (error) {
  console.log("Error in fetching products");
  toast.error("invalid product",error)
}
}
useEffect(()=>{
  fetchbyId();
},[])



const handleAddcart=async(id)=>{
  try {
    
    // console.log(localStorage.getItem("jwt"));
    const response = await Axios.post(`/api/users/${userid}/cart`,{ productId: id });
    // console.log(response)
    
    if(response.status === 200){
        await Axios.get(`/api/users/${userid}/cart `)
         toast.success("product added to the cart!")
    }

    if(response.status === 400){
       toast.error("Product already included to cart!!")
    }
  

  } catch (error) {
    console.log(error)
    toast.error(error.response.data.message)
  }
 }



  return (
    <div>
   <Nav/>
     <MDBContainer fluid >
      <MDBRow className="justify-content-center mb-0">
      

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
                      src={products.image}
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
                  <h5><strong>{products.title}</strong></h5>
                   <p>{products.description}</p>
                  <br/>
                 
                   

                  <div className="mt-1 mb-0 text-dark small">
                   
                    <h4>Price:</h4> <h4 className="mb-1 me-1">{products.price}</h4>
                    <br/>


                  
                    
                    <MDBBtn color="primary" size="sm" className="mt-2 w-50" id={products._id} onClick={()=>{
                      handleAddcart(products._id)
                    }}>
                      Add to Cart
                    </MDBBtn>
                   
            

                  </div>
                 
                  

                  {/* </div> */}
                 
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn outline color="primary" size="sm" className=" w-50" id={products._id} onClick={()=>{
                      handleAddcart(products._id)
                    }}>
                       BUY NOW
                    </MDBBtn>
                    
                  </div>

                  <h5 className='mt-5' style={{color:'blue'}} >-→Back to shop</h5>


                </MDBCol>
             
              </MDBRow>
            </MDBCardBody>
          </MDBCard>

          

            </MDBCol>
        
        
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