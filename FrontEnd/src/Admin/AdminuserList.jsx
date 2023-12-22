import React, { useContext } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import AdminNav from './AdminNav';
import { MyContext } from '../Context';

const AdminuserList = () => {

    const {user}=useContext(MyContext)
    console.log(user);
   
    



  return (
    <div>
     <div><AdminNav/></div><br/><br/><br/>
  
<MDBTable>
      <MDBTableHead light>
        <tr>
          <th scope='col'><strong>No</strong></th>
          <th scope='col'><strong>Name</strong></th>
      
          <th scope='col'><strong>E-mail</strong></th>
        </tr>
      </MDBTableHead>
        {user.map((item)=>(
      <MDBTableBody>
        <tr>
          <th scope='row'>1</th>
          <td>{item.name}</td>
          <td>{item.email}</td>

        
        </tr>

      </MDBTableBody>
      ))}
    </MDBTable>



    </div>
  )
}

export default AdminuserList