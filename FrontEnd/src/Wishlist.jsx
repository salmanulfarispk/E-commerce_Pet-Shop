import React from 'react'
import { Axios } from './App'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import {MDBIcon} from 'mdb-react-ui-kit'
import Nav from './components/Nav'
const Wishlist = () => {

    const userid=localStorage.getItem("userId")
    const [products,setProducts]=useState([])

    const viewWishlist=async()=>{
        try {
            
            const response=await Axios.get(`/api/users/${userid}/wishlist`)
            if(response.status === 200){
                setProducts(response.data.data)
            }


        } catch (error) {
            console.log(error);
            toast.error(error)
        }
    }

     useEffect(()=>{
        viewWishlist();
     },[])


  const deleteWishlist=async(productId)=>{
    try {
        
     const response=await Axios.delete(`/api/users/${userid}/wishlist`,{ data:{productId}} )
     if(response.status ===200){
        toast.success(response.data.message)
        await viewWishlist();
     }

    } catch (error) {
      toast.error(error.message);
        console.log(error);
    }
  }



  return (
    <div>
        <div>
            <Nav/>
        </div>

<section
        className="products d-flex flex-column align-items-center mb-5"
        style={{ paddingTop: "80px" }}
      >
        <h1 className="mt-5 text-black fw-bolder">
          <span>My</span> Wishlist
        </h1>

        <div className="product-content d-flex justify-content-evenly">
          {products.length !== 0 ? (
            products.map((value) => (
              <div className="box mx-3" key={value._id}>
                <div className="box-img">
                  <img
                    src={value.image}
                    style={{ width: 200 }}
                    alt={value.title}
                  />
                </div>
                <h3>{value.title}</h3>
                <div className="inbox">
                  <span className="strike-price">
                  </span>
                  <span className="price">${value.price}</span>
                </div>
                <div className="heart">
                  {products.some((item) => item._id === value._id) && (
                    <MDBIcon
                      fas
                      style={{ color: "red" }}
                      icon="heart"
                      className="clicked-heart-icon"
                      onClick={() => deleteWishlist(value._id)}
                    />
                  )}
                </div>
              </div>
            ))
          ) : (
            <h1>Wishlist is Empty!</h1>
          )}
        </div>
      </section>








    </div>
  )
}

export default Wishlist