
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import {  useNavigate } from 'react-router-dom';


const AdminNav = () => {
  const navigate=useNavigate()

  const [showNavColorSecond, setShowNavColorSecond] = useState(false);

  return (
    <div>
        
        
    
        <MDBNavbar expand='lg' dark bgColor='dark' fixed='top'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-light' onClick={()=>{
             navigate('/adminhome')
          }}><strong>ADMIN</strong></MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#' className='ms-5' onClick={()=>navigate('/adminallproducts')}>
                  ALL PRODUCTS
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#' className='ms-5 ' onClick={()=>navigate('/admindog')}>DOG PRODUCTS</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'className='ms-5' onClick={()=>navigate('/admincat')}>CAT PRODUCTS</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#' className='ms-5 'onClick={()=>navigate('/adminaddpro')}>ADD PRODUCTS</MDBNavbarLink>
              </MDBNavbarItem>


              <MDBNavbarItem>
                <MDBNavbarLink href='#' className='ms-5 '  onClick={()=>navigate('/AdminuserList')}>USERS LIST</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBBtn outline rounded className=' ms-auto' color='danger ' onClick={()=>navigate('/login')}>
                      LOGOUT
                 </MDBBtn>
                
             



            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>





    </div>
  )
}

export default AdminNav