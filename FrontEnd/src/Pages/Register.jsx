import React, { useContext } from 'react'
import { MDBInput,MDBBtn,MDBContainer,MDBCol,MDBRow,MDBCard,MDBCardBody } from 'mdb-react-ui-kit';
import { MyContext } from '../Context';
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate=useNavigate()
  const {user,setUser}=useContext(MyContext)


    const signup=(event)=>{

        event.preventDefault();

    
      const username=event.target.typeUsername.value;
      const email=event.target.typeEmail.value;
      const password=event.target.typePassword.value;
    // console.log(username);
    // console.log(email);
    // console.log(password);

      const emailvalidation=user.filter((item)=>{
           return item.email === email
                                                
      })
      if(emailvalidation.length !== 0  ){      
          alert("Email already Exists")
      }else{
          setUser([
            ...user,{                      

          name:username,
          email:email,
          password:password,
            
            },
            

          ] )
    
      } 

      
      event.target.reset();


    }

  




  return (
   <> 
   
   <Nav/>
   
  
    <div style={{backgroundImage:'url(https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
      
        
<MDBContainer>

<MDBRow className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              {/* <Form> */}
              
              <p className="h4 text-center mb-4">Register</p>

     <form onSubmit={signup}>
     <MDBInput label=' Username' id='typeUsername' type='text' required /><br/>
   
     <MDBInput label=' Email' id='typeEmail' type='email' required/><br/>

        <MDBInput label='Password ' id='typePassword' type='password' required /><br/>

         
          <MDBBtn className='w-100' >Sign Up</MDBBtn><br/><br/>
          {/* <p  onClick={()=>{
             
          }} >login</p>  */}


            
              <MDBBtn outline color="success" size="sm"  onClick={()=>{
                      navigate('/login')
                   }}>
                     Login
                    </MDBBtn>




          </form>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>





    </div>
    </>
  )
}

export default  Register 