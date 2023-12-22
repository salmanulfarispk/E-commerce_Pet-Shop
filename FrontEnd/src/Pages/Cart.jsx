import React, { useContext } from 'react'
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





const Cart = () => {

   const navigate=useNavigate()
   const{cartt,setCart}=useContext(MyContext)
// console.log(cartt);

   const increment=(id)=>{
        
       const updatedCart=cartt.map((item)=>{       // cartt,It contains multiple items that a user has added to their cart while shopping.
            if (item.id===id){
              return {...item,qty: item.qty+1}
            }
            return item;
       })

           setCart(updatedCart)

   }
        const decrement=(id)=>{
          const updatedCart=cartt.map((item)=>{
             if(item.id == id  &&  item.qty> 1){
              return {...item, qty:item.qty -1}
             }
               return item;
          })
          setCart(updatedCart)      // Update the shopping cart with the new data.
        }
       

        const deleteCart=(id)=>{ 
              setCart((i)=>i.filter((item)=> item.id !== id
              ))}
   
  return (
    
      
     <>
      <div><Nav/></div>
        
     <MDBContainer fluid>
     
      <MDBRow className="justify-content-center mb-0">
      
   
        <MDBCol md="12" xl="10">
        <h3 className='mt-5 text-dark'>YOUR CART</h3>
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
          {cartt.map((item)=>(
          
           
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src={item.src}
                      
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
                  <h5>{item.name}</h5>
                  <p className="text-truncate mb-4 mb-md-0">
                      {item.description}
                  </p>
                    <br/>
                  <h6><strong>Quatitiy:</strong></h6>

                  <MDBBtn outline color="primary" size="sm" className="ms-4" onClick={()=>{
                      decrement( item.id)
                  }}>
                      -
                    </MDBBtn><span className='ms-2'><strong>{item.qty}</strong></span>
                    <MDBBtn outline color="primary" size="sm" className="ms-2" onClick={()=>{
                       increment(item.id)
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
                    <h4 className="mb-1 me-1">${item.price2 * item.qty}</h4>
                    <span className="text-danger">
                      <s>{item.price}</s>
                    </span>
                  </div>
                  <h6 className="text-success">free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="sm"  onClick={()=>{
                        navigate('/payment')
                    }}>
                      PAYMENT
                    </MDBBtn>
                   <br/>
                   
                   <MDBBtn outline color="danger" size="sm"  onClick={()=>{
                      deleteCart(item.id)
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