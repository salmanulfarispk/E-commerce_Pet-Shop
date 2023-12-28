
import { MDBInput,MDBBtn,MDBContainer,MDBCol,MDBRow,MDBCard,MDBCardBody } from 'mdb-react-ui-kit';

import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import axios from 'axios';

const Register = () => {

    const navigate=useNavigate()
  

    const signup= async(event)=>{

        event.preventDefault();

      const name=event.target.typename.value.trim();
      const username=event.target.typeUsername.value.trim();
      const email=event.target.typeEmail.value.trim();
      const password=event.target.typePassword.value.trim();
    // console.log(username);
    // // console.log(email);
    // // console.log(password);

   if(name==="" || username==="" || email==="" || password==="" ){
     toast("please fill all input fields")
   }
   try{
    const payload={name,username,email,password}
    // console.log(payload);

const response=await axios.post('http://localhost:5000/api/users/register',payload)
// console.log(response);
   if(response.status===201){
    toast.success("Registration succesfull")
    navigate("/login")
   }
   }
   catch(error){
    console.log("Register failed",error);
   }



  }

  return (
   <> 
   
   <Nav/>
   
  
    <div>
      
        
<MDBContainer>

<MDBRow className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <MDBCol md="6">
          {/* <MDBCard> */}
            {/* <MDBCardBody> */}
              {/* <Form> */}
              
              <p className="h4 text-center mb-4">Register</p>

     <form onSubmit={signup}>
     <MDBInput label=' Name' id='typename' type='text' required /><br/>
     <MDBInput label=' Username' id='typeUsername' type='text' required /><br/>
   
     <MDBInput label=' Email' id='typeEmail' type='email' required/><br/>

        <MDBInput label='Password ' id='typePassword' type='password' required /><br/>

         
          <MDBBtn className='w-100' >Sign Up</MDBBtn><br/><br/>
          {/* <p  onClick={()=>{
             
          }} >login</p>  */}






          </form>
          {/* </MDBCardBody> */}
          {/* </MDBCard> */}
        </MDBCol>
      </MDBRow>
    </MDBContainer>





    </div>
    </>
  )
}

export default  Register 