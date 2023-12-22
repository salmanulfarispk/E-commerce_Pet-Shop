import React from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';

  

const Ads = () => {
  
  return (
   <>
  <br/>
<h2 className='mt-2' style={{ textAlign: 'center',color:'black' }}>
        <strong>Exclusive Brands</strong>
      </h2>
    <MDBRow className='row-cols-1 row-cols-md-4 g-3 mt-4 ms-5 me-5'>
      <MDBCol>
      <MDBCard >
          <MDBCardImage
            // src='https://cdn.petsworld.network/v1/s/images/50267F3EED76467FE20A3A5B9846AE98/1920.webp'
            src='https://www.marshallspetzone.com/img/cms/Marshall-450x596%20MAIN.jpg'
            alt='...'
            position='top'
            height='550px'
          />
       
        </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard >
          <MDBCardImage
            // src='https://www.all4pets.in/wp-content/uploads/2021/08/pet-accessories.jpg'
            src='https://www.marshallspetzone.com/img/cms/20072023%20drools%20grid.jpg'
            alt='...'
            position='top'
            height='550px'

          />
       
        </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard>
          <MDBCardImage
            // src= 'https://cdn.petsworld.network/v1/s/images/96334863977D7FEAEB5FA0D1766299E5/1920.webp'
            src= 'https://www.marshallspetzone.com/img/cms/gridsummerdogwetfood.jpg'

            alt='...'
            position='top'
            height='550px'

          />
         
        </MDBCard>
      </MDBCol>
        <MDBCol>
       <MDBCard >
          <MDBCardImage
            src='https://www.marshallspetzone.com/img/cms/DROOLS%20GRID%2014112022.jpg'
            alt='...'
            position='top'
            height='550px'

          />
        
        </MDBCard>
      </MDBCol> 
    </MDBRow>
    <br/>
    

</>





  )
}

export default Ads


