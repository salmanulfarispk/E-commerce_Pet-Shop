import React, { useContext } from 'react'
import {  MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MyContext } from '../Context';
import AdminNav from './AdminNav';
import { useNavigate } from 'react-router-dom';


const AdminAllproducts = () => {
    const {products,setProducts}=useContext(MyContext)
        const navigate=useNavigate()
    
    const deleteitem=(id)=>{
      setProducts((i)=>i.filter((item)=> item.id !==id
      ))}
      
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
          <th scope='col' className='fw-bold'>Offer Price</th>
          <th scope='col'className='fw-bold ms-3 '>Edit</th>
          <th scope='col'className='fw-bold ms-3'>Delete</th>


        </tr>
      </MDBTableHead>
      {products.map((item)=>
      <MDBTableBody>
        <tr>
          <td>
          

            <p className='mb-1'><strong> {item.id}</strong></p>

          </td>
          <td>
           
              <div className='d-flex align-items-center'>
              <img
                src={item.src}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
                </div>
          </td>
          <td>
       
        <div >
                <p className=' mb-1'>{item.name}</p>
                
              </div>


          </td>
          <td>
                 {item.type}
          </td>
          <td>
       
       <p className='fw-normal mb-1'>{item.description}</p>


          </td>


          <td>
               <p>{item.price}</p>

          </td>

          <td>
               <p>{item.price2}</p>

          </td>

          <td>
            
            
             <MDBBtn outline className='mx-2' color='info' onClick={()=>
               navigate(`/adminedit/${item.id}`)
              
             }>
       Edit
      </MDBBtn>
      

     </td>
             <td>
             <MDBBtn outline className='mx-2' color='danger'
              onClick={()=>{
                deleteitem(item.id)}}>
        Delete
      </MDBBtn>
      </td>





        </tr>
       
   
      </MDBTableBody>
      )}
    </MDBTable>



    </div>
  )
}

export default AdminAllproducts