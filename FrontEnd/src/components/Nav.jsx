import React, { useContext } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import  { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBInputGroup,
    
    MDBCollapse,
  } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Search from '../Pages/Search';
import { MyContext } from '../Context';




const Nav = () => {

    const [showBasic, setShowBasic] = useState(false);
    const navigate=useNavigate()
    const [searchTerm,setsearchTerm]=useState('')
    const {username,setUsername,Loggedin,setLoggedin}=useContext(MyContext)
    
  
 
   
    const userlogout=()=>{
       setUsername("");        
       setLoggedin(!Loggedin)   
       }


  return (
    <div>
     

  
     
     <MDBNavbar   expand='lg'   style={{ height: '100px'}}>

      <MDBContainer fluid>
       
      <MDBNavbarBrand >
            <img className='ms-4'
              // src='https://cdn.powered-by-nitrosell.com/public_html/12/2853/themes/images/bwlogo_sml.png'
              // src='https://www.maplepets.in/wp-content/uploads/2023/05/maple-logo.png'
              // src='https://dogfather.in/cdn/shop/files/logo_120x.jpg?v=1614322315'
              src='https://www.petsy.online/cdn/shop/files/Petsy_Powered_By_Zigly_2023-08-31_Light_BG_200x80_eeecf7e4-8f86-4f45-8aa3-56005c977f58_200x80.png?v=1693476815'


              height='85'
              width='165'
              alt='...'
              loading='lazy'
              onClick={()=>{
                navigate('/')
              }}
            />
          </MDBNavbarBrand>
        

       <MDBNavbarToggler
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setShowBasic(!showBasic)}
        style={{ position: 'absolute', top: '10px', right: '10px' }}
      >
        <MDBIcon icon='bars' className='text-black' />
      </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 me-5'>
            <MDBNavbarItem>
              <MDBNavbarLink
              onClick={()=>navigate('/')} >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>

      
            <MDBNavbarItem>
              <MDBNavbarLink onClick={()=>navigate('/allproduct')}>All Products</MDBNavbarLink>
            </MDBNavbarItem>

{/*           
          <MDBInputGroup className='mb-1  w-25 mx-auto ' noBorder >
        <input className='form-control ms-3 ' type='search' placeholder='Search....' onChange={(e)=>{
               setsearchTerm(e.target.value)
        }}  />
      </MDBInputGroup> */}



          </MDBNavbarNav>


          {Loggedin != true ?   (      //(here loggedin already as true ,which means it shows login because there is no user there,when it changes to false its shows logpout and cart,because there is user)
            <> 

<img className='me-5' src='https://img.icons8.com/?size=30&id=TdZUZUq3XNh6&format=gif'  width={'30px'} height={'30px'}   onClick={()=>{
              navigate('/cart')}}/>
            {/* <MDBBtn className='me-5 pe-5' color='info' onClick={userlogout}>Logout</MDBBtn>  */}
            <i className="fas fa-sign-out-alt fa-lg me-5" style={{color:"#D10000"}} onClick={userlogout}></i>
            
           
               </>):   (           
               
               <>
               {/* <MDBBtn className='me-5 ' onClick={()=>navigate('/login')}>SignIn</MDBBtn>    */}
               <i className="fas fa-sign-in-alt fa-lg me-5" style={{color: "#167D7F"}}  onClick={()=>navigate('/login')}></i>
               </>
               )}
           


            <span>
            {/* <MDBBtn className='bg-light me-5 text-dark' style={{boxShadow:'none'}}> */}
            <img className='me-5' style={{backgroundColor:'white'}} src='https://img.icons8.com/?size=80&id=rrtYnzKMTlUr&format=png ' width={'40px'} height={'40px'} 
                
          
           />  
            {/* <i class="fas fa-user fa-lg" style={{color: "#123904"}}></i> */}
            <strong>{username}</strong>
           {/* </MDBBtn> */}</span>
              
            
           
          <MDBInputGroup className='mb-1  w-50 me-5 ' noBorder >
        <input className='form-control ms-3 ' type='search' placeholder='Search....' onChange={(e)=>{
               setsearchTerm(e.target.value)
        }}  />
      </MDBInputGroup>
          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    <Search searchTerm={searchTerm}/>
        
    </div>

  )
}

export default Nav