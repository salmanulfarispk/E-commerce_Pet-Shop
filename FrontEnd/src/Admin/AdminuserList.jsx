import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import AdminNav from './AdminNav';
import axios from 'axios';
import toast from 'react-hot-toast';

const AdminuserList = () => {


    const [users,setusers]=useState([])
   
  const fetchinguserslist=async()=>{
  try {
    const jwtToken={
      headers:{
        Authorization:`${localStorage.getItem("Admin jwt")}`
      }
    };
    const response=await axios.get("http://localhost:5000/api/admin/Allusers",jwtToken)
    if(response.status=== 200){
      setusers(response.data.data)
    }
  } catch (error) {
    console.log(error)
    toast.error("userlist not fetched!!")
  }


  }
    useEffect(()=>{
      fetchinguserslist();
    },[])



  return (
    <div>
     <div><AdminNav/></div><br/><br/><br/>
  
<MDBTable>
      <MDBTableHead light>
        <tr> 
          <th scope='col'><strong>id</strong></th>
          <th scope='col'><strong>Name</strong></th>
      
          <th scope='col'><strong>E-mail</strong></th>
        </tr>
      </MDBTableHead>
        {users.map((item)=>(
      <MDBTableBody>
        <tr>
          <th scope='row'>{item._id}</th>
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