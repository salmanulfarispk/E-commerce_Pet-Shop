
import { MDBInput,MDBBtn,MDBContainer,MDBCol,MDBRow,MDBCard,MDBCardBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Nav from '../components/Nav';
import {  Axios } from '../App';
import { GoogleButton } from "react-google-button"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../FirebaseApi/Firebase';
import axios from 'axios';



const Login = () => {



  const navigate=useNavigate()
  const login = async (event) => {
    event.preventDefault();
  
    const email = event.target.typeEmail.value.trim();
    const password = event.target.typePassword.value;
    
  
    const AdminEmail = process.env.REACT_APP_ADMIN_EMAIL;
    // console.log(AdminEmail);
  
    if (email === "" || password === "") {
      toast.error("Input field is empty");
      return;
    }
  
    let url = "http://localhost:5000/api/users/login";
  
    if (email === AdminEmail) {
       url = "http://localhost:5000/api/admin/login";
    }
  
    try {
      const payload = { email: email, password: password };
  
      const response = await Axios.post(url, payload);
      // console.log(response);
  
      if (response.status ===200) {
         if (email === AdminEmail) {
          localStorage.setItem("role", "admin");
          localStorage.setItem("Admin jwt", response.data.token);

          navigate("/adminhome");
          toast.success("Admin login successfully!");

         } else {
          localStorage.setItem("userId", response.data.data.id);
          localStorage.setItem("jwt", response.data.data.token);
          localStorage.setItem("UserEmail", response.data.data.email);
          localStorage.setItem("UserName", response.data.data.username);
  
          setTimeout(() => {
            localStorage.removeItem("Admin jwt");
            localStorage.removeItem("userId");
            localStorage.removeItem("jwt");
            localStorage.removeItem("UserEmail");
            localStorage.removeItem("UserName");
          }, 3600000);
  
          navigate("/");
          toast.success("Login successfully");
        }
      } else {
        
        toast.error("Login Failed:",response.error);
      }
    } catch (error) {
      console.log("Error:",error);
      toast.error("Invalid email or password");
    }
  };
  
 const GoogleLogin=async()=>{
  try {
      
    const data=await signInWithPopup(auth,provider)
    const credentials=GoogleAuthProvider.credentialFromResult(data)
    const user=data.user
    // console.log(credentials);
    // console.log(data);

    try {
      
    const response=await axios.post("http://localhost:5000/api/users/googleAuth",user)
    if(response.status=== 201 || 203){
      toast.success("login successfull")
      localStorage.setItem("jwt",response.data.data)
      localStorage.setItem("UserEmail",response.data.email)
      localStorage.setItem("UserName",response.data.username)
      localStorage.setItem("userId",response.data.id)
       navigate("/")
    }

    } catch (error) {
      toast.error(error)
    }


  } catch (error) {
   alert(error) 
  }
 }



  return (
    <>
    <Nav/>
    <div className='bg-light'>
      

<MDBContainer className="my-3 gradient-form">

<MDBRow>

  <MDBCol col='6' className="mb-5">
    <div className="d-flex flex-column ms-3">

      <div className="text-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ189gsw2b-CmlJQyPlGjvUH8YcUddDEumy5Q&usqp=CAU"
          style={{width: '275px'}} alt="logo" className=' mb-2'/>
        {/* <h4 className="mt-1 mb-5 pb-1">We are The Petsy </h4> */}
      </div>
      <form onSubmit={login}>
      <p>Please login to your account</p>

    
      <MDBInput wrapperClass='mb-4' label='Email address' id='typeEmail' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='typePassword' type='password'/>


      <div className="text-center pt-1 mb-5 pb-1">
        <MDBBtn className="mb-4 w-100 gradient-custom-2" >Sign in</MDBBtn>

        <GoogleButton
                  className="w-100  mb-3 "
               type="dark" 
               onClick={GoogleLogin}
                  />


        <a className="text-muted " href="#!">Forgot password?</a>
      </div>

      <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
        <p className="mb-0">Don't have an account?</p>
        <MDBBtn outline className='mx-2' color='danger' onClick={()=>navigate('/register')}>
          Signup
        </MDBBtn>
     
      </div>
      </form>
    </div>

  </MDBCol>
 

  <MDBCol col='6' className="mb-5">
    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

      <div className="text-white px-3 py-4 p-md-5 mx-md-4">
        <h4 class="mb-4">Paws & Nourish - Your Pet's Culinary Haven</h4>
        <p class="small mb-0">Welcome to Paws & Nourish, where every wag and purr is met with a feast of flavors! As your dedicated pet food shop, we take pride in curating a premium selection of nutritionally balanced and delicious meals for your furry companions.
        </p>
      </div>
      
  
    </div>
    

  </MDBCol>
</MDBRow>

</MDBContainer>









    </div>

    

    </>
  )
}

export default Login