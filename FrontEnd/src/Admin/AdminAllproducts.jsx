
import {  MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import AdminNav from './AdminNav';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';


const AdminAllproducts = () => {
    
  const navigate=useNavigate()
    const [products,setProducts]=useState([])
  //  console.log(products);
const fetchingProdts=async()=>{
  try{
    const jwtToken={
      headers:{
        Authorization:`${localStorage.getItem("Admin jwt")}`
      }
    };
     
    
    const response=await axios.get("http://localhost:5000/api/admin/products",jwtToken)
    console.log(response)
     if(response.status === 200){
      setProducts(response.data.data)
     }

  }catch(err){
    console.log(err);
    toast.error("Error in Fetching All products")
  }

}

  useEffect(()=>{
    fetchingProdts();
  },[])

  const deleteProduct = async (productId) => {
    try {
      const jwtToken = {
        headers: {
          Authorization: `${localStorage.getItem("Admin jwt")}`,
        },
      };
  
      const response = await axios.delete(`http://localhost:5000/api/admin/products`,{...jwtToken,data:{productId}});
      // console.log(response)
      console.log(response.data.data) 
  
      if (response.status === 200) {
        setProducts(response.data.data);
        toast.success("Product Deleted successfully");
        fetchingProdts();
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
          {/* <th scope='col' className='fw-bold'>Offer Price</th> */}
          <th scope='col'className='fw-bold ms-3 '>Edit</th>
          <th scope='col'className='fw-bold ms-3'>Delete</th>


        </tr>
      </MDBTableHead>   
      <MDBTableBody>
      {products && products.map((item)=>
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
            
            
             <MDBBtn outline className='mx-2' color='info' onClick={()=>
               navigate(`/adminedit/${item._id}`)
              
             }>
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
   
       )}
      </MDBTableBody>
    </MDBTable>
    </div>
  )
}

export default AdminAllproducts