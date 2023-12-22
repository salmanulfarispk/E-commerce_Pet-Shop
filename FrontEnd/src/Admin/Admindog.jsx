
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import AdminNav from './AdminNav';
import { useContext } from 'react';
import { MyContext } from '../Context';
import { useNavigate } from 'react-router-dom';


export const Admindog = () => {
  
     const {products,setProducts}=useContext(MyContext)
     const navigate=useNavigate()

     const Dogproducts=products.filter((item)=>(
      item.type.toLowerCase() == "dog"
     ))

    const deleteitem=(id)=>{
        setProducts((i)=>i.filter((item)=> item.id !==id
        ))}

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
          <th scope='col' className='fw-bold'>Offer Price</th>
          <th scope='col'className='fw-bold ms-3 '>Edit</th>
          <th scope='col'className='fw-bold ms-3'>Delete</th>


        </tr>
      </MDBTableHead>
      {Dogproducts.map((item)=>(
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

            <p className='mb-1'><strong> {item.id} </strong></p>

          </td>
          <td>
            {/* <p className='fw-normal mb-1'>Software engineer</p>
            <p className='text-muted mb-0'>IT department</p> */
            }

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
            {/* <MDBBadge color='success' pill>
              Active
            </MDBBadge> */}
        <div >
                <p className=' mb-1'>{item.name}</p>
                
              </div>


          </td>
          <td>
            {item.type}
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
               <p>{item.price2}</p>

          </td>

          <td>
            
            {/* <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn> */}
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
  

    </>
  )
}
