
import {
   
    MDBInput,
      MDBBtn

  } from "mdb-react-ui-kit";


import AdminNav from './AdminNav';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const AdminAddpro = () => {

   const [products,setProducts]=useState([])
   const navigate=useNavigate()


   const [title,settitle]=useState("")
   const[image,setimage]=useState(null)
   const[category,setcategory]=useState("")
   const [price,setprice]=useState("")
   const[description,setdescription]=useState("")


   const imagechanges=(e)=>{
    const selectedimage=e.target.files[0];
    setimage(selectedimage)
   };


  const handlesubmit=async(item)=>{
    item.preventDefault();
    if(!title || !image || !category || !price || !description){
      toast.error("please fill all fields");
      return;
    }
  

   const formData=new FormData()
     formData.append("title",title)
     formData.append("image",image)
     formData.append("category",category)
     formData.append("price",price)
     formData.append("description",description)


     try{
      const jwtToken={
        headers:{
          Authorization:`${localStorage.getItem("Admin jwt")}`
        }
      };

      const response=await axios.post("http://localhost:5000/api/admin/products",formData,jwtToken)
      if(response.status===201){
        toast.success("succesfully product added")
        navigate("/adminaddpro")
      }else{
        toast.error("failed to add product")
      }
    }catch(error){
      console.log(error)
      toast.error("Failed to add product")
    }

    };

    const changingcategory=(e)=>{
       setcategory(e.target.value)
    }
   
  return (
    <div>
        <div><AdminNav/></div><br/><br/><br/>
    <h3 className='mt-3 '>Add products</h3><br/>
    <form className='w-50 ms-2' >
      <label>image</label>
      <MDBInput id='src'type='file' wrapperClass='mb-4' onChange={imagechanges} required />
      <MDBInput type='text' id='nametext' wrapperClass='mb-4' label='title' onChange={(e)=>settitle(e.target.value)} required />

      {/* <div className="mb-3"> */}
          <label htmlFor="type" className="form-label ">category</label>
          <select  id="typepro" onChange={changingcategory}>
                <option value="">select category</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              
         </select>
        {/* </div> */}
       

      <MDBInput wrapperClass='mb-4'  id='descript' rows={3} label='description'  onChange={(e)=>setdescription(e.target.value)}  required />
      <MDBInput label='Price' id='typeNumber' type='number'  wrapperClass='mb-4' onChange={(e)=>setprice(e.target.value)} required />
     
      
      
      
      <MDBBtn  className='mb-4  ms-2 ' color='success' onClick={handlesubmit}
      >
      Add
      </MDBBtn>
      <MDBBtn  className='mb-4  ms-2 ' onClick={()=>navigate('/adminallproducts')}
      >
         Back to All products
      </MDBBtn>
      </form>
  
      
     
         
    
    
    




    </div>
  )
}

export default AdminAddpro