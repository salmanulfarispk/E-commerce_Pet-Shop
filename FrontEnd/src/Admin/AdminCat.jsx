
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import AdminNav from './AdminNav';
import { useContext } from 'react';
import { MyContext } from '../Context';
import { useNavigate } from 'react-router-dom';


const AdminCat = () => {

   const {products,setProducts}=useContext(MyContext)
     const navigate=useNavigate()
    
       
   const CatProducts=products.filter((item)=>(
        
    item.type.toLowerCase() == "cat"

   ))



    const deleteitem=(id)=>{
        setProducts((i)=>i.filter((item)=> item.id !==id
        ))}

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
          <th scope='col' className='fw-bold'>Offer Price</th>
          <th scope='col'className='fw-bold ms-3 '>Edit</th>
          <th scope='col'className='fw-bold ms-3'>Delete</th>


        </tr>
      </MDBTableHead>

      {CatProducts.map((item)=>(
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
            
          
             <MDBBtn outline className='mx-2' color='success' onClick={()=>{
                navigate(`/adminedit/${item.id}`)
             }}>
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
      ))}
    </MDBTable>



    </div>





    </div>
  )
}

export default AdminCat