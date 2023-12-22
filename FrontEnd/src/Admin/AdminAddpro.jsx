import React, { useContext } from 'react'
import {
   
    MDBInput,
      MDBBtn

  } from "mdb-react-ui-kit";
import { MyContext } from '../Context';

import AdminNav from './AdminNav';

const AdminAddpro = () => {

  const {products,setProducts}=useContext(MyContext)
  
  const handleAdd=(event)=>{

     event.preventDefault();

    const imgproduct=event.target.src.value;
    const nameproduct=event.target.nametext.value;
    const typeproduct=event.target.typepro.value;
    const descriptproduct=event.target.descript.value;
    const pricepro=event.target.typeNumber.value;
    const priceoff=event.target.offNumber.value;
    
           
    event.target.reset();
 
    if(typeproduct){
      setProducts([
             ...products,
        {
             src:imgproduct,
             name:nameproduct,
             type:typeproduct,
             description:descriptproduct,
             price:pricepro,
             price2:priceoff,
            
             id:products.length + 1

            }]
      )
    }else{
      alert("Select category")
    }


  }


   
  return (
    <div>
        <div><AdminNav/></div><br/><br/><br/>
    <h3 className='mt-3 '>Add products</h3><br/>
    <form className='w-50 ms-2' onSubmit={handleAdd}>
      <MDBInput id='src'type='text' wrapperClass='mb-4' label='image' required />
      <MDBInput type='text' id='nametext' wrapperClass='mb-4' label='Name' required />

      {/* <div className="mb-3"> */}
          <label htmlFor="type" className="form-label ">Type:</label>
          <select  id="typepro">
                <option value="">select category</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                {/* <option value="sofa">Sofa</option>
                <option value="bed">Bed</option>
                <option value="wardrobe">wardrobe</option> */}
         </select>
        {/* </div> */}
       

      <MDBInput wrapperClass='mb-4'  id='descript' rows={3} label='Description' required />
      <MDBInput label='Price' id='typeNumber' type='number'  wrapperClass='mb-4' required />
      <MDBInput label='Offer Price' id='offNumber' type='number'  wrapperClass='mb-4'required />
      
      
      
      <MDBBtn  className='mb-4  ms-2 ' color='success'
      >
      Add
      </MDBBtn>
      </form>
  
      
     
         
    
    
    




    </div>
  )
}

export default AdminAddpro