import React, { useEffect, useState } from 'react'
import {
   
    MDBInput,
      MDBBtn

  } from "mdb-react-ui-kit";
import AdminNav from './AdminNav';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';



const AdminEdit = () => {

  const {id}=useParams()
 const [productData,setproductData]=useState({
  id:"",   
  title:"",
  category:"",
  price:"",
  image:"",
  description:""
 });


 const fetchproduct=async()=>{
  try {
    const jwttoken={
      headers:{
        Authorization:`${localStorage.getItem("Admin jwt")}`
      }
    };

    const response=await axios.get(`http://localhost:5000/api/admin/product/${id}`,jwttoken)
    // console.log(response)
    if(response.status===200){
      const{_id,title,image,category,price,description}=response.data.data;
      setproductData({
        id:_id,
        title,
        image,
        category,
        price,
        description,
      });
    }

  } catch (error) {
    console.error("Error fetching product data:", error);
    toast.error("product not fetching")
  }
 }
 useEffect(()=>{
  fetchproduct();
 },[id])


const submitEdits=async(e)=>{
    e.preventDefault();

  try{
    const jwttoken={
      headers:{
        Authorization:`${localStorage.getItem("Admin jwt")}`
      }
    }
    const response=await axios.patch(`http://localhost:5000/api/admin/product`,productData,jwttoken)
    // console.log(response)
    if(response.status===200){
      toast.success("product edited succesfully")
    }

  }catch(err){
    console.error("Error editing product:", err);
    toast.error(err.message)
  }

}

const handleChange = (e) => {
  const { name, value } = e.target;
 
  setproductData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
 

  return (
   
<div>
        <div><AdminNav/></div>

    <h3 className='mt-3 '>Edits products</h3><br/>
    <form className='w-50 ms-2'onSubmit={submitEdits}>
      <MDBInput id='image' type='text' value={productData.image} wrapperClass='mb-4' label='image' onChange={handleChange} required  
         />
      <MDBInput type='text' id='title' value={productData.title} wrapperClass='mb-4' label='title' onChange={handleChange} required 
      />

      <MDBInput type='text' id='category' value={productData.category} wrapperClass='mb-4' label='category' onChange={handleChange} required 
       />
       
  
      <MDBInput wrapperClass='mb-4 mt-2' value={productData.description}  id='description' rows={3} label='description' onChange={handleChange} required 
       />
      <MDBInput label='Price' id='Price' value={productData.price}  type='number'  wrapperClass='mb-4' required onChange={handleChange}
       />
     
      
      
      <MDBBtn  className='mb-4  ms-2 ' color='info'>
       submit
      </MDBBtn>
      </form>
  

    </div>
  )

    }
export default AdminEdit