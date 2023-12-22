
import AdminNav from './AdminNav'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage
} from 'mdb-react-ui-kit';

const Adminhome = () => {
  return (
    <div>
       <AdminNav/>

       <MDBCard background='dark' className='text-white'>
      <MDBCardImage overlay src='https://images.pexels.com/photos/374857/pexels-photo-374857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='...' />
      <MDBCardOverlay>
        {/* <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </MDBCardText>
        <MDBCardText>Last updated 3 mins ago</MDBCardText> */}
      </MDBCardOverlay>
    </MDBCard>


    







    </div>
  )
}

export default Adminhome