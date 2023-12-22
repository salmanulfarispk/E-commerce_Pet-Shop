import React, { useContext } from 'react'
import { MDBInput,MDBBtn,MDBContainer,MDBCol,MDBRow,MDBCard,MDBCardBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context';
import Nav from '../components/Nav';




const Login = () => {

  const navigate=useNavigate()
  const {user,setUsername,setLoggedin}=useContext(MyContext)
  // console.log(user);

   const getvalue=(event)=>{
    event.preventDefault();
   

    const getemail=event.target.typeEmail.value;
    const getpass=event.target.typePassword.value;

      // console.log(getemail);
      // console.log(getpass);

      const filteredUser=user.filter((item)=>{
        return item.email === getemail
      })

   if(filteredUser.length !== 0){
       
      if (filteredUser[0].password == getpass){
         setLoggedin((preValue)=>(preValue = !preValue));
          
         navigate('/') 
         setUsername(filteredUser[0].name)

      }else{
        alert("invalid details")
      }
    } else if (getemail === "admin@gmail.com" && getpass === "admin") {
      navigate("/adminhome");  //to admin home page
   


   }else{
    alert("user not available")
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
      <form onSubmit={getvalue}>
      <p>Please login to your account</p>

    
      <MDBInput wrapperClass='mb-4' label='Email address' id='typeEmail' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='typePassword' type='password'/>


      <div className="text-center pt-1 mb-5 pb-1">
        <MDBBtn className="mb-4 w-100 gradient-custom-2" >Sign in</MDBBtn>
        <a className="text-muted" href="#!">Forgot password?</a>
      </div>

      <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
        <p className="mb-0">Don't have an account?</p>
        <MDBBtn outline className='mx-2' color='danger' onClick={()=>navigate('/register')}>
          Register
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