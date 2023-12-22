import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
 
    MDBCardImage,
    MDBRow,
    MDBCol,MDBCard
} from 'mdb-react-ui-kit';




function BFcards() {
    const navigate=useNavigate()
  return (
    <div>

<h2 className='mt-2 ' style={{ textAlign: 'center',color:'black' }}>
        <strong>Available soon</strong>
      </h2>
<MDBRow  className='row-cols-1 row-cols-md-2 g-4 mt-4 ms-4 me-4'>
      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
            
            src='https://www.marshallspetzone.com/img/cms/BIRD_1.jpg'
          
            alt='...'
            position='top'
            onClick={()=>{
                navigate('/birdfoods')
              }}
          />
         </MDBCard>
     
      </MDBCol>
      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage 
           
            src='https://cdn.petsworld.network/v1/s/images/8ED23991CA174A97F63C216EC5DD95C0/1920.webp'
            alt='...'
            position='top'
            onClick={()=>{
                navigate('/fishfoods')
              }}
              height='130'
              
          />
          
       </MDBCard>
      </MDBCol>

      </MDBRow>
<br/>
    </div>
  )
}

export default BFcards