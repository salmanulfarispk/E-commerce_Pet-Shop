import React from 'react'


import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {

  MDBCarousel, MDBCarouselItem 
  


  } from 'mdb-react-ui-kit';
 


const Pictures = () => {

  return (
    <div>
        
        

    <MDBCarousel showControls showIndicators dark fade className='my-1 '>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://www.marshallspetzone.com/img/magicslideshow/20072023DROOLS.jpg'
        alt='...'
      >
        
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.marshallspetzone.com/img/magicslideshow/SUPPLEMENTS%20SLIDER%201920800.jpg'
        alt='...'
      >
       
      </MDBCarouselItem>
      

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.marshallspetzone.com/img/magicslideshow/raincoats%20png.png'
        alt='...'
      >
        
      </MDBCarouselItem>
      
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src='https://www.marshallspetzone.com/img/magicslideshow/eSPT%20Marshall%201920x800%20Alaya.png'
        alt='...'
      >
        
      </MDBCarouselItem>
    </MDBCarousel>

    </div>
  )
}

export default Pictures