const jwt=require("jsonwebtoken")
const userDatabase=require("../models/userSchema")
const Allproducts=require("../models/productSchema")
const {joiproductSchema}=require("../models/validationSchema")
const { default: mongoose } = require("mongoose")
const orderSchema=require("../models/orderSchema")





module.exports={

// Admin login

  login: async (req,res)=>{
    const {email,password}=req.body;
      // console.log("admin:",req.body);  
     
   if( email === process.env.ADMIN_EMAIL &&   password === process.env.ADMIN_PASSWORD){ 
      
      const token= jwt.sign( 
       { email }, 
       process.env.ADMIN_ACCESS_TOKEN_SECRET    
      );
      // console.log(token);   

      return res.status(200).json({
        status:"success",
        message:"Admin login succesfully",
        token:token
      }); 

   }else{
    return res.status(404).json({
        status:"error",
        message:"invalid admin",
    });

   }

  },

    //list/view all users
    
    viewallusers: async(req,res)=>{
      const allusers= await userDatabase.find()
      // console.log(allusers);
       
      if(allusers.length === 0){
        return res.status(404).json({
          status:"error",
          message:"no users found"
        })
      }else{
        res.status(200).json({
          status:"successs",
          message:"All users succesfully founded",
          data:allusers
        })
      }


    },

    //admin view specific user

    viewById: async(req,res)=>{
      const userid=req.params.id;
      const user= await userDatabase.findById(userid)

      if(!user){
        return res.status(404).json({
          status:"error",
          message:" user not found"
        })
      }

      res.status(200).json({
        status:"success",
        message:"user founded succesfully",
        data:{user}
      })   

    },
 
  //Add products

    addproducts: async(req,res)=>{

        const {value,error}=  joiproductSchema.validate(req.body);
        // console.log(value);
        if(error){
          return res.status(404).json({
            error:error.details[0].message
          })
        } 

        const {title,price,category,description,image}=value;
        await Allproducts.create({
          title,
          category,
          image,
          price,
          description

        })    

        res.status(201).json({
          status:"success",
          message:"products created succesfully",
          data:Allproducts 
        })
 
    },

 
   //Admin delete products   
    deleteproduct: async(req,res)=>{
      
      const {id}=req.params; 

      //  console.log(id);   
 
      if(!id || !mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({
          status:"error",
          "message":"invalid product Id" 
        }) 
      } 
      const productdelete= await Allproducts.findOneAndDelete({_id: id})
      console.log( productdelete)
      if(!productdelete){ 
        return res.status(404).json({
          status:"product not found in database"
        })
      }
      return res.status(200).json({
        status:"successs",
        message:"product succesfully deleted"
      })

    },


    //Admin view all product

  viewAllproducts: async(req,res)=>{
    const productlist= await Allproducts.find()
    // console.log(productlist);
    if(!productlist){
      return res.status(404).json({
        status:"error",
        message:"products not found"
      })
    }
    res.status(200).json({
      status:"success",
      message:"products founded succesfully",
      data:productlist
    })
  },



  //Admin edit products

   editproducts: async(req,res)=>{
      const {value,error}= joiproductSchema.validate(req.body)
      // console.log("vlu",value)
      if(error){
        return res.status(404).json({
          status:"error",
          message:error.details[0].message 
        })
      }

      const {id,title,image,price,category,description}=value
   
      const product= await Allproducts.find()
      // console.log("products",product)
      if(!product){
        return res.status(404).json({ 
          status:"error",
          message:"product not found"
        })
      }
      await Allproducts.findByIdAndUpdate({
        _id:id},
        {
         title:title,
         image,
         price,
         category,
         description
        }
      )

      console.log(Allproducts)
      res.status(200).json({
        status:"success",
        message:"product succesfully updated/edited",
      }) 


   },

   //Admin view orderDetails

viewOrderDetails: async(req,res)=>{

  const products=await orderSchema.find()
  if(products.length === 0){
    res.status(404).json({
      status:"errror",
      message:"No Order Details "
    })
  } 
  res.status(200).json({
    status:"success",
    message:"order details succesfully fetched ",
    data:products
  })

},

//Total revenue generated

status: async(req,res)=>{ 
  const Totalrevenue= await orderSchema.aggregate([
  {
    $group:{ _id:null,
             totalproduct:{$sum: {$size: "$products"}},
            totalrevenue:{$sum : "$total_amount"},
    }
  }
  ])

   if(Totalrevenue.length > 0){
      res.status(200).json({
        status:"success",
        data:Totalrevenue[0]
      })
   }else{
        res.status(200).json({
          status:"success",
          data:{ totalproduct:0 ,totalrevenue: 0}
        })

   }

},

//admin get product by category
productByCategory:async(req,res)=>{

const category=req.params.categoryname;
const products=await Allproducts.find({category:category})
if(!products){
  return res.status(404).json({
    message:"products not found"
  })
}

return res.status(200).json({
  status:"success",
  message:"product fetched succesfully",
  data:products
})




},


//product by id

productByid:async(req,res)=>{
  const productid=req.params.id;
  const product=await Allproducts.findById(productid)
  if(!product){
    return res.status(404).json({
      status:"error",
      message:"product not found"
    })
  }

  return res.status(200).json({
     status:"success",
     message:"product got succesfully",
     data:product
  })

}

  
}   