
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import AdminNav from './AdminNav';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
import toast from 'react-hot-toast';

export const Admindog = () => {
  
const [products,setProducts]=useState([])
// console.log(products);
const navigate=useNavigate()
const categoryname="dog"


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
    <>
         <div>
   <div><AdminNav/></div><br/><br/>
<MDBTable align='middle' className='mt-3'>
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
        <tr>
          <td>
            {/* <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div> */}

            <p className='mb-1'><strong> {item._id} </strong></p>

          </td>
          <td>
            {/* <p className='fw-normal mb-1'>Software engineer</p>
            <p className='text-muted mb-0'>IT department</p> */
            }

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
            {/* <MDBBadge color='success' pill>
              Active
            </MDBBadge> */}
        <div >
                <p className=' mb-1'>{item.title}</p>
                
              </div>


          </td>
          <td>
            {item.category}
          </td>
          <td>
            {/* <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn> */}

       <p className='fw-normal mb-1'>{item.description}</p>


          </td>


          <td>
               <p>{item.price}</p>

          </td>

          
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
                deleteProduct(item._id)}}>
        Delete
      </MDBBtn>
      </td>





        </tr>
       
   
      </MDBTableBody>
      ))}
    </MDBTable>



    </div>
  

    </>
  )
}
