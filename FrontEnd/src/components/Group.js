import React from 'react'
import { MDBCardImage ,MDBRow,MDBCol,MDBCard } from 'mdb-react-ui-kit';


const Group = () => {
  return (
    <div>

<h2 className='mt-4 ms-3' style={{textAlign: 'center', color:'black' }}>
        <strong>In The Spotlight</strong>
      </h2>
<MDBCardImage  className='ms-5'
            // src='https://www.all4pets.in/wp-content/uploads/2021/07/001.png'
            src='https://www.all4pets.in/wp-content/uploads/2021/07/hot.jpeg'
            
            alt='...'
            width='93%'
          />
        


       
<MDBRow className='row-cols-1 row-cols-md-5 g-4  ms-5 me-5'>
      <MDBCol>
        <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
           
            src='https://www.marshallspetzone.com/img/cms/healthcaregridnew.jpg'
          
            alt='...'
            position='top'
           
          />
         
         </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
          <MDBCardImage
           
            src='https://www.marshallspetzone.com/img/cms/catlittersgridnew.jpg'
            alt='...'
            position='top'
          
          />
          
       </MDBCard>
      </MDBCol>



      <MDBCol>
      <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
       <MDBCardImage
       
         src='https://www.marshallspetzone.com/img/cms/safeheartgridnew.jpg'
         alt='...'
         position='top'
       
       />
       
    </MDBCard>
   </MDBCol>



   <MDBCol>
   <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
       <MDBCardImage
        
         src='https://www.marshallspetzone.com/img/cms/dogtoysgridnew.jpg'
         alt='...'
         position='top'
       
       />
       </MDBCard>
    
   </MDBCol>


   <MDBCol>
   <MDBCard className='bg-image rounded hover-zoom hover-overlay'>
       <MDBCardImage
         
         src='https://www.marshallspetzone.com/img/cms/gridsummernametags.jpg'
         alt='...'
         position='top'
       
       />
       
    </MDBCard>
   </MDBCol>
    
    </MDBRow>
   <br/><br/>
    </div>
  )
}

export default Group