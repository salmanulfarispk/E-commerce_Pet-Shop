
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import AdminNav from './AdminNav';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


const AdminCat = () => {

const [products,setProducts]=useState([])
// console.log(products);
const navigate=useNavigate()
const categoryname="cat"


const productByCategory=async()=>{
try {
 const jwtToken={
  headers:{
    Authorization:`${localStorage.getItem("Admin jwt")}`
  }
 };
   
 const response=await axios.get(`http://localhost:5000/api/admin/products/category/${categoryname}`,jwtToken)
 if(response.status===200){
  setProducts(response.data.data)
 }

  
} catch (error) {
  console.log("error",error);
  toast.error(error)
}

}

useEffect(()=>{
  productByCategory();
},[])



const deleteProduct = async (productId) => {
  try {
    const jwtToken = {
      headers: { 
        Authorization: `${localStorage.getItem("Admin jwt")}`,
      },
    };

   
    const response = await axios.delete(`http://localhost:5000/api/admin/product/${productId}`, jwtToken);

    // console.log(response) 

    if (response.status === 200) {
      setProducts(response.data.data);
      toast.success("Product Deleted successfully");
      productByCategory();
      
    } else {
      toast.error("Failed to delete product");
    }
  } catch (err) {
    console.error(err);
    toast.error("Failed to delete product");
  }
};

  return (
    <div>


<div>
   <div><AdminNav/></div><br/><br/>
<MDBTable align='middle' className='mt-4'>
      <MDBTableHead>
        <tr>
          <th scope='col' className='fw-bold'>Id</th>
          <th scope='col'className='fw-bold'>image</th>
          <th scope='col'className='fw-bold'>Name</th>
          <th scope='col'className='fw-bold'>Category</th>
          <th scope='col'className='fw-bold'>Description</th>
          <th scope='col'className='fw-bold'>Price</th>
         
          <th scope='col'className='fw-bold ms-3 '>Edit</th>
          <th scope='col'className='fw-bold ms-3'>Delete</th>


        </tr>
      </MDBTableHead>

      {products && products.map((item)=>(
      <MDBTableBody>
        <tr key={item._id}>
          <td>
          

            <p className='mb-1'><strong> {item._id}</strong></p>

          </td>
          <td>
           
            

              <div className='d-flex align-items-center'>
              <img
                src={item.image}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
                </div>
          </td>
          <td>
           
        <div >
                <p className=' mb-1'>{item.title}</p>
                
              </div>


          </td>
          <td>
              {item.category}
          </td>
          <td>
           

       <p className='fw-normal mb-1'>{item.description}</p>


          </td>


          <td>
               <p>{item.price}</p>

          </td>

          {/* <td>
               <p>{item.price2}</p>

          </td> */}

          <td>
            
          
             <MDBBtn outline className='mx-2' color='success' onClick={()=>{
                navigate(`/adminedit/${item._id}`)
             }}>
       Edit
      </MDBBtn>
      

     </td>
             <td>
             <MDBBtn outline className='mx-2' color='danger'
              onClick={()=>{
                deleteProduct(item._id)}}
            >
        Delete
      </MDBBtn>
      </td>





        </tr>
       
   
      </MDBTableBody>
      ))}
    </MDBTable>



    </div>





    </div>
  )
}

export default AdminCat