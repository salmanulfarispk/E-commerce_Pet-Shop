import React, { useContext, useState } from 'react'
import {
   
    MDBInput,
      MDBBtn

  } from "mdb-react-ui-kit";
import AdminNav from './AdminNav';
import { MyContext } from '../Context';
import { useNavigate, useParams } from 'react-router-dom';



const AdminEdit = () => {


  const {products,setProducts}=useContext(MyContext)
    const navigate=useNavigate()
  const { id }  = useParams()


 const editpro=products.find((item)=>
     item.id ===  parseInt(id))  || {
      
      image:'',
      name:'',
      type:'',       
      description:'',
      price:'',
      price2:''
    
   };

  
  


   const [ids]=useState(editpro.id.toString())    
   const [image,setImage]=useState(editpro.src)     
   const [Name,setName]=useState(editpro.name)     
   const [Type,setType]=useState(editpro.type)
   const [Description,setDescription]=useState(editpro.description)
   const [price,setprice]=useState(editpro.price.toString())
   const [offprice,setoffprice]=useState(editpro.price2.toString())

 
   const onnSubmit=(e)=>{

          e.preventDefault();

          const updatedproducts={               
          id:parseInt(ids),
          name:Name,
          src:image,                             
          type:Type,
          description:Description,
          price:parseFloat(price),
          price2:parseFloat(offprice)

           };
          
          const updatedproductList=products.map((item)=>(
               item.id === updatedproducts.id ?  updatedproducts : item   
                      ))
             

       setProducts(updatedproductList)

    // console.log(updatedproductList);
    
       navigate('/adminallproducts')
   }

  return (
   
<div>
        <div><AdminNav/></div>

    <h3 className='mt-3 '>Edits products</h3><br/>
    <form className='w-50 ms-2'  onSubmit={onnSubmit}>
      <MDBInput id='src' type='text' value={image} wrapperClass='mb-4' label='image' required  
          onChange={(e)=>{
        setImage(e.target.value)  
      }} />
      <MDBInput type='text' id='nametext' value={Name} wrapperClass='mb-4' label='Name' required 
      onChange={(e)=>{
        setName(e.target.value)
      }} />

      <MDBInput type='text' id='typetext' value={Type} wrapperClass='mb-4' label='Type' required 
      onChange={(e)=>{
        setType(e.target.value)
      }} />
       
  
      <MDBInput wrapperClass='mb-4 mt-2' value={Description}  id='descript' rows={3} label='Description' required 
      onChange={(e)=>{
        setDescription(e.target.value)
      }} />
      <MDBInput label='Price' id='typeNumber' value={price}  type='number'  wrapperClass='mb-4' required 
       onChange={(e)=>{
        setprice(e.target.value)
      }}/>
      <MDBInput label='Offer Price' id='offNumber' value={offprice}  type='number'  wrapperClass='mb-4'required 
       onChange={(e)=>{
        setoffprice(e.target.value)
      }} />
      
      
      
      <MDBBtn  className='mb-4  ms-2 ' color='info'>
       submit
      </MDBBtn>
      </form>
  






    </div>
  )

    }
export default AdminEdit