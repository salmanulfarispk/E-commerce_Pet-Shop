import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    
    MDBCardImage,
   
    MDBRow,
    MDBCol,
  
      // MDBNavbar,
      // MDBContainer,
      // MDBNavbarBrand,
  } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

  

const Cards = () => {
     const navigate=useNavigate()
  return (
    <div>
         
{/*      
          <h2 className='mt-5 ms-3' style={{ textAlign: 'center', color:'black' }}>
        <strong>Recommended products</strong>
      </h2> */}

    
  
   

<MDBRow className='row-cols-1 row-cols-md-2  mt-5 '>
      <MDBCol>
        
          <MDBCardImage
            // src='https://www.marshallspetzone.com/img/cms/diwali-2022/diwali2021dogmenu.jpg'
            src='https://www.petsy.online/cdn/shop/files/Puppy-essentials_646x169.png?v=1683265840'
          
            alt='...'
            position='top'
            onClick={()=> navigate('/Dogsfood')}
          />
         
     
      </MDBCol>
      <MDBCol>
       
          <MDBCardImage
            // src='https://www.marshallspetzone.com/img/cms/diwali-2022/diwali2021catmenu.jpg'
            src='https://www.petsy.online/cdn/shop/files/kitten_646x169.png?v=1683265840'
            alt='...'
            position='top'
            onClick={()=>{
              navigate('/catsfood')
          }}
          />
          
       
      </MDBCol>
    
    </MDBRow>


<br/><br/>



    </div>
  )
}

export default Cards